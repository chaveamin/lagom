import CTA from '@/components/CTA'
import Features from '@/components/ext/client-notif/Features'
import Hero from '@/components/ext/client-notif/Hero'
import MediaManager from '@/components/ext/client-notif/MediaManager'
import Pricing from '@/components/ext/client-notif/Pricing'
import Slider from '@/components/ext/client-notif/Slider'
import UseCase from '@/components/ext/client-notif/UseCase'
import FAQ from '@/components/ext/email-template/FAQ'

export const metadata = {
  title: 'افزونه اعلان مشتری برای قالب ناحیه کاربری لاگوم',
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

export default function page() {
  return (
    <>
      <Hero />
      <Slider />
      <Features />
      <MediaManager />
      <UseCase />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
