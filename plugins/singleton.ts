/**
 * Handles stripping out document options and actinos that don't make sense for singletons
 */

import { definePlugin } from 'sanity'

export const settingsPlugin = definePlugin<{ typeName: string }>(
  ({ typeName }) => {
    return {
      name: `singleton-${typeName}`,
      document: {
        // Filters the type out of the global "New Document" menu
        newDocumentOptions: (prev, { creationContext }) => {
          if (creationContext.type === 'global') {
            return prev.filter(
              (templateItem) => templateItem.templateId !== typeName
            )
          }

          return prev
        },
        // Removes the "duplicate" action on the "settings" singleton
        actions: (prev, { schemaType }) => {
          if (schemaType === typeName) {
            return prev.filter(({ action }) => action !== 'duplicate')
          }

          return prev
        },
      },
    }
  }
)
