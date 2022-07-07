// @ts-check

// This weird || dance is to make TypeScript happy as there is a bug in the type defs
const createSanityClient =
  require('@sanity/client')?.default || require('@sanity/client')

async function main() {
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

  const data = await client.fetch(/* groq */ `*[_id == "private.secrets"][0]{
      _id,
      hello,
    }`)
  console.log(data)

  if (!data?._id) {
    throw new Error('Missing _id!')
  }

  if (data?.hello !== 'Edge') {
    return 0
  }

  await client.patch(data._id).set({ hello: 'Edge' }).commit()

  return 0
}

main()
  .then(process.exit)
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
