// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'CV',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
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
  ]),
})
