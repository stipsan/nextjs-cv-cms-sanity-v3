import { BoxSelect, Contact,Settings, User } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: () =><Settings size={30} strokeWidth={1} />,
  preview: { prepare: () => ({ title: 'Settings' }) },
  fieldsets: [
    {
      name: 'profile',
      title: 'Profile',
      options: { collapsible: false, columns: 2 },
    },
    {
      name: 'picture',
      title: 'Picture',
      options: { collapsible: true },
    },
  ],
  groups: [
    { name: 'profile', title: 'Profile', icon: ()=><User  strokeWidth={1} />  },
    { name: 'og', title: 'Open Graph', icon: ()=><Contact  strokeWidth={1} /> },
  ],
  fields: [
    defineField({
      title: 'Full name',
      name: 'name',
      type: 'string',
      group: 'profile',
    }),
    defineField({
      title: 'CV PDF',
      name: 'pdf',
      type: 'internationalizedArrayPdf',
    }),
    defineField({
      title: 'Pronouns',
      name: 'pronouns',
      type: 'internationalizedArrayString',
      fieldset: 'profile',
    }),
    defineField({
      title: 'Country',
      name: 'country',
      type: 'internationalizedArrayString',
      fieldset: 'profile',
    }),
    defineField({
      title: 'Headshot',
      name: 'headshot',
      type: 'image',
      fieldset: 'picture',
      options: {
        // gc uses specific filenames, this option allows manually testing the gc manually
        storeOriginalFilename: true,
        // Save some resources by not processing the image as we know we won't be using blurhash or lqip
        //https://www.sanity.io/docs/image-metadata
        metadata: ['palette'],
        hotspot: true,
        // Only care about excluding SVG tbh, but since input[type="file"].accept only lets us specify an allowlist it's necessary to best-guess
        accept: 'image/jpeg,image/png',
      },
    }),
    defineField({
      title: 'Profile picture alt',
      name: 'profilePictureAlt',
      type: 'internationalizedArrayAltText',
      group: ['profile', 'og'],
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
