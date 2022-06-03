import dynamic from 'next/dynamic'
import Studio from 'components/SanityStudio.client'

/*
const Studio = dynamic(() => import('components/SanityStudio.client'), {
  ssr: false,
})
// */

export default function StudioPage() {
  return <Studio />
}
