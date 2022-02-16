import { createClient } from 'next-sanity'

import { sanityConfig } from './config'

export const sanityClient = createClient(sanityConfig)

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

export const getClient = (preview) => (preview ? previewClient : sanityClient)
