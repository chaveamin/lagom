'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const colors = ['red', 'green', 'default', 'purple', 'orange']

export default function Default() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} !size-6 ring-2 ring-zinc-300 ring-offset-8 lagom-${colors[index]}"></span>`
    },
  }

  return (
    <>
      <Swiper className="!px-10" pagination={pagination} modules={[Pagination]}>
        {colors.map((color) => (
          <SwiperSlide className="relative pt-4 pb-24 lg:pt-18" key={color}>
            <img
              className="mx-auto max-w-9/10 cursor-[url(/cursor.webp)_32_32,auto!important] rounded-xl ring-1 shadow-xl shadow-zinc-800/5 ring-zinc-900/8 lg:max-w-3/4 lg:shadow-2xl"
              alt={`${color}-style`}
              src={`/cms/default-${color}.webp`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
