import * as motion from "motion/react-client";

export default function MenuManager() {
  return (
    <section className="py-22">
      <div className="w-full lg:max-w-5xl mx-auto flex flex-col lg:gap-y-10 gap-y-4">
        <h2 className="lg:text-5xl text-3xl leading-14 font-black text-zinc-800">
          مدیریت منو
        </h2>
        <p className="lg:text-2xl text-xl lg:leading-10 text-justify leading-8 font-light text-zinc-600">
          از این به بعد، برای شخصی سازی منوی سایت قالب لاگوم نیازی به ایجاد
          افزونه های پیچیده WHMCS ندارید. مدیریت منو یک گزینه فوق العاده راحت
          برای تنظیم آیتم های منو از پنل قالب ارائه میدهد.
        </p>
      </div>
      <div className="relative w-full  mt-20 lg:max-w-3xl mx-auto">
        <motion.img
          viewport={{ once: true }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.5" }}
          className="ring-2 ring-blue-500/50 shadow-3xl rounded-lg"
          src="illustration-menu-manager.png"
          alt="مدیریت منو لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={350}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.3" }}
          className="ring-2 ring-blue-500/50 shadow-3xl hidden rounded-lg lg:block lg:absolute lg:top-80 lg:-right-30"
          src="illustration-menu-manager-right.png"
          alt="مدیریت منو لاگوم"
        />
      </div>
    </section>
  );
}
