import { groq } from 'next-sanity'

export const languagesQuery = groq`*[_type == "language"]{id,title}`
