"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const colors = ["red", "green", "default", "purple", "orange"];

export default function Default() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} !size-6 ring-2 ring-zinc-300 ring-offset-8 lagom-${colors[index]}"></span>`;
    },
  };

  return (
    <>
      <Swiper className="!px-10" pagination={pagination} modules={[Pagination]}>
        {colors.map((color) => (
          <SwiperSlide className="relative lg:pt-18 pt-4 pb-24" key={color}>
            <img
              className="lg:max-w-3/4 max-w-9/10 mx-auto ring-1 shadow-xl lg:shadow-2xl shadow-zinc-800/5 ring-zinc-900/8 rounded-xl cursor-[url(/cursor.png)_32_32,auto!important]"
              alt={`${color}-style`}
              src={`/cms/default-${color}.png`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
