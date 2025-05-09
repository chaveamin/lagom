import './globals.css'
import localFont from 'next/font/local'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'
import ClientOnlyNav from '@/components/ClientOnlyNav'

const dana = localFont({ src: './DanaVF.woff2', variable: '--font-dana' })

export const metadata = {
  title: {
    template: '%s - قالب ناحیه کاربری WHMCS لاگوم',
    default: 'قالب ناحیه کاربری WHMCS لاگوم',
  },
  description:
    'قالب لاگوم یک قالب ساده، زیبا و کاملاً ریسپانسیو برای ناحیه کاربری WHMCS و فرآیند سفارش است. دارای سبک قدرتمند و مدیریت منو.',
  generator: 'Next.js',
  applicationName: 'لندینگ قالب لاگوم',
  referrer: 'origin-when-cross-origin',
  keywords: ['قالب لاگوم', 'قالب whmcs', 'قالب هاستینگ', 'هاستینگ', ''],
  authors: [
    { name: 'امین چاوه پور' },
    { name: 'امین', url: 'https://designesia.ir' },
  ],
  creator: 'امین چاوه پور',
  publisher: 'امین چاوه پور',
  formatDetection: {
    email: 'aminchave@gmail.com',
    address: false,
    telephone: '09144871529',
  },
  metadataBase: new URL('https://designesia.ir'),
  openGraph: {
    images: '/og-image.webp',
  },
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

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="fa" dir="rtl">
      <body
        className={`${dana.variable} font-dana overflow-x-hidden px-8 antialiased`}
      >
        <Topbar></Topbar>
        <ClientOnlyNav />
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
