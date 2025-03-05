const steps = [
  {
    num: '1',
    title: 'مکان بنر تبلیغات را انتخاب کنید',
    desc: 'محل بنر تبلیغ را پیکربندی کنید، بین صفحات از پیش تعریف شده، از جمله دموهای قالب، انتخاب کنید.',
    href: 'https://lagom.rsstudio.net/docs/extensions/promotion-manager/configuration/#choose-placement',
  },
  {
    num: '2',
    title: 'بازه زمانی بنر تبلیغ را انتخاب کنید',
    desc: 'فوراً آن را منتشر کنید یا تاریخی برای منتشر آن در آینده انتخاب کنید . تاریخ انقضای بنر را تنظیم کنید تا تبلیغات پس از انقضا به طور خودکار پنهان شود.',
    href: 'https://lagom.rsstudio.net/docs/extensions/promotion-manager/configuration/#choose-placement',
  },
  {
    num: '3',
    title: 'تصاویر و محتوای بنر را انتخاب کنید',
    desc: 'عنوان تبلیغ را بنویسید، لینک دکمه را تنظیم کنید، گرادینت بنر را با استفاده از انتخابگر رنگ انتخاب کنید و تصویر خود را آپلود کنید.',
    href: 'https://lagom.rsstudio.net/docs/extensions/promotion-manager/configuration/#choose-placement',
  },
  {
    num: '4',
    title: 'فروش خود را افزایش دهید!',
    desc: 'به لطف افزونه، شما میتوانید مشتریان خود را در مورد تبلیغات فعلی خود مطلع کنید، یا لیست محصولات خود را به شیوه ای جذاب نمایش دهید.',
    href: 'https://lagom.rsstudio.net/docs/extensions/promotion-manager/configuration/#choose-placement',
  },
]

export default function Steps() {
  return (
    <section className="mx-auto w-full py-15 lg:max-w-3xl">
      <h4 className="mb-18 text-2xl leading-6 font-extrabold text-zinc-800 lg:text-5xl lg:leading-16">
        فروش خود را در 4 مرحله افزایش دهید
      </h4>
      <div className="flex flex-col gap-y-18">
        {steps.map((s) => (
          <div className="flex items-start gap-x-8" key={s.num}>
            <span className="size-12 border-b-2 border-blue-600 text-center text-lg font-bold text-blue-600">
              {s.num}
            </span>
            <div className="flex flex-col gap-y-6">
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="text-lg text-zinc-600">{s.desc}</p>
              <a
                className="w-fit font-bold text-blue-600 transition-colors hover:text-blue-500"
                href={s.href}
              >
                اطلاعات بیشتر
              </a>
            </div>
          </div>
        ))}
      </div>
      <a
        className="mx-auto mt-12 block max-w-3xl rounded-lg bg-blue-600 py-6 text-center text-xl font-bold text-white transition-colors hover:bg-blue-700"
        href="#"
      >
        خرید با 1,880,000 تومانءءء/سالانه
      </a>
    </section>
  )
}
