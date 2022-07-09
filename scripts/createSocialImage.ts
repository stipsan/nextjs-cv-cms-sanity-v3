/**
 * This creates and uploads a social image graphic to Sanity:
 * 1. Check if creating a new graphic is necessary, unless `force = true`
 * 2. Check if puppeteer can be used.
 * 3. Render the graphic.
 * 4. Screenshot and upload.
 */

import createSanityClient from '@sanity/client'
import chrome from 'chrome-aws-lambda'
import dotenv from 'dotenv'
import puppeteer from 'puppeteer-core'

import { defaultLocale } from '../intl.config.json'

dotenv.config()

/** The code below determines the executable location for Chrome to
 * start up and take the screenshot when running a local development environment.
 *
 * If the code is running on Windows, find chrome.exe in the default location.
 * If the code is running on Linux, find the Chrome installation in the default location.
 * If the code is running on MacOS, find the Chrome installation in the default location.
 * You may need to update this code when running it locally depending on the location of
 * your Chrome installation on your operating system.
 */

const exePath =
  process.platform === 'win32'
    ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    : process.platform === 'linux'
    ? '/usr/bin/google-chrome'
    : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

async function getOptions(isDev: boolean) {
  let options
  if (isDev) {
    options = {
      args: ['--disable-dev-shm-usage'],
      executablePath: exePath,
      headless: true,
    }
  } else {
    options = {
      args: [...chrome.args, '--disable-dev-shm-usage'],
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    }
  }
  return options
}

const isDev = !process.env.AWS_REGION

async function getScreenshot({
  url,
  timeout,
  idleTime,
  viewport = chrome.defaultViewport,
}: {
  url: string
  timeout: number
  idleTime: number
  viewport?: puppeteer.Viewport
}) {
  const options = await getOptions(isDev)
  const browser = await puppeteer.launch(options)
  const page = await browser.newPage()
  console.info('page.setViewport', viewport)
  await page.setViewport(viewport)
  console.info(`page.goto(${url})`)
  await page.goto(url)
  try {
    console.info('waitForNetworkIdle')
    await page.waitForNetworkIdle({ timeout, idleTime })
  } catch {
    console.info('waitForNetworkIdle timed out')
  }

  // 📸
  return page.screenshot({ type: 'png' })
}

async function main({ argv }) {
  // @TODO maybe use https://github.com/vercel/arg to parse the args
  const [, , documentId] = argv

  if (!documentId) {
    throw new TypeError('No documentId provided')
  }

  if (
    documentId !== 'settings' &&
    !documentId.startsWith?.('settings__i18n_')
  ) {
    throw new TypeError(
      'documentId must be either "settings" or start with "settings__i18n_"'
    )
  }

  const { sanity: sanityConfig } = await import('../env.config.mjs')

  const { projectId, dataset, apiVersion, useCdn, token } = sanityConfig

  if (!token) {
    throw new TypeError(`Missing SANITY_API_TOKEN`)
  }

  const client = createSanityClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    token,
  })

  const data = await client.fetch(
    /* groq */ `*[_id == $id][0]{
      _id,
      social {
        mode,
        headshot,
        eyebrow,
        name,
        role,
        pronouns,
        image,
      }
    }`,
    { id: documentId }
  )
  // @TODO render the page directly instead of visiting it on vercel, as it's way faster and in sync with code changes
  console.log(data)

  if (!data?._id) {
    throw new Error('Missing _id!')
  }

  if (data.social?.mode !== 'auto') {
    console.log('settings.social.mode is not "auto", skipping')
    return 0
  }

  let isDifferent = false
  if (data.social?.eyebrow !== data.social?.image?.eyebrow) {
    isDifferent = true
    console.log(
      'eyebrow is different',
      `${data.social?.eyebrow} !== ${data.social?.image?.eyebrow}`
    )
  }
  if (data.social?.headshot?.asset?._ref !== data.social?.image?.headshot) {
    isDifferent = true
    console.log(
      'headshot is different',
      `${data.social?.headshot?.asset?._ref} !== ${data.social?.image?.headshot}`
    )
  }
  if (data.social?.name !== data.social?.image?.name) {
    isDifferent = true
    console.log(
      'name is different',
      `${data.social?.name} !== ${data.social?.image?.name}`
    )
  }
  if (data.social?.role !== data.social?.image?.role) {
    isDifferent = true
    console.log(
      'role is different',
      `${data.social?.role} !== ${data.social?.image?.role}`
    )
  }
  if (data.social?.pronouns !== data.social?.image?.pronouns) {
    isDifferent = true
    console.log(
      'pronouns is different',
      `${data.social?.pronouns} !== ${data.social?.image?.pronouns}`
    )
  }

  if (!isDifferent) {
    console.log('no changes, skipping')
    return 0
  }

  const locale =
    data._id === 'settings'
      ? defaultLocale
      : data._id.replace('settings__i18n_', '')
  const url = new URL(
    `/${locale}/scripts/createSocialImage?secret=${process.env.WORKFLOW_DISPATCH_SECRET}`,
    'https://cv.creativecody.dev/'
  )
  const file = await getScreenshot({
    url: url.toString(),
    timeout: 30000,
    idleTime: 3000,
    viewport: {
      width: 1280,
      height: 640,
      deviceScaleFactor: 2,
    },
  })

  // @TODO check if needed to update
  /*
  if (data?.hello === 'Edge') {
    console.log(
      'Skipping, as "hello" is already "Edge" in the published document'
    )
    return 0
  }
  // */

  const writeToken = process.env.SANITY_API_WRITE_TOKEN
  if (!writeToken) {
    throw new TypeError(`Missing SANITY_API_WRITE_TOKEN`)
  }
  const writeClient = client.withConfig({ token: writeToken })

  console.log(
    'Uploading screenshot to Sanity',
    data.social?.headshot?.asset?._ref
  )
  const imageAsset = await writeClient.assets.upload(
    'image' as const,
    file as Buffer,
    {
      filename: `somecard-${locale}.png`,
    }
  )

  console.log(`Patching ${data._id} with screenshot ref`, imageAsset)
  await writeClient
    .patch(data._id)
    .set({
      'social.image.asset': {
        _type: 'reference',
        _ref: imageAsset._id,
      },
      'social.image.alt': `A profile graphic featuring a headshot of ${data.social?.name}, and the text: ${data.social?.eyebrow}, ${data.social?.name}, ${data.social?.pronouns} and ${data.social?.role}`,
      'social.image.headshot': data.social?.headshot?.asset?._ref ?? null,
      'social.image.eyebrow': data.social?.eyebrow ?? null,
      'social.image.name': data.social?.name ?? null,
      'social.image.pronouns': data.social?.pronouns ?? null,
      'social.image.role': data.social?.role ?? null,
    })
    .commit()
  console.log('Done patching!')

  return 0
}

main(process)
  .then(process.exit)
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
