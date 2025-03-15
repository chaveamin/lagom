import CTA from '@/components/CTA'
import Features from '@/components/ext/custom-code/Features'
import Hero from '@/components/ext/custom-code/Hero'
import Intro from '@/components/ext/custom-code/Intro'
import Pricing from '@/components/ext/custom-code/Pricing'

export const metadata = {
  title: 'افزونه کد سفارشی برای قالب ناحیه کاربری لاگوم',
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
      <Features />
      <Pricing />
      <CTA />
    </>
  )
}
