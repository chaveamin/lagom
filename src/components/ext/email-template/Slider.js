import Image from 'next/image'
import email from '@/images/lagom-email-slider-1.webp'
import email_2 from '@/images/lagom-email-slider-2.webp'
import email_3 from '@/images/lagom-email-slider-3.webp'

export default function Slider() {
  return (
    <div className="flex cursor-move gap-x-10 overflow-x-scroll py-16 *:rounded-md *:ring *:shadow-2xl *:shadow-zinc-800/8 *:ring-zinc-100">
      <Image src={email} alt="قالب ایمیل لاگوم"></Image>
      <Image src={email_2} alt="قالب ایمیل لاگوم"></Image>
      <Image src={email_3} alt="قالب ایمیل لاگوم"></Image>
    </div>
  )
}
