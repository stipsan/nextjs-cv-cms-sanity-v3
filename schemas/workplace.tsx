// Workplace / Company

import { Factory } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'workplace',
  title: 'Workplace',
  type: 'document',
  icon: Factory,
  preview: { select: { title: 'name', subtitle: 'location', media: 'logo' } },
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),
    defineField({
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'url',
    }),
    defineField({
      title: 'Logo',
      name: 'logo',
      type: 'image',
      description:
        'The logo will need render in a timeline that uses a CSS drop-shadow effect to create a white outline. Thus the opacity of the logo must be deliberate in order for it to look great. And generally square logos look better.',
      options: { hotspot: true },
    }),
    defineField({
      title: 'Location',
      name: 'location',
      type: 'string',
    }),
    defineField({
      title: 'Flag',
      name: 'flag',
      type: 'string',
    }),
    defineField({
      title: 'Map URL',
      name: 'mapUrl',
      type: 'url',
    }),
    defineField({
      title: 'Remote Work',
      name: 'remote',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
