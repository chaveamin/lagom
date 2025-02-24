function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 inline -scale-x-100 mr-2">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

import * as motion from "motion/react-client";

export default function Intro() {
  return (
    <section className="py-15 lg:max-w-3xl flex flex-col gap-y-22 w-full mx-auto">
      <div className="relative *:shadow-xl *:shadow-zinc-800/5 *:ring *:ring-zinc-200 *:rounded-lg">
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: "0.3" }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          width={840}
          src="/promotion-manager/promotion-manager_main-center.png"
          alt="افزونه بنر تبلیغات لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: "0.5" }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          className="hidden lg:block absolute -right-40 top-30"
          width={224}
          src="/promotion-manager/promotion-manager_main-left.png"
          alt="افزونه بنر تبلیغات لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: "1" }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          className="hidden lg:block absolute -left-20 top-20"
          width={180}
          src="/promotion-manager/promotion-manager_main-right.png"
          alt="افزونه بنر تبلیغات لاگوم"
        />
      </div>
      <div id="info" className="fle flex-col gap-y-8">
        <h4 className="font-extrabold text-2xl lg:text-5xl text-zinc-800 leading-12 lg:leading-16">
          چگونگی استفاده
        </h4>
        <p className="font-light text-xl lg:text-2xl text-zinc-600 leading-8 lg:leading-10">
          افزونه بنر تبلیغات قالب لاگوم به شما امکان ایجاد بنرهای تبلیغاتی خود
          را به جای محصولات پیش فرض میدهد. به لطف این افزونه، شما همچنین
          میتوانید بنرهای خود را در دموی "مدرن" قالب ایجاد کنید
        </p>
        <div className="flex lg:items-center items-start flex-col lg:flex-row gap-y-6 lg:gap-x-6">
          <a
            className="text-xl lg:text-center lg:mr-auto text-blue-600 font-semibold"
            href="https://documentations.liara.run/docs/lagom"
            target="_blank">
            راهنمای محصول
            <ExternalIcon></ExternalIcon>
          </a>
        </div>
      </div>
    </section>
  );
}
