import {
  getFilteredDocumentTypeListItems,
  IdStructure,
  withDocumentI18nPlugin,
} from '@sanity/document-internationalization'
import { CogIcon, EditIcon, LockIcon, UserIcon } from '@sanity/icons'
import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import SocialMediaCardPreview from './components/SocialMediaCardPreview'
import { sanity as sanityConfig } from './env.config.mjs'
import i18n from './intl.config.json'

const { projectId, dataset } = sanityConfig
const STRUCTURE_CUSTOM_TYPES = ['settings', 'secrets']

const config = createConfig({
  basePath: '/studio',
  name: 'CV',
  document: {
    /* @TODO setup this later when secrets are implemented
    productionUrl: async (prev, context) => {
      debugger
      return 'https://cv.creativecody.dev/'
    },
    // */
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
  plugins: withDocumentI18nPlugin(
    (pluginConfig) => [
      deskTool({
        structure: (S, { schema }) => {
          // The `Settings` root list item
          const settingsListItem = S.listItem()
            .title('Settings')
            .icon(CogIcon)
            .child(
              S.document()
                .schemaType('settings')
                .documentId('settings')
                .views([
                  S.view.form().icon(EditIcon),
                  S.view
                    .component(SocialMediaCardPreview)
                    .icon(UserIcon)
                    .id('somecard')
                    .title('Social preview'),
                ])
            )
          // Like Settings but private, prefixing with `private.` ensures it can't be queried unless by an authenticated user with access to the dataset, like drafts
          const secretsListItem = S.listItem()
            .title('Secrets')
            .icon(LockIcon)
            .child(
              S.document()
                .id('secrets')
                .schemaType('secrets')
                .documentId('private.secrets')
                .title('Secret title')
            )

          // The default root list items (except custom ones)
          const defaultListItems = getFilteredDocumentTypeListItems({
            S,
            schema,
            config: pluginConfig,
          }).filter((listItem) => !STRUCTURE_CUSTOM_TYPES.includes(listItem.id))

          return S.list()
            .title('Content')
            .items([
              settingsListItem,
              secretsListItem,
              S.divider(),
              ...defaultListItems,
            ])
        },
        /*
      defaultDocumentNode: (S, { schemaType, documentId }) => {
        if (documentId === 'settings') {
          return S.document()
            .title('why')
            .views([S.view.form(), S.view.form().title('Hi')])
        }
      },
      // */
      }),
    ],
    {
      includeDeskTool: false,
      base: i18n.defaultLocale,
      languages: i18n.locales,
      idStructure: IdStructure.SUBPATH,
    }
  ),
  projectId,
  dataset,
  schema: {
    types: [
      {
        title: 'Settings',
        name: 'settings',
        type: 'document',
        // @ts-expect-error -- typings don't understand i18n yet
        i18n: true,
        fields: [
          {
            title: 'Profile',
            name: 'profile',
            type: 'object',
            fields: [
              {
                title: 'Name',
                name: 'name',
                type: 'string',
              },
              {
                title: 'Role',
                name: 'role',
                type: 'string',
              },
            ],
          },
          {
            title: 'Hello',
            name: 'hello',
            type: 'string',
            description: 'Publish this to anything but "Edge"',
          },
        ],
      },
      {
        title: 'Secrets',
        name: 'secrets',
        type: 'document',
        fields: [
          {
            title: 'Hello',
            name: 'hello',
            type: 'string',
            description: 'Publish this to anything but "Edge"',
          },
        ],
      },
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
