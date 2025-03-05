import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import 'swiper/css'

const layouts = [
  'condensed-banner',
  'left-nav-wide',
  'left-nav',
  'default',
  'condensed',
]

export default function DifferentLayout() {
  return (
    <section className="relative py-22">
      <div className="mx-auto flex w-full flex-col gap-y-4 lg:max-w-5xl lg:gap-y-10">
        <h2 className="text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          طرح بندی های مختلف
        </h2>
        <p className="text-justify text-xl leading-8 font-light text-zinc-600 lg:text-2xl lg:leading-10">
          از 5 طرح بندی برای منوی اصلی و 2 طرح بندی مختلف برای فوتر استفاده
          کنید.
        </p>
      </div>
      <motion.div
        viewport={{ once: true }}
        transition={{ delay: '0.6', duration: '0.7' }}
        initial={{ translateY: '25px', opacity: 0 }}
        whileInView={{ translateY: '0', opacity: 1 }}
      >
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          modules={[Autoplay]}
        >
          {layouts.map((layout) => (
            <SwiperSlide className="py-12" key={layout}>
              <a
                target="_blank"
                href={`https://demo.rsstudio.net/lagom/index.php?rsstyle=modern&rsmenulayout=${layout}`}
              >
                <Image
                  className="lg:shadow-3xl mx-auto w-3/4 rounded-xl ring-1 shadow-xl shadow-zinc-800/5 ring-zinc-900/8"
                  width={1700}
                  height={1200}
                  src={`/layout-${layout}.png`}
                  alt={layout}
                />
              </a>
              <p className="mt-4 text-center text-xl font-light capitalize lg:mt-10">
                {layout}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}
