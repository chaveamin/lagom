import Image from 'next/image'

const features = [
  {
    id: 'page-filter',
    title: 'فیلتر صفحات',
    desc: 'نمایش اعلان های مختلف بر اساس صفحات سایت. صفحات را انتخاب کنید یا صفحات انتخاب شده را حذف کنید.',
    href: '#',
  },
  {
    id: 'client-filter',
    title: 'فیلتر مشتریان',
    desc: 'اعلان ها را می توان برای همه کابران، مشتریان سایت، مشتریان جدید یا مشتریان انتخاب شده نشان داد. علاوه بر این می توانید کشور مشتری یا گروه مشتری را تعریف کنید.',
    href: '#',
  },
  {
    id: 'services-filter',
    title: 'فیلتر سرویس ها',
    desc: 'سرویس خاص و پیکربندی آن مانند وضعیت، دوره صورتحساب، ثبت نام یا تاریخ انقضا را انتخاب کنید.',
    href: '#',
  },
  {
    id: 'config-filter',
    title: 'گزینه های فیلتر سرویس ها',
    desc: 'گزینه های قابل تنظیم بر اساس سرویس های انتخابی نشان داده می شوند و به شما امکان می دهند فیلترهای دقیق تری را برای اعلان تعریف کنید.',
    href: '#',
  },
  {
    id: 'domains-filter',
    title: 'فیلتر دامنه',
    desc: 'دامنه های خاص، وضعیت آنها، چرخه صورتحساب، ثبت نام یا تاریخ سررسید آنها را انتخاب کنید. شما حتی می توانید ریجسترار دامنه های خاصی را انتخاب کنید.',
    href: '#',
  },
  {
    id: 'date-filter',
    title: 'نمایش بر اساس محدوده تاریخ',
    desc: 'اعلان ها را می توان به گونه ای پیکربندی کرد که همیشه قابل مشاهده باشد، یا برای محدود تاریخ خاص، که می تواند در صفحه مدیریت تنظیم شود.',
    href: '#',
  },
]

export default function Features() {
  return (
    <section className="mx-auto my-22 flex w-full flex-col gap-y-22 lg:max-w-3xl">
      <div className="fle flex-col gap-y-8">
        <h4 className="mb-8 text-2xl leading-12 font-extrabold text-zinc-800 lg:text-5xl lg:leading-16">
          تنظیمات نمایش پیشرفته
        </h4>
        <p className="text-xl leading-8 font-light text-zinc-500 lg:text-2xl lg:leading-10">
          گزینه های پیکربندی چندگانه به شما امکان می دهد دقیقاً برای مواردی که
          اعلان ایجاد شده باید در قالب لاگوم نشان داده شود، تعریف کنید.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div className="flex flex-col gap-y-3" key={f.id}>
            <Image
              className="rounded-lg ring shadow-sm shadow-zinc-800/5 ring-zinc-200"
              width={240}
              height={180}
              src={`/client-notif/feature_sm-${f.id}.webp`}
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
