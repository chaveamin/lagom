import Features from '@/components/ext/support-hours/Features'
import Hero from '@/components/ext/support-hours/Hero'
import Slider from '@/components/ext/support-hours/Slider'

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
    </>
  )
}
