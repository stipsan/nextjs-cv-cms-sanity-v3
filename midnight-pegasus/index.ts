import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { type Config, type StudioProps, Studio } from 'sanity'

export function renderStudio(
  rootElement: HTMLElement | null,
  config: Config,
  props: Omit<StudioProps, 'config'>
) {
  if (!rootElement) {
    throw new Error('Missing root element to mount application into')
  }
  const root = createRoot(rootElement, {
    // Setting the identifierPrefix allows React to render next to other React roots without risking React.useId collisions
    identifierPrefix: `sanityStudio:${
      (Array.isArray(config) ? config[0] : config).basePath || ''
    }`,
  })
  root.render(createElement(Studio, { ...props, config }))

  return {
    get unmount() {
      return root.unmount
    },
    get render() {
      return root.render
    },
    // Fancy API being tested
    unstable_patch(props: Partial<StudioProps>) {
      return root.render(createElement(Studio, { config, ...props }))
    },
  }
}

// These are key to do some custom stuff
export { createConfig, StudioLayout, StudioProvider } from 'sanity'
export { deskTool } from 'sanity/desk'
