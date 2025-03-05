const features = [
  {
    id: 'caching',
    title: 'سیستم کش',
    desc: 'سرعت بارگذاری وبسایت خود را با فناوری کش اختصاصی افزایش دهید.',
  },
  {
    id: 'export_import',
    title: 'ایمپورت و اکسپورت آسان',
    desc: 'برای افزایش بهره وری، از داده های وب سایت خود به آسانی خروجی بگیرید.',
  },
  {
    id: 'media_manager',
    title: 'مدیریت تصاویر',
    desc: 'تعامل بصری صفحات خود را با مدیریت تصاویر قالب افزایش دهید.',
  },
  {
    id: 'optimization',
    title: 'بهینه سازی آسان',
    desc: 'عملکرد سایت خود را افزایش دهید، از زمان بارگذاری سریع و تجربه کاربری اطمینان حاصل کنید..',
  },
  {
    id: 'seo_management',
    title: 'مدیریت سئو',
    desc: 'با مدیریت حرفه ای سئو صفحات جدید ساخته شده حضور آنلاین خود را به حداکثر برسانید.',
  },
  {
    id: 'translations',
    title: 'ترجمه آسان',
    desc: 'وب سایت خود را با توانایی ترجمه هر بخش از صفحات تولید شده قدرتمند کنید.',
  },
]

export default function Features() {
  return (
    <section className="py-22">
      <div className="mx-auto w-full lg:max-w-5xl">
        <h2 className="mb-8 text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          امکانات ویژه
        </h2>
        <p className="text-justify text-xl leading-8 font-light text-zinc-600 lg:text-2xl lg:leading-10">
          مجموعه عظیمی از قابلیت ها را در سایت ساز لاگوم کشف کنید که حضور آنلاین
          شما را تقویت می کند.
        </p>
      </div>
      <div className="relative mx-auto mt-10 grid w-full grid-cols-1 gap-y-12 md:grid-cols-2 lg:mt-20 lg:max-w-5xl lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.id} className="flex max-w-72 flex-col">
            <img
              className="rounded-lg ring shadow-sm shadow-zinc-800/7 ring-zinc-200"
              width={288}
              src={`/cms/cms-feature-${f.id}.png`}
              alt={f.title}
            />
            <h3 className="mt-8 mb-1 text-xl font-bold text-zinc-800">
              {f.title}
            </h3>
            <p className="text-justify text-lg font-light text-zinc-600">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
