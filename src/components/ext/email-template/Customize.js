import Image from 'next/image'

const customization = [
  {
    id: '1',
    title: 'سبک های مختلف',
    desc: 'از بین سه سبک مختلف از قالب ایمیل، که هر کدام برای تقویت ارتباطات شما و مطابقت با زیبایی سایت شما طراحی شده اند، انتخاب کنید.',
    href: '#',
  },
  {
    id: '2',
    title: 'تغییر آسان متن',
    desc: 'به راحتی متن نمایش داده شده در قالب های ایمیل را با استفاده از افزونه لاگوم سفارشی کنید، بدون نیاز به هیچ گونه دانش برنامه نویسی.',
    href: '#',
  },
  {
    id: '3',
    title: 'تنظیم لینک های اجتماعی',
    desc: 'لینک رسانه های اجتماعی را برای نمایش در قالب انتخاب کنید و به راحتی با استفاده از افزونه لاگوم ادرس ها را به پروفایل رسانه های اجتماعی خود اختصاص دهید.',
    href: '#',
  },
  {
    id: '4',
    title: 'شخصی سازی لینک های فوتر',
    desc: 'لینک های ضروری را پیکربندی کنید تا از طریق افزونه لاگوم در فوتر نشان داده شوند. این کار بدون نیاز به کدنویسی قابل انجام است.',
    href: '#',
  },
  {
    id: '5',
    title: 'متن کپی رایت',
    desc: 'محتوای خود را ذخیره کنید و متن کپی رایت مورد نیاز را به صورت خودکار به همه ایمیل های ارسالی اضافه کنید.',
    href: '#',
  },
  {
    id: '6',
    title: 'مدیریت لوگو',
    desc: 'با استفاده از افزونه لاگوم تنها با چند کلیک، به راحتی لوگوی خود را به قالب های ایمیل اختصاص دهید.',
    href: '#',
  },
]

export default function Customize() {
  return (
    <section className="mx-auto my-22 flex w-full flex-col gap-y-22 lg:max-w-3xl">
      <div className="fle flex-col gap-y-8">
        <h4 className="mb-8 text-2xl leading-12 font-extrabold text-zinc-800 lg:text-5xl lg:leading-16">
          شخصی سازی آسان از طریق پنل لاگوم
        </h4>
        <p className="text-xl leading-8 font-light text-zinc-500 lg:text-2xl lg:leading-10">
          افزونه لاگوم به شما این امکان را میدهد تمام موارد قالب را از طریق یک
          رابط کاربری ساده مدیریت کنید و روند شخصی سازی را بسیار ساده میکند.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {customization.map((c) => (
          <div className="flex flex-col gap-y-3" key={c.id}>
            <Image
              className="rounded-lg ring shadow-sm shadow-zinc-800/5 ring-zinc-200"
              width={240}
              height={180}
              src={`/email/lagom-email-gallery-${c.id}.webp`}
              alt="قالب ایمیل لاگوم"
            ></Image>
            <h3 className="text-xl font-bold">{c.title}</h3>
            <p className="mb-2 text-justify font-light text-zinc-700">
              {c.desc}
            </p>
            <a
              className="font-light text-blue-600"
              href={c.href}
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
