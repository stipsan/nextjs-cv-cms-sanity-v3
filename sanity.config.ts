'use client'

import { visionTool } from '@sanity/vision'
import {
  type Language,
  internationalizedArray,
} from '@stipsan/sanity-plugin-internationalized-array'
// Customize the Studio theme here: https://themer.sanity.build/?preset=verdant
import { theme } from 'https://themer.sanity.build/api/hues?preset=verdant'
import { apiVersion, dataset, projectId } from 'lib/sanity.api'
import { languagesQuery } from 'lib/sanity.queries'
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
    deskTool(),
    internationalizedArray({
      apiVersion,
      languages: loadLanguages,
      fieldTypes: [
        'string',
        'text',
        'file',
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
