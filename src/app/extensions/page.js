export const metadata = {
  title: 'افزونه ها',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

import CTA from '@/components/CTA'
import Hero from '@/components/ext/Hero'

function extensions() {
  return (
    <>
      <Hero />
      <CTA />
    </>
  )
}

export default extensions
