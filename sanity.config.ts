'use client'

import { visionTool } from '@sanity/vision'
import {
  type Language,
  internationalizedArray,
} from '@stipsan/sanity-plugin-internationalized-array'
import OpenGraphPreview from 'components/OpenGraphPreview'
// Customize the Studio theme here: https://themer.sanity.build/?preset=verdant
import { theme } from 'https://themer.sanity.build/api/hues?preset=verdant'
import { apiVersion, dataset, projectId } from 'lib/sanity.api'
import { languagesQuery } from 'lib/sanity.queries'
import { Settings, View, Contact, Pencil } from 'lucide-react'
import { singleton } from 'plugins/singleton'
import { createElement } from 'react'
import { defineConfig, defineField, SanityClient } from 'sanity'
import { deskTool } from 'sanity/desk'
import confidentialType from 'schemas/confidential'
import educationType from 'schemas/education'
import jobType from 'schemas/job'
import languageType from 'schemas/language'
import settingsType from 'schemas/settings'
import workplaceType from 'schemas/workplace'

async function loadLanguages(client: SanityClient): Promise<Language[]> {
  const languages = await client.fetch<Language[]>(languagesQuery)
  return languages.length > 0 ? languages : [{ id: 'en', title: 'English' }]
}

const config = defineConfig({
  basePath: '/studio',
  name: 'CV',
  theme,
  projectId,
  dataset,
  plugins: [
    singleton({ typeName: settingsType.name }),
    singleton({ typeName: confidentialType.name }),
    deskTool({
      structure: (S) => {
        // The `Settings` root list item
        const settingsListItem = // A singleton not using `documentListItem`, eg no built-in preview
          S.listItem()
            .title(settingsType.title)
            .icon(settingsType.icon)
            .child(
              S.editor()
                .id(settingsType.name)
                .schemaType(settingsType.name)
                .documentId(settingsType.name)
                .views([
                  S.view
                    .form()
                    .icon(createElement(Pencil, { size: 24, strokeWidth: 1 })),
                  S.view
                    .component(OpenGraphPreview)
                    .icon(createElement(Contact, { size: 24, strokeWidth: 1 }))
                    .title('Open Graph Preview'),
                ])
            )

        // The `Confidential` root list item
        const confidentialListItem = // A singleton not using `documentListItem`, eg no built-in preview
          S.listItem()
            .title(confidentialType.title)
            .icon(confidentialType.icon)
            .child(
              S.editor()
                .id(confidentialType.name)
                .schemaType(confidentialType.name)
                .documentId(confidentialType.name)
            )

        // The default root list items (except custom ones)
        const defaultListItems = S.documentTypeListItems().filter(
          (listItem) =>
            listItem.getId() !== settingsType.name &&
            listItem.getId() !== confidentialType.name &&
            listItem.getId() !== languageType.name
        )

        return S.list()
          .id('root')
          .title('Content')
          .items([
            S.documentTypeListItems()
              .find((listItem) => listItem.getId() === languageType.name)
              .title('Languages'),
            S.divider(),
            settingsListItem,
            confidentialListItem,
            S.divider(),
            ...defaultListItems,
          ])
      },
    }),
    internationalizedArray({
      apiVersion,
      languages: loadLanguages,
      fieldTypes: [
        'string',
        'text',
        defineField({
          name: 'altText',
          type: 'text' as any,
          rows: 2,
        }),
        defineField({
          name: 'pdf',
          type: 'file',
          options: { accept: 'application/pdf' },
        }),
      ],
    }),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: [
      languageType,
      settingsType,
      confidentialType,
      jobType,
      workplaceType,
      educationType,
    ],
  },
})

export default config
