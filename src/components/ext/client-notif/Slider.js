'use client'

import * as motion from 'motion/react-client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import mainmodal from '@/images/main-modal-promotion.webp'
import mainalert from '@/images/main-alert-information.webp'
import mainmodalnotif from '@/images/main-modal-notification.webp'

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
            src={mainmodal}
            alt="افزونه اعلان مشتر لاگوم"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="shadow-4xl rounded-xl"
            src={mainalert}
            alt="افزونه اعلان مشتر لاگوم"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="shadow-4xl rounded-xl"
            src={mainmodalnotif}
            alt="افزونه اعلان مشتر لاگوم"
          ></Image>
        </SwiperSlide>
      </Swiper>
    </motion.section>
  )
}
