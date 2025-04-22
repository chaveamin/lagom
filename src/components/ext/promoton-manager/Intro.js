function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="mr-2 inline size-6 -scale-x-100"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  )
}

import * as motion from 'motion/react-client'

export default function Intro() {
  return (
    <section className="mx-auto flex w-full flex-col gap-y-22 py-15 lg:max-w-3xl">
      <div className="relative *:rounded-lg *:ring *:shadow-xl *:shadow-zinc-800/5 *:ring-zinc-200">
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: '0.3' }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          width={840}
          src="/promotion-manager/promotion-manager_main-center.webp"
          alt="افزونه بنر تبلیغات لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: '0.5' }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          className="absolute top-30 -right-40 hidden lg:block"
          width={224}
          src="/promotion-manager/promotion-manager_main-left.webp"
          alt="افزونه بنر تبلیغات لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: '1' }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          className="absolute top-20 -left-20 hidden lg:block"
          width={180}
          src="/promotion-manager/promotion-manager_main-right.webp"
          alt="افزونه بنر تبلیغات لاگوم"
        />
      </div>
      <div id="info" className="fle flex-col gap-y-8">
        <h4 className="text-2xl leading-12 font-extrabold text-zinc-800 lg:text-5xl lg:leading-16">
          چگونگی استفاده
        </h4>
        <p className="text-xl leading-8 font-light text-zinc-500 lg:text-2xl lg:leading-10">
          افزونه بنر تبلیغات قالب لاگوم به شما امکان ایجاد بنرهای تبلیغاتی خود
          را به جای محصولات پیش فرض میدهد. به لطف این افزونه، شما همچنین
          میتوانید بنرهای خود را در دموی &quot;مدرن&quot; قالب ایجاد کنید
        </p>
        <div className="flex flex-col items-start gap-y-6 lg:flex-row lg:items-center lg:gap-x-6">
          <a
            className="text-xl font-semibold text-blue-600 lg:mr-auto lg:text-center"
            href="https://docs-eta-amber.vercel.app/"
            target="_blank"
          >
            راهنمای محصول
            <ExternalIcon></ExternalIcon>
          </a>
        </div>
      </div>
    </section>
  )
}
