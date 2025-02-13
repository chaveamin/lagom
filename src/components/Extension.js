"use client";

import * as motion from "motion/react-client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import PM from "@/images/promotion-manager.svg";
import ET from "@/images/email-template.svg";
import CN from "@/images/client-notifications.svg";
import CC from "@/images/custom-code.svg";
import SH from "@/images/support-hours.svg";
import Image from "next/image";

const extensions = [
  {
    icon: PM,
    title: "بنر تبلیغات",
    price: "1,880,000",
    href: "/promotion-manager",
  },
  {
    icon: ET,
    title: "قالب ایمیل",
    price: "900,000",
    href: "/lagom-email-template",
  },
  {
    icon: CN,
    title: "اعلان مشتری",
    price: "1,400,000",
    href: "#",
  },
  {
    icon: CC,
    title: "کد سفارشی",
    price: "800,000",
    href: "#",
  },
  {
    icon: SH,
    title: "ساعا کاری",
    price: "1,000,000",
    href: "#",
  },
];

export default function Extension() {
  return (
    <section className="py-22">
      <div className="w-full lg:max-w-5xl mx-auto flex flex-col lg:gap-y-10 gap-y-4">
        <h2 className="lg:text-5xl text-3xl leading-14 font-black text-zinc-800">
          افزونه های قدرتمند
        </h2>
        <p className="lg:text-2xl text-xl lg:leading-10 text-justify leading-8 font-light text-zinc-600">
          پتانسیل کامل لاگوم را با افزونه های کاملا سازگار با WHMCS باز کنید.
        </p>
      </div>
      <motion.div
        initial={{ translateY: "25px", opacity: 0 }}
        whileInView={{ translateY: "0", opacity: 1 }}
        transition={{ delay: "0.5", duration: "0.6" }}>
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
          }}>
          {extensions.map((e) => (
            <SwiperSlide key={e.title}>
              <a
                href={e.href}
                className="w-72 mx-auto py-12 flex items-center flex-col rounded-lg ring ring-zinc-200 shadow-lg shadow-zinc-800/8">
                <Image className="size-28" src={e.icon} alt={e.title} />
                <h3 className="font-bold mt-10 mb-4 text-xl text-zinc-800">
                  {e.title}
                </h3>
                <p className="font-light text-zinc-800">
                  {e.price} تومان/سالانه
                </p>
                <button className="font-semibold cursor-pointer text-lg text-zinc-600 mt-8 hover:text-blue-600 transition-colors">
                  اطلاعات بیشتر
                </button>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
