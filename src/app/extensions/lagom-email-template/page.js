import CTA from '@/components/CTA'
import Customize from '@/components/ext/email-template/Customize'
import FAQ from '@/components/ext/email-template/FAQ'
import Hero from '@/components/ext/email-template/Hero'
import Intro from '@/components/ext/email-template/Intro'
import Pricing from '@/components/ext/email-template/Pricing'
import Slider from '@/components/ext/email-template/Slider'
export const runtime = 'edge'

export const metadata = {
  title: 'افزونه قالب ایمیل برای قالب ناحیه کاربری لاگوم',
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
      <Intro />
      <Slider />
      <Customize />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
