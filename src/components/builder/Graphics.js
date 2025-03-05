'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function Graphics() {
  return (
    <section className="graphics relative mx-auto w-full overflow-hidden pt-22 after:absolute after:bottom-0 after:z-10 after:h-64 after:w-full after:bg-gradient-to-t after:from-zinc-100 after:content-['']">
      <div className="mx-auto mb-22 w-full lg:max-w-5xl">
        <h2 className="mb-8 text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          آیکون های اختصاصی
        </h2>
        <p className="text-justify text-xl leading-8 font-light text-zinc-600 lg:text-2xl lg:leading-10">
          طیف گسترده ای از بیش از 400 آیکن و تصویر اختصاصی را کاوش کنید، که به
          طور ویژه طراحی شده اند تا به شما کمک کنند به راحتی وب سایت هاستینگ
          ایده آل خود را با سبک و سادگی ایجاد کنید.
        </p>
      </div>
      <Swiper
        className="icons !m-0 w-[4000px]"
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        speed={80000}
      >
        <SwiperSlide>
          <img src="/cms/cms-icons-presentation.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cms/cms-icons-presentation.png" />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
