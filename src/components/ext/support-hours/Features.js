const features = [
  {
    id: 'operating_days',
    title: 'ثبت روزهای کاری',
    desc: 'به شما امکان می دهد روزهای خاصی از هفته را انتخاب کنید که در آن بخش های تعیین شده در دسترس خواهند بود.',
    href: '#',
  },
  {
    id: 'working_hours',
    title: 'تنظیم ساعات کاری',
    desc: 'امکان تعریف بازه های زمانی خاص را فراهم می کند که در طی آن خدمات پشتیبانی در روزهای کاری انتخاب شده در دسترس هستند.',
    href: '#',
  },
  {
    id: 'support_departments',
    title: 'تعیین دپارتمان ها',
    desc: 'فهرستی از بخش پشتیبانی را مشخص کنید که اطلاعات مربوط به در دسترس بودن آن باید برای مشتریان شما نمایش داده شود.',
    href: '#',
  },
  {
    id: 'display_on',
    title: 'صفحات انتخابی',
    desc: 'کنترل کنید که اطلاعات ساعات کار در ناحیه کاربری کجا ظاهر شود. همه یا صفحات خاصی را انتخاب کنید.',
    href: '#',
  },
  {
    id: 'time_zone',
    title: 'تنظیم منطقه زمانی',
    desc: 'منطقه زمانی را انتخاب کنید تا برای مشتریان شما در ناحیه کاربری نمایش داده شود.',
    href: '#',
  },
  {
    id: 'time_format',
    title: 'انتخاب فرمت زمان',
    desc: 'فرمت زمانی را انتخاب کنید، که باید برای مشتریان شما در ناحیه کاربری نشان داده شود، دو مورد برای انتخاب وجود دارد.',
    href: '#',
  },
]

export default function Features() {
  return (
    <section className="mx-auto my-22 flex w-full flex-col gap-y-22 lg:max-w-3xl">
      <div className="fle flex-col gap-y-8">
        <h4 className="mb-8 text-2xl leading-12 font-extrabold text-zinc-800 lg:text-5xl lg:leading-16">
          تنظیمات پیشرفته
        </h4>
        <p className="text-xl leading-8 font-light text-zinc-500 lg:text-2xl lg:leading-10">
          به کسب و کار خود این امکان را بدهید تا ساعات کاری واضحی را برای بخش
          های پشتیبانی به مشتریان ارائه دهند. این بدان معناست که مشتریان همیشه
          می دانند چه زمانی باید منتظر پشتیبانی باشند و چه زمانی می توانند پاسخی
          را پیش بینی کنند.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div className="flex flex-col gap-y-3" key={f.id}>
            <img
              className="rounded-lg ring shadow-sm shadow-zinc-800/5 ring-zinc-200"
              src={`/support-hours/feature_sm-${f.id}.png`}
              alt="افزونه ساعات کاری لاگوم"
            />
            <h3 className="text-xl font-bold">{f.title}</h3>
            <p className="mb-2 h-24 text-justify font-light text-zinc-700">
              {f.desc}
            </p>
            <a
              className="font-light text-blue-600"
              href={f.href}
              target="_blank"
            >
              اطلاعات بیشتر
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
