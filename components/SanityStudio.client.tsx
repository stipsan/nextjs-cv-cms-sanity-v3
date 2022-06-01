import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { createConfig, Studio } from 'sanity'
import { deskTool } from 'sanity/desk'

export default function SanityStudio() {
  const router = useRouter()
  const [basePath] = useState(() => router.route.split('/[...tool]')?.[0])
  // useState as basePath is only used initially and don't matter on re-renders
  const config = useMemo(
    () =>
      createConfig({
        basePath,
        plugins: [deskTool()],
        name: 'CV',
        projectId: 'sh40okwp',
        dataset: 'production',
        schema: {
          types: [
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
      }),
    [basePath]
  )

  return <Studio config={config} />
}
