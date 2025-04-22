import * as motion from 'motion/react-client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const extensions = [
  {
    icon: '/promotion-manager.svg',
    title: 'بنر تبلیغات',
    price: '1,880,000',
    href: '/promotion-manager',
  },
  {
    icon: '/email-template.svg',
    title: 'قالب ایمیل',
    price: '1,300,000',
    href: '/lagom-email-template',
  },
  {
    icon: '/client-notifications.svg',
    title: 'اعلان مشتری',
    price: '1,650,000',
    href: '/client-notifications',
  },
  {
    icon: '/custom-code.svg',
    title: 'کد سفارشی',
    price: '800,000',
    href: '/support-hours',
  },
  {
    icon: '/support-hours.svg',
    title: 'ساعا کاری',
    price: '1,300,000',
    href: '/support-hours',
  },
]

export default function Extension() {
  return (
    <section className="py-22">
      <div className="mx-auto flex w-full flex-col gap-y-4 lg:max-w-5xl lg:gap-y-10">
        <h2 className="text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          افزونه های قدرتمند
        </h2>
        <p className="text-justify text-xl leading-8 font-light text-zinc-500 lg:text-2xl lg:leading-10">
          پتانسیل کامل لاگوم را با افزونه های کاملا سازگار با WHMCS باز کنید.
        </p>
      </div>
      <motion.div
        initial={{ translateY: '25px', opacity: 0 }}
        whileInView={{ translateY: '0', opacity: 1 }}
        transition={{ delay: '0.5', duration: '0.6' }}
      >
        <Swiper
          className="ext-slider !py-20"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          slidesPerView={4}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {extensions.map((e) => (
            <SwiperSlide key={e.title}>
              <a
                href={e.href}
                className="mx-auto flex w-72 flex-col items-center rounded-lg py-12 ring shadow-lg shadow-zinc-800/8 ring-zinc-200"
              >
                <img className="size-28" src={e.icon} alt={e.title} />
                <h3 className="mt-10 mb-4 text-xl font-bold text-zinc-800">
                  {e.title}
                </h3>
                <p className="font-light text-zinc-800">
                  {e.price} تومان/سالانه
                </p>
                <button className="mt-8 cursor-pointer text-lg font-semibold text-zinc-600 transition-colors hover:text-blue-600">
                  اطلاعات بیشتر
                </button>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}
