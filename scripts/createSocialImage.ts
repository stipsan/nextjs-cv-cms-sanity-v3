/**
 * This creates and uploads a social image graphic to Sanity:
 * 1. Check if creating a new graphic is necessary, unless `force = true`
 * 2. Check if puppeteer can be used.
 * 3. Render the graphic.
 * 4. Screenshot and upload.
 */

import createSanityClient from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config()

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
      hello,
    }`,
    { id: documentId }
  )
  // @TODO render the page directly instead of visiting it on vercel, as it's way faster and in sync with code changes
  console.log(data)

  if (!data?._id) {
    throw new Error('Missing _id!')
  }

  if (data?.hello === 'Edge') {
    console.log(
      'Skipping, as "hello" is already "Edge" in the published document'
    )
    return 0
  }

  const writeToken = process.env.SANITY_API_WRITE_TOKEN
  if (!writeToken) {
    throw new TypeError(`Missing SANITY_API_WRITE_TOKEN`)
  }
  const writeClient = client.withConfig({ token: writeToken })

  console.log(`Patching ${data._id} with "hello": "Edge"`)
  await writeClient.patch(data._id).set({ hello: 'Edge' }).commit()
  console.log('Done!')

  return 0
}

main(process)
  .then(process.exit)
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
