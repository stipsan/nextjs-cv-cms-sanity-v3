// Job
// Experience

import { Briefcase } from 'lucide-react'
import { defineField, defineType } from 'sanity'
import workplaceType from 'schemas/workplace'

export default defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  icon: () => <Briefcase size={30} strokeWidth={1} />,
  // preview
  fields: [
    defineField({
      title: 'Role',
      name: 'role',
      type: 'internationalizedArrayString',
    }),
    defineField({
      title: 'Company',
      name: 'company',
      type: 'reference',
      to: [{ type: workplaceType.name }],
    }),
    defineField({
      title: 'Joined',
      name: 'joined',
      type: 'date',
    }),
    defineField({
      title: 'Left',
      name: 'left',
      type: 'date',
    }),
  ],
})
