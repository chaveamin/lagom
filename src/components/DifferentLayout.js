"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "motion/react";
import Image from "next/image";
import "swiper/css";

const layouts = [
  "condensed-banner",
  "left-nav-wide",
  "left-nav",
  "default",
  "condensed",
];

export default function DifferentLayout() {
  return (
    <section className="py-22 relative">
      <div className="w-full lg:max-w-5xl mx-auto flex flex-col lg:gap-y-10 gap-y-4">
        <h2 className="lg:text-5xl text-3xl leading-14 font-black text-zinc-800">
          طرح بندی های مختلف
        </h2>
        <p className="lg:text-2xl text-xl lg:leading-10 text-justify leading-8 font-light text-zinc-600">
          از 5 طرح بندی برای منوی اصلی و 2 طرح بندی مختلف برای فوتر استفاده
          کنید.
        </p>
      </div>
      <motion.div
        viewport={{ once: true }}
        transition={{ delay: "0.6", duration: "0.7" }}
        initial={{ translateY: "25px", opacity: 0 }}
        whileInView={{ translateY: "0", opacity: 1 }}>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          modules={[Autoplay]}>
          {layouts.map((layout) => (
            <SwiperSlide className="py-12" key={layout}>
              <a
                target="_blank"
                href={`https://demo.rsstudio.net/lagom/index.php?rsstyle=modern&rsmenulayout=${layout}`}>
                <Image
                  className="ring-1 w-3/4 mx-auto shadow-xl lg:shadow-3xl shadow-zinc-800/5 ring-zinc-900/8 rounded-xl"
                  width={1700}
                  height={1200}
                  src={`/layout-${layout}.png`}
                  alt={layout}
                />
              </a>
              <p className="text-center text-xl font-light lg:mt-10 mt-4 capitalize">
                {layout}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
