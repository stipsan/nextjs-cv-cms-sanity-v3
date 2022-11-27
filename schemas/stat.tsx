// Stat
// Open Source Stats
// Street Address
// Postal COde
// Phone number

// References[]{company, name, role, phone, email}
// Viewers[]{password, name}

import { FileLock } from 'lucide-react'
import { defineArrayMember, defineField, defineType } from 'sanity'
import workplaceType from 'schemas/workplace'

export default defineType({
  name: 'stat',
  title: 'Open Source Stat',
  type: 'document',
  icon: FileLock,
  preview: { prepare: () => ({ title: 'Confidential' }) },
  fields: [
    defineField({
      title: 'Street address',
      name: 'street',
      type: 'string',
    }),
    defineField({
      title: 'Postal code',
      name: 'postal',
      type: 'string',
    }),
    defineField({
      title: 'Phone number',
      name: 'phone',
      type: 'string',
    }),
    defineField({
      title: 'References',
      name: 'references',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Reference',
          name: 'reference',
          type: 'object',
          fields: [
            defineField({
              title: 'Workplace',
              name: 'workplace',
              type: 'reference',
              to: [{ type: workplaceType.name }],
            }),
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string',
            }),
            defineField({
              title: 'Role',
              name: 'role',
              type: 'internationalizedArrayString',
            }),
            defineField({
              title: 'Phone',
              name: 'phone',
              type: 'string',
            }),
            defineField({
              title: 'Email',
              name: 'email',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      title: 'Viewers',
      name: 'viewers',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Viewer',
          name: 'viewer',
          type: 'object',
          fields: [
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string',
            }),
            defineField({
              title: 'Password',
              name: 'password',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
