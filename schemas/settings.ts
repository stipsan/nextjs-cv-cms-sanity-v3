import { CogIcon } from '@sanity/icons'
import * as demo from 'lib/demo.data'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  preview: { prepare: () => ({ title: 'Settings' }) },
  fields: [
    defineField({
      title: 'Profile',
      name: 'profile',
      type: 'object',
      fields: [
        defineField({
          title: 'Name',
          name: 'name',
          type: 'string',
        }),
        defineField({
          title: 'Pronouns',
          name: 'pronouns',
          type: 'internationalizedArrayString',
        }),
        defineField({
          title: 'Country',
          name: 'country',
          type: 'internationalizedArrayString',
        }),
        defineField({
          title: 'PDF',
          name: 'pdf',
          type: 'internationalizedArrayPdf',
        }),
        defineField({
          title: 'Image',
          name: 'image',
          type: 'image',
          options: {
            // gc uses specific filenames, this option allows manually testing the gc manually
            storeOriginalFilename: true,
            // Save some resources by not processing the image as we know we won't be using blurhash or lqip
            //https://www.sanity.io/docs/image-metadata
            metadata: ['palette'],
            hotspot: true,
            // Only care about excluding SVG tbh, but since input[type="file"].accept only lets us specify an allowlist it's necessary to best-guess
            accept: 'image/jpeg, image/png',
          },
          fields: [
            {
              title: 'Alternative  text',
              name: 'alt',
              type: 'internationalizedArrayAltText',
            },
          ],
        }),
      ],
    }),
    defineField({
      title: 'Meta',
      name: 'meta',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'internationalizedArrayString',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'internationalizedArrayString',
        },
        {
          title: 'Twitter',
          name: 'twitter',
          type: 'string',
          description: 'Just the @username, not the URL',
          // @TODO validate if the handle is prefixed with @
        },
      ],
    }),
  ],
})
