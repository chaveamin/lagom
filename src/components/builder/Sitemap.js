import * as motion from "motion/react-client";

export default function Sitemap() {
  return (
    <section className="py-22 relative">
      <div className="w-full flex flex-col lg:max-w-3xl mx-auto lg:gap-y-10 gap-y-4 mb-16">
        <h2 className="lg:text-5xl text-3xl leading-14 font-black text-zinc-800">
          ساخت نقشه سایت
        </h2>
        <p className="lg:text-2xl text-xl lg:leading-10 text-justify leading-8 font-light text-zinc-600">
          بدون کدنوسی نقشه های سایت را با سایت ساز لاگوم ایجاد کنید. هر زمان که
          صفحه جدیدی را اضافه میکنید، نقشه سایت به طور خودکار ایجاد میشود، این
          امر، روند را ساده میکند و اطمینان حاصل میکند که سایت شما سئو فرندلی
          باقی میماند.
        </p>
      </div>
      <div className="relative mt-20 lg:max-w-3xl mx-auto">
        <motion.img
          width={840}
          viewport={{ once: true }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.3", duration: "0.5" }}
          className="ring-2 ring-blue-500/50 shadow-3xl rounded-lg"
          src="/cms/cms-website_sitemap-main.png"
          alt="مدیریت صفحات سایت ساز"
        />
        <motion.img
          viewport={{ once: true }}
          width={246}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.5", duration: "0.5" }}
          className="ring-2 ring-blue-500/50 shadow-3xl hidden rounded-lg lg:block lg:absolute lg:top-50 lg:-left-30"
          src="/cms/cms-website_sitemap-right-2.png"
          alt="مدیریت صفحات سایت ساز"
        />
        <motion.img
          viewport={{ once: true }}
          width={69}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.4", duration: "0.5" }}
          className="hidden lg:block lg:absolute lg:top-30 lg:-left-10"
          src="/cms/cms-website_sitemap-svg.svg"
          alt="مدیریت صفحات سایت ساز"
        />
        <motion.img
          viewport={{ once: true }}
          width={320}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.6", duration: "0.5" }}
          className="ring-2 ring-blue-500/50 shadow-3xl hidden rounded-lg lg:block lg:absolute lg:top-70 lg:-right-30"
          src="/cms/cms-website_sitemap-left-2.png"
          alt="مدیریت صفحات سایت ساز"
        />
      </div>
    </section>
  );
}
