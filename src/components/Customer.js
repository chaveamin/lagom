import * as motion from 'motion/react-client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import digitalvps from '@/images/digitalvps.png'
import fannegarhost from '@/images/fannegarhost.png'
import anicloud from '@/images/anicloud.png'
import serversetup from '@/images/serversetup.png'
import Image from 'next/image'

const customers = [
  {
    href: 'https://client.digitalvps.ir/',
    name: 'دیجیتال وی پی اس',
    logo: digitalvps,
    address: 'digitalvps.ir',
  },
  {
    href: 'https://panel.fannegar-host.com/',
    name: 'فن نگار هاست',
    logo: fannegarhost,
    address: 'panel.fannegar-host.com',
  },
  {
    href: 'https://client.serversetup.co/',
    name: 'سرور ستاپ',
    logo: serversetup,
    address: 'client.serversetup.co',
  },
]

export default function Customer() {
  return (
    <section className="rounded-2xl bg-slate-50 px-8 py-22">
      <div className="mx-auto flex w-full flex-col gap-y-4 lg:max-w-5xl lg:gap-y-10">
        <h2 className="text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          مشتریان
        </h2>
        <p className="text-xl leading-8 font-light text-zinc-600 lg:text-2xl lg:leading-10">
          سایت های زیر توسط بنده بر اساس محصولات لاگوم نصب و شخصی سازی شده است.
          برای شخصی سازی وبسایت خود با راه های ارتباطی موجود در سایت تماس
          بگیرید.
        </p>
      </div>
      <motion.div
        initial={{ translateY: '25px', opacity: 0 }}
        whileInView={{ translateY: '0', opacity: 1 }}
        transition={{ delay: '0.5', duration: '0.6' }}
      >
        <Swiper
          className="ext-slider !px-10 !py-20"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          slidesPerView={3}
          spaceBetween={25}
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {customers.map((c) => (
            <SwiperSlide key={c.name}>
              <a
                href={c.href}
                target="_blank"
                className="mx-auto flex flex-col rounded-lg bg-white ring shadow-sm ring-zinc-300"
              >
                <div className="flex w-full items-center p-8">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold">{c.name}</h3>
                    <p className="text-zinc-800">{c.address}</p>
                  </div>
                  <Image
                    className="mr-auto"
                    width={64}
                    src={c.logo}
                    alt={c.name}
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}
