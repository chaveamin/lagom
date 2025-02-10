import * as motion from "motion/react-client";

export default function StyleManager() {
  return (
    <section className="py-22">
      <div className="w-full lg:max-w-5xl mx-auto flex flex-col lg:gap-y-10 gap-y-4">
        <h2 className="lg:text-5xl text-3xl leading-14 font-black text-zinc-800">
          مدیریت طرح ها
        </h2>
        <p className="lg:text-2xl text-xl lg:leading-10 text-justify leading-8 font-light text-zinc-600">
          لاگوم ابزارهای ضروری را برای مدیریت رنگ ها و سبک های قالب بدون داشتن
          دانش کدنویسی ارائه میدهد. شما این اختیار را خواهید داشت که از سبک‌ها و
          طرح‌های رنگی مختلف استفاده کنید تا قالب را با سبک برند خود تطبیق دهید.
        </p>
      </div>
      <div className="relative w-full  mt-20 lg:max-w-3xl mx-auto">
        <motion.img
          viewport={{ once: true }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.5" }}
          className="ring-2 ring-blue-500/50 shadow-3xl rounded-lg"
          src="illustration-style-manager.png"
          alt="ناحیه کاربری لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={350}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.3" }}
          className="ring-2 ring-blue-500/50 shadow-3xl hidden w-58 rounded-lg lg:block lg:absolute lg:top-34 lg:-right-30"
          src="illustration-style-manager-left.png"
          alt="ناحیه کاربری لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={245}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.7" }}
          className="ring-2 ring-blue-500/50 shadow-3xl hidden w-58 rounded-lg lg:block lg:absolute lg:top-10 lg:-left-30"
          src="illustration-style-manager-right.png"
          alt="ناحیه کاربری لاگوم"
        />
      </div>
    </section>
  );
}
