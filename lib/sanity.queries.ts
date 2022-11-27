import { groq } from 'next-sanity'

export const languagesQuery = groq`*[_type == "language" && !(_id in path("drafts.**"))]{id,title}`
