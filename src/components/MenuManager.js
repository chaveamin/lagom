import * as motion from 'motion/react-client'

export default function MenuManager() {
  return (
    <section className="py-22">
      <div className="mx-auto flex w-full flex-col gap-y-4 lg:max-w-5xl lg:gap-y-10">
        <h2 className="text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          مدیریت منو
        </h2>
        <p className="text-justify text-xl leading-8 font-light text-zinc-500 lg:text-2xl lg:leading-10">
          از این به بعد، برای شخصی سازی منوی سایت قالب لاگوم نیازی به ایجاد
          افزونه های پیچیده WHMCS ندارید. مدیریت منو یک گزینه فوق العاده راحت
          برای تنظیم آیتم های منو از پنل قالب ارائه میدهد.
        </p>
      </div>
      <div className="relative mx-auto mt-20 w-full lg:max-w-3xl">
        <motion.img
          viewport={{ once: true }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          transition={{ delay: '0.5' }}
          className="shadow-3xl rounded-lg ring-2 shadow-blue-800/5 ring-blue-500/7"
          src="illustration-menu-manager.webp"
          alt="مدیریت منو لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={350}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          transition={{ delay: '0.3' }}
          className="shadow-3xl hidden rounded-lg ring-2 shadow-blue-800/5 ring-blue-500/7 lg:absolute lg:top-80 lg:-right-30 lg:block"
          src="illustration-menu-manager-right.webp"
          alt="مدیریت منو لاگوم"
        />
      </div>
    </section>
  )
}
