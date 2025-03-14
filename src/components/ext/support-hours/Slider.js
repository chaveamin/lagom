'use client'

import * as motion from 'motion/react-client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import supporthours_1 from '@/images/support_hours-main-1.png'
import supporthours_2 from '@/images/support_hours-main-2.png'
import supporthours_3 from '@/images/support_hours-main-3.png'
import supporthours_4 from '@/images/support_hours-main-4.png'

export default function Slider() {
  return (
    <motion.section
      viewport={{ once: true }}
      transition={{ delay: '0.3', duration: '0.7' }}
      initial={{ translateY: '25px', opacity: 0 }}
      whileInView={{ translateY: '0', opacity: 1 }}
    >
      <Swiper
        className="cursor-[url(/cursor.webp)_32_32,auto] *:py-22"
        loop={true}
        spaceBetween={40}
        slidesPerView={2}
      >
        <SwiperSlide>
          <Image
            className="shadow-4xl rounded-xl"
            src={supporthours_1}
            alt="افزونه ساعات کاری لاگوم"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="shadow-4xl rounded-xl"
            src={supporthours_2}
            alt="افزونه ساعات کاری لاگوم"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="shadow-4xl rounded-xl"
            src={supporthours_3}
            alt="افزونه ساعات کاری لاگوم"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="shadow-4xl rounded-xl"
            src={supporthours_4}
            alt="افزونه ساعات کاری لاگوم"
          ></Image>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  )
}
