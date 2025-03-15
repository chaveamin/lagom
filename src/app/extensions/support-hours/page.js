import CTA from '@/components/CTA'
import FAQ from '@/components/ext/support-hours/FAQ'
import Features from '@/components/ext/support-hours/Features'
import Hero from '@/components/ext/support-hours/Hero'
import Holiday from '@/components/ext/support-hours/Holiday'
import Pricing from '@/components/ext/support-hours/Pricing'
import Slider from '@/components/ext/support-hours/Slider'
export const runtime = 'edge'

export const metadata = {
  title: 'افزونه ساعات کاری برای قالب ناحیه کاربری لاگوم',
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
      <Holiday />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
