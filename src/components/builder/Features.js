const features = [
  {
    id: "caching",
    title: "سیستم کش",
    desc: "سرعت بارگذاری وبسایت خود را با فناوری کش اختصاصی افزایش دهید.",
  },
  {
    id: "export_import",
    title: "ایمپورت و اکسپورت آسان",
    desc: "برای افزایش بهره وری، از داده های وب سایت خود به آسانی خروجی بگیرید.",
  },
  {
    id: "media_manager",
    title: "مدیریت تصاویر",
    desc: "تعامل بصری صفحات خود را با مدیریت تصاویر قالب افزایش دهید.",
  },
  {
    id: "optimization",
    title: "بهینه سازی آسان",
    desc: "عملکرد سایت خود را افزایش دهید، از زمان بارگذاری سریع و تجربه کاربری اطمینان حاصل کنید..",
  },
  {
    id: "seo_management",
    title: "مدیریت سئو",
    desc: "با مدیریت حرفه ای سئو صفحات جدید ساخته شده حضور آنلاین خود را به حداکثر برسانید.",
  },
  {
    id: "translations",
    title: "ترجمه آسان",
    desc: "وب سایت خود را با توانایی ترجمه هر بخش از صفحات تولید شده قدرتمند کنید.",
  },
];

export default function Features() {
  return (
    <section className="py-22">
      <div className="w-full lg:max-w-5xl mx-auto">
        <h2 className="lg:text-5xl mb-8 text-3xl leading-14 font-black text-zinc-800">
          امکانات ویژه
        </h2>
        <p className="lg:text-2xl text-xl lg:leading-10 text-justify leading-8 font-light text-zinc-600">
          مجموعه عظیمی از قابلیت ها را در سایت ساز لاگوم کشف کنید که حضور آنلاین
          شما را تقویت می کند.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-12 relative w-full lg:mt-20 mt-10 lg:max-w-5xl mx-auto">
        {features.map((f) => (
          <div key={f.id} className="flex flex-col max-w-72">
            <img
              className="rounded-lg ring ring-zinc-200 shadow-sm shadow-zinc-800/7"
              width={288}
              src={`/cms/cms-feature-${f.id}.png`}
              alt={f.title}
            />
            <h3 className="font-bold text-xl text-zinc-800 mt-8 mb-1">
              {f.title}
            </h3>
            <p className="font-light text-lg text-zinc-600 text-justify">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
