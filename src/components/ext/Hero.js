import * as motion from 'motion/react-client'
import Link from 'next/link'

const extensions = [
  {
    icon: '/client-notifications.svg',
    title: 'اعلان مشتری',
    price: '2,500,000',
    href: '/extensions/client-notifications/',
  },
  {
    icon: '/promotion-manager.svg',
    title: 'بنر تبلیغات',
    price: '2,600,000',
    href: '/extensions/promotion-manager',
  },
  {
    icon: '/email-template.svg',
    title: 'قالب ایمیل',
    price: '2,000,000',
    href: '/extensions/lagom-email-template',
  },
  // {
  //   icon: '/sensitive-data.svg',
  //   title: 'داده‌های حساس',
  //   price: '2,000,000',
  //   href: '#',
  //   badge: 'جدید',
  // },
  {
    icon: '/support-hours.svg',
    title: 'ساعات کاری',
    price: '2,000,000',
    href: '/extensions/support-hours/',
  },
  {
    icon: '/custom-code.svg',
    title: 'کد سفارشی',
    price: '2,000,000',
    href: '/extensions/custom-code/',
  },
]

export default function Hero() {
  return (
    <section className="ext-hero -mx-10 mt-12 py-22">
      <h2 className="mx-auto mb-22 w-full text-right text-4xl leading-12 font-light text-zinc-800 lg:max-w-3xl lg:text-6xl lg:leading-22">
        افزونه های <span className="font-bold">طراحی شده برای بهبود </span>
        تجربه کاربری لاگوم
      </h2>
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial={{ translateY: '25px', opacity: 0 }}
        whileInView={{ translateY: '0', opacity: 1 }}
        transition={{ duration: '0.6' }}
      >
        {extensions.map((e) => (
          <Link
            key={e.title}
            href={e.href}
            className="relative flex w-full max-w-80 flex-col items-center overflow-hidden rounded-lg bg-white py-12 ring shadow-lg shadow-zinc-800/8 ring-zinc-200 transition-transform duration-300 hover:-translate-y-2"
          >
            <p className="badge absolute top-6 -left-12 w-40 -rotate-45 bg-blue-100 text-center text-lg font-bold text-blue-600">
              {e.badge}
            </p>
            <img className="size-36" src={e.icon} alt={e.title} />
            <h3 className="mt-10 mb-4 text-xl font-bold text-zinc-800">
              {e.title}
            </h3>
            <p className="font-light text-zinc-800">{e.price} تومان/سالانه</p>
            <button className="mt-8 cursor-pointer text-lg font-semibold text-zinc-600 transition-colors hover:text-blue-600">
              اطلاعات بیشتر
            </button>
          </Link>
        ))}
      </motion.div>
    </section>
  )
}
