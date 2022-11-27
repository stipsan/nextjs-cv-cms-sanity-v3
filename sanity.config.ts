'use client'

import { visionTool } from '@sanity/vision'
import { internationalizedArray } from '@stipsan/sanity-plugin-internationalized-array'
// Customize the Studio theme here: https://themer.sanity.build/?preset=verdant
import { theme } from 'https://themer.sanity.build/api/hues?preset=verdant'
import { apiVersion, dataset, projectId } from 'lib/sanity.api'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import languageType from 'schemas/language'
import settingsType from 'schemas/settings'

async function fetchLanguages() {
  return [
    { id: 'en', title: 'English' },
    { id: 'no', title: 'Norwegian' },
  ]
}

const config = defineConfig({
  basePath: '/studio',
  name: 'CV',
  theme,
  plugins: [
    deskTool(),
    internationalizedArray({
      languages: fetchLanguages,
      fieldTypes: ['string', 'text'],
    }),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  projectId,
  dataset,
  document: {
    actions: (prev, { schemaType }) => {
      if (schemaType === 'secrets') {
        return prev.filter(({ action }) => action !== 'duplicate')
      }
      if (schemaType === 'settings') {
        return prev.filter(
          ({ action }) => action !== 'unpublish' && action !== 'duplicate'
        )
      }

      return prev
    },
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter(
          (templateItem) =>
            templateItem.templateId !== 'settings' &&
            templateItem.templateId !== 'secrets'
        )
      }

      return prev
    },
  },

  schema: {
    types: [
      settingsType,
      languageType,
      {
        title: 'Company',
        name: 'company',
        type: 'document',
        fields: [
          {
            title: 'Name',
            name: 'name',
            type: 'string',
          },
          {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: { source: 'name' },
          },
          {
            title: 'LinkedIn',
            name: 'linkedin',
            type: 'url',
          },
          {
            title: 'Logo',
            name: 'logo',
            type: 'image',
            description:
              'The logo will need render in a timeline that uses a CSS drop-shadow effect to create a white outline. Thus the opacity of the logo must be deliberate in order for it to look great. And generally square logos look better.',
            options: { hotspot: true },
          },
        ],
      },
      {
        title: 'Experience',
        name: 'experience',
        type: 'document',
        fields: [
          {
            title: 'Role',
            name: 'role',
            type: 'string',
          },
          {
            title: 'Company',
            name: 'company',
            type: 'reference',
            to: [{ type: 'company' }],
          },
          {
            title: 'Joined',
            name: 'joined',
            type: 'date',
          },
          {
            title: 'Left',
            name: 'left',
            type: 'date',
          },
          {
            title: 'Location',
            name: 'location',
            type: 'string',
          },
          {
            title: 'Flag',
            name: 'flag',
            type: 'string',
          },
          {
            title: 'Map URL',
            name: 'mapUrl',
            type: 'url',
          },
          {
            title: 'Remote Work',
            name: 'remote',
            type: 'boolean',
          },
        ],
        initialValue: {
          remote: false,
        },
      },
      {
        title: 'Education',
        name: 'education',
        type: 'document',
        fields: [
          {
            title: 'School',
            name: 'school',
            type: 'string',
          },
          {
            title: 'Degree',
            name: 'degree',
            type: 'string',
          },
          {
            title: 'Field of study',
            name: 'field',
            type: 'string',
          },
          {
            title: 'Start date',
            name: 'start',
            type: 'date',
            options: { dateFormat: 'YYYY' },
          },
          {
            title: 'End date',
            name: 'end',
            type: 'date',
            options: { dateFormat: 'YYYY' },
          },
        ],
      },
    ],
  },
})

export default config
