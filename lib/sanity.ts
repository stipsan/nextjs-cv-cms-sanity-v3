import { createPreviewSubscriptionHook } from 'next-sanity'

import { sanityConfig } from './config'

export const usePreviewSubscription =
  createPreviewSubscriptionHook(sanityConfig)
