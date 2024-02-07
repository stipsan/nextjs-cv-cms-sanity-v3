// Street Address
// Postal COde
// Phone number

// References[]{company, name, role, phone, email}
// Viewers[]{password, name}

import { FileLock } from 'lucide-react'
import { defineArrayMember, defineField, defineType } from 'sanity'
import workplaceType from 'schemas/workplace'

export default defineType({
  // The name is also used as the ID in the structure builder later, and is why it's only accessible with a viewer or auth token
  // And it's safe to have sensitive information here like phone numbers and such.
  name: 'private.confidential',
  title: 'Confidential',
  type: 'document',
  icon: () => <FileLock size={30} strokeWidth={1} />,
  preview: { prepare: () => ({ title: 'Confidential' }) },
  groups: [{
    name: 'profile',
    title: 'Profile',

  }],
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
      name: 'workReferences',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Reference',
          name: 'workReference',
          type: 'object',
          preview: {
            select: {
              
            }
          },
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
