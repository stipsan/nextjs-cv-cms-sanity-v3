import { CogIcon, LockIcon } from '@sanity/icons'
import { createConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

// @TODO env.config.mjs
const projectId = 'sh40okwp'
const dataset = 'production'

const STRUCTURE_CUSTOM_TYPES = ['settings', 'secrets']

const config = createConfig({
  basePath: '/studio',
  name: 'CV',
  plugins: [
    deskTool({
      structure: (S, context) => {
        // The `Settings` root list item
        const settingsListItem = S.listItem()
          .title('Settings')
          .icon(CogIcon)
          .child(
            S.editor()
              .id('settings')
              .title('Settings')
              .schemaType('settings')
              .documentId('settings')
          )
        // Like Settings but private, prefixing with `private.` ensures it can't be queried unless by an authenticated user with access to the dataset, like drafts
        const secretsListItem = S.listItem()
          .title('Secrets')
          .icon(LockIcon)
          .child(
            S.editor()
              .id('secrets')
              .schemaType('secrets')
              .documentId('private.secrets')
          )

        // The default root list items (except custom ones)
        const defaultListItems = S.documentTypeListItems().filter(
          (listItem: any) => !STRUCTURE_CUSTOM_TYPES.includes(listItem.getId())
        )

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
  projectId,
  dataset,
  schema: {
    types: [
      {
        title: 'Settings',
        name: 'settings',
        type: 'document',
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
