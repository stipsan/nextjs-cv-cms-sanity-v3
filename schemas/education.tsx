// Education

import { Landmark } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  icon: Landmark,
  // preview
  fields: [
    defineField({
      title: 'School',
      name: 'school',
      type: 'string',
    }),
    defineField({
      title: 'Degree',
      name: 'degree',
      type: 'string',
    }),
    defineField({
      title: 'Field of study',
      name: 'field',
      type: 'string',
    }),
    defineField({
      title: 'Start date',
      name: 'start',
      type: 'date',
      options: { dateFormat: 'YYYY' },
    }),
    defineField({
      title: 'End date',
      name: 'end',
      type: 'date',
      options: { dateFormat: 'YYYY' },
    }),
  ],
})
