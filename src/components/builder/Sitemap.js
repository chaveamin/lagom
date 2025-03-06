import * as motion from 'motion/react-client'

export default function Sitemap() {
  return (
    <section className="relative py-22">
      <div className="mx-auto mb-16 flex w-full flex-col gap-y-4 lg:max-w-3xl lg:gap-y-10">
        <h2 className="text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          ساخت نقشه سایت
        </h2>
        <p className="text-justify text-xl leading-8 font-light text-zinc-600 lg:text-2xl lg:leading-10">
          بدون کدنوسی نقشه های سایت را با سایت ساز لاگوم ایجاد کنید. هر زمان که
          صفحه جدیدی را اضافه میکنید، نقشه سایت به طور خودکار ایجاد میشود، این
          امر، روند را ساده میکند و اطمینان حاصل میکند که سایت شما سئو فرندلی
          باقی میماند.
        </p>
      </div>
      <div className="relative mx-auto mt-20 lg:max-w-3xl">
        <motion.img
          width={840}
          viewport={{ once: true }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          transition={{ delay: '0.3', duration: '0.5' }}
          className="shadow-3xl rounded-lg ring-2 ring-blue-500/50"
          src="/cms/cms-website_sitemap-main.webp"
          alt="مدیریت صفحات سایت ساز"
        />
        <motion.img
          viewport={{ once: true }}
          width={246}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          transition={{ delay: '0.5', duration: '0.5' }}
          className="shadow-3xl hidden rounded-lg ring-2 ring-blue-500/50 lg:absolute lg:top-50 lg:-left-30 lg:block"
          src="/cms/cms-website_sitemap-right-2.webp"
          alt="مدیریت صفحات سایت ساز"
        />
        <motion.img
          viewport={{ once: true }}
          width={69}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          transition={{ delay: '0.4', duration: '0.5' }}
          className="hidden lg:absolute lg:top-30 lg:-left-10 lg:block"
          src="/cms/cms-website_sitemap-svg.svg"
          alt="مدیریت صفحات سایت ساز"
        />
        <motion.img
          viewport={{ once: true }}
          width={320}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          transition={{ delay: '0.6', duration: '0.5' }}
          className="shadow-3xl hidden rounded-lg ring-2 ring-blue-500/50 lg:absolute lg:top-70 lg:-right-30 lg:block"
          src="/cms/cms-website_sitemap-left-2.webp"
          alt="مدیریت صفحات سایت ساز"
        />
      </div>
    </section>
  )
}
