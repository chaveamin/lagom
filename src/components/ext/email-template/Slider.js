import Image from "next/image";
import email from "@/images/lagom-email-slider-1.png";
import email_2 from "@/images/lagom-email-slider-2.png";
import email_3 from "@/images/lagom-email-slider-3.png";

export default function Slider() {
  return (
    <div className="flex cursor-move py-16 overflow-x-scroll gap-x-10 *:rounded-md *:ring *:ring-zinc-100 *:shadow-2xl *:shadow-zinc-800/8">
      <Image src={email} alt="قالب ایمیل لاگوم"></Image>
      <Image src={email_2} alt="قالب ایمیل لاگوم"></Image>
      <Image src={email_3} alt="قالب ایمیل لاگوم"></Image>
    </div>
  );
}
