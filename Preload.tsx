import {
  type PluginConfig,
  peek, 
  preload} from '@stipsan/sanity-plugin-internationalized-array'
import { memo } from "react"
import { useClient } from "sanity"

const Preload = memo(function Preload(
  props: Required<Pick<PluginConfig, 'apiVersion' | 'languages'>>
) {
  const client = useClient({apiVersion: props.apiVersion})
  if (!Array.isArray(peek())) {
    // eslint-disable-next-line require-await
    preload(async () =>
      Array.isArray(props.languages) ? props.languages : props.languages(client)
    )
  }

  return null
})

export default Preload