import * as motion from 'motion/react-client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

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
          <img
            className="shadow-4xl rounded-xl"
            src="src/images/main-modal-promotion.webp"
            alt="افزونه اعلان مشتر لاگوم"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="shadow-4xl rounded-xl"
            src="src/images/main-alert-information.webp"
            alt="افزونه اعلان مشتر لاگوم"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="shadow-4xl rounded-xl"
            src="src/images/main-modal-notification.webp"
            alt="افزونه اعلان مشتر لاگوم"
          />
        </SwiperSlide>
      </Swiper>
    </motion.section>
  )
}
