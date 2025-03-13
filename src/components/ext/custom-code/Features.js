import Image from 'next/image'

const features = [
  {
    id: 'code_location',
    title: 'انتخاب مکان کد',
    desc: 'هوک خروجی WHMCS را برای تزریق کد سفارشی که ایجاد می‌کنید مورد استفاده قرار دهید.',
    href: '#',
  },
  {
    id: 'customer_status',
    title: 'انتخاب وضعیت کاربر',
    desc: 'وضعیت مشتری را که باید یک نمونه کد خاص برای آن نمایش داده شود، تعیین کنید.',
    href: '#',
  },
  {
    id: 'selcted_pages',
    title: 'نمایش در صفحات خاص',
    desc: 'انتخاب کنید که کد سفارشی شما در کدام صفحات WHMCS نمایش داده شود.',
    href: '#',
  },
  {
    id: 'code_editor',
    title: 'ویرایشگر کد',
    desc: 'به صورت خودکار کد را قالب بندی می کند و از ترکیب آسان و دقیق قطعات کد اطمینان حاصل می کند.',
    href: '#',
  },
  {
    id: 'on_off',
    title: 'فعال و غیرفعالسازی کد',
    desc: 'برای سفارشی‌سازی بی‌وقفه، به سرعت بین فعال‌سازی و غیرفعال‌سازی کدها جابه‌جا شوید.',
    href: '#',
  },
  {
    id: 'supported_languages',
    title: 'HTML/CSS/JS',
    desc: 'از HTML CSS و جاوا اسکریپت به آسانی در قالب لاگوم پشتیبانی می کند.',
    href: '#',
  },
]

export default function Features() {
  return (
    <section className="mx-auto my-22 flex w-full flex-col gap-y-22 lg:max-w-3xl">
      <div className="fle flex-col gap-y-8">
        <h4 className="mb-8 text-2xl leading-12 font-extrabold text-zinc-800 lg:text-5xl lg:leading-16">
          ویژگی های کلیدی
        </h4>
        <p className="text-xl leading-8 font-light text-zinc-600 lg:text-2xl lg:leading-10">
          امکانات سفارشی سازی بی حد و حصر را با افزونه کد سفارشی آزاد کنید. HTML
          CSS و جاوا اسکریپت شخصی‌سازی شده را به آسانی وارد کنید تا قالب لاگوم
          خود را طراحی و تجربه کاربری منحصر به فردی را به آسانی ایجاد کنید.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div className="flex flex-col gap-y-3" key={f.id}>
            <Image
              className="rounded-lg ring shadow-sm shadow-zinc-800/5 ring-zinc-200"
              width={240}
              height={180}
              src={`/code/feature_sm-${f.id}.png`}
              alt="افزونه اعلان مشتری لاگوم"
            ></Image>
            <h3 className="text-xl font-bold">{f.title}</h3>
            <p className="mb-2 text-justify font-light text-zinc-700">
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
