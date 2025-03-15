export const metadata = {
  title: 'افزونه بنر تبلیغات برای قالب ناحیه کاربری WHMCS لاگوم',
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
import FAQ from '@/components/ext/promoton-manager/FAQ'
import Hero from '@/components/ext/promoton-manager/Hero'
import Intro from '@/components/ext/promoton-manager/Intro'
import Pricing from '@/components/ext/promoton-manager/Pricing'
import Steps from '@/components/ext/promoton-manager/Steps'
export const runtime = 'edge'

export default function page() {
  return (
    <>
      <Hero />
      <Intro />
      <Steps />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
