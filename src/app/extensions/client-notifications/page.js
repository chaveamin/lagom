import Features from '@/components/ext/client-notif/Features'
import Hero from '@/components/ext/client-notif/Hero'
import Pricing from '@/components/ext/client-notif/Pricing'
import Slider from '@/components/ext/client-notif/Slider'

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
      <Pricing />
    </>
  )
}
