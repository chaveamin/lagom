import * as motion from 'motion/react-client'

export default function StyleManager() {
  return (
    <section className="py-22">
      <div className="mx-auto flex w-full flex-col gap-y-4 lg:max-w-5xl lg:gap-y-10">
        <h2 className="text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          مدیریت طرح ها
        </h2>
        <p className="text-justify text-xl leading-8 font-light text-zinc-600 lg:text-2xl lg:leading-10">
          لاگوم ابزارهای ضروری را برای مدیریت رنگ ها و سبک های قالب بدون داشتن
          دانش کدنویسی ارائه میدهد. شما این اختیار را خواهید داشت که از سبک‌ها و
          طرح‌های رنگی مختلف استفاده کنید تا قالب را با سبک برند خود تطبیق دهید.
        </p>
      </div>
      <div className="relative mx-auto mt-20 w-full lg:max-w-3xl">
        <motion.img
          viewport={{ once: true }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          transition={{ delay: '0.5' }}
          className="shadow-3xl rounded-lg ring-2 ring-blue-500/50"
          src="illustration-style-manager.webp"
          alt="ناحیه کاربری لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={350}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          transition={{ delay: '0.3' }}
          className="shadow-3xl hidden w-58 rounded-lg ring-2 ring-blue-500/50 lg:absolute lg:top-34 lg:-right-30 lg:block"
          src="illustration-style-manager-left.webp"
          alt="ناحیه کاربری لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={245}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          transition={{ delay: '0.7' }}
          className="shadow-3xl hidden w-58 rounded-lg ring-2 ring-blue-500/50 lg:absolute lg:top-10 lg:-left-30 lg:block"
          src="illustration-style-manager-right.webp"
          alt="ناحیه کاربری لاگوم"
        />
      </div>
    </section>
  )
}
