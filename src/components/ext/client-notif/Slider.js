'use client'

import * as motion from 'motion/react-client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Image from 'next/image'
import mainmodal from '@/images/main-modal-promotion.png'
import mainalert from '@/images/main-alert-information.png'
import mainmodalnotif from '@/images/main-modal-notification.png'

export default function Slider() {
  return (
    <motion.section
      className="my-22"
      viewport={{ once: true }}
      transition={{ delay: '0.6', duration: '0.7' }}
      initial={{ translateY: '25px', opacity: 0 }}
      whileInView={{ translateY: '0', opacity: 1 }}
    >
      <Swiper
        className="cursor-[url(/cursor.png)_32_32,auto!important] *:py-22"
        loop={true}
        spaceBetween={50}
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
