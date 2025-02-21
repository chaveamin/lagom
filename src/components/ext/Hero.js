import * as motion from "motion/react-client";
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

export default function Hero() {
  return (
    <section className="ext-hero py-22 -mx-10 mt-12">
      <h2 className="font-light w-full lg:max-w-3xl mx-auto text-4xl lg:text-6xl text-zinc-800 leading-12 text-right mb-22 lg:leading-22">
        افزونه های <span className="font-bold">طراحی شده برای بهبود </span>
        تجربه کاربری لاگوم
      </h2>
      <motion.div
        className="flex justify-center flex-wrap gap-8"
        initial={{ translateY: "25px", opacity: 0 }}
        whileInView={{ translateY: "0", opacity: 1 }}
        transition={{ duration: "0.6" }}>
        {extensions.map((e) => (
          <a
            key={e.title}
            href={e.href}
            className="max-w-80 w-full bg-white py-12 flex items-center flex-col rounded-lg ring ring-zinc-200 shadow-lg shadow-zinc-800/8 hover:-translate-y-2 duration-300 transition-transform">
            <Image className="size-36" src={e.icon} alt={e.title} />
            <h3 className="font-bold mt-10 mb-4 text-xl text-zinc-800">
              {e.title}
            </h3>
            <p className="font-light text-zinc-800">{e.price} تومان/سالانه</p>
            <button className="font-semibold cursor-pointer text-lg text-zinc-600 mt-8 hover:text-blue-600 transition-colors">
              اطلاعات بیشتر
            </button>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
