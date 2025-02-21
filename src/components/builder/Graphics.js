"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Graphics() {
  return (
    <section
      className="w-full pt-22 mx-auto relative overflow-hidden graphics
    after:z-10 after:content-[''] after:w-full after:h-64 after:absolute after:bottom-0 after:bg-gradient-to-t after:from-zinc-100">
      <div className="w-full lg:max-w-5xl mx-auto mb-22">
        <h2 className="lg:text-5xl mb-8 text-3xl leading-14 font-black text-zinc-800">
          آیکون های اختصاصی
        </h2>
        <p className="lg:text-2xl text-xl lg:leading-10 text-justify leading-8 font-light text-zinc-600">
          طیف گسترده ای از بیش از 400 آیکن و تصویر اختصاصی را کاوش کنید، که به
          طور ویژه طراحی شده اند تا به شما کمک کنند به راحتی وب سایت هاستینگ
          ایده آل خود را با سبک و سادگی ایجاد کنید.
        </p>
      </div>
      <Swiper
        className="w-[4000px] !m-0 icons"
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        speed={80000}>
        <SwiperSlide>
          <img src="/cms/cms-icons-presentation.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cms/cms-icons-presentation.png" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
