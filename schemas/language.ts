import { bcp47Normalize } from 'bcp-47-normalize'
import { Languages } from 'lucide-react'
import { defineField, defineType } from 'sanity'

const languageNames = new Intl.DisplayNames([], {
  type: 'language',
})

export default defineType({
  name: 'language',
  title: 'Language',
  type: 'document',
  // liveEdit: true,
  icon: Languages,
  preview: {
    select: {
      title: 'title',
      subtitle: 'id',
    },
    prepare({ subtitle, title }) {
      try {
        return {
          subtitle,
          title: title || languageNames.of(subtitle),
        }
      } catch {
        return { subtitle }
      }
    },
  },
  fields: [
    defineField({
      name: 'id',
      title: 'Locale identifier',
      // description: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation'
      type: 'string',
      // use a datalist for navigator.languages
      validation: (rule) =>
        rule.required().custom(async (value, context) => {
          const normalized = bcp47Normalize(Intl.getCanonicalLocales(value)[0])
          if (!normalized) {
            return 'Invalid locale identifier'
          }
          if (normalized !== value) {
            return `"${value}" is superflous, shorten it to "${normalized}"`
          }
          if (languageNames.of(normalized) === value) {
            return 'Invalid locale identifier'
          }
          return true
        }),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
