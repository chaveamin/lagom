const features = [
  {
    id: 'layout',
    title: 'طرح‌ بندی مبتنی بر وضعیت کاربر',
    desc: 'نمایش طرح بندی های مختلف منو و پاورقی بر اساس وضعیت ورود مشتری.',
  },
  {
    id: 'seo',
    title: 'مدیریت اولیه سئو',
    desc: 'مدیریت سئو برای صفحات قالب. عنوان صفحه سفارشی، توضیحات و تصویر شبکه های اجتماعی خود را اختصاص دهید.',
  },
  {
    id: 'page_layout',
    title: 'طرح بندی سفارشی برای صفحات',
    desc: 'یک طرح را به صفحات خود اختصاص دهید و تنظیمات ایجاد شده در مدیریت طرح ها را بازنویسی کنید.',
  },
  {
    id: 'affix_navigation',
    title: 'منوی ثابت',
    desc: 'هنگامی که مشتری وبسایت شما را به سمت بالا حرکت میدهد، منوی سایت را ثابت نگه دارید.',
  },
  {
    id: 'style_settings',
    title: 'بخش های چند استایلی',
    desc: 'با استفاده از چند کلیک ساده میتوانید از بین 3 سبک مختلف موجود برای بخش های لاگوم انتخاب کنید.',
  },
  {
    id: 'multiple_templates',
    title: 'قالب صفحات',
    desc: 'قالب های مختلف را برای صفحات انتخاب شده لاگوم تعریف کنید و تنظیمات آن را پیکربندی کنید.',
  },
  {
    id: 'font_family',
    title: 'فونت های مختلف',
    desc: 'فونت مورد استفاده در قالب لاگوم را با چند کلیک ساده تغییر دهید.',
  },
  {
    id: 'affix_sidebar',
    title: 'ساید بار ثابت',
    desc: 'نوار کنای ثابت',
  },
  {
    id: 'hide_sidebar',
    title: 'پنهان کردن نوار کناری',
    desc: 'نوار کناری قالب لاگوم را برای صفحات انتخابی در مدیریت صفحه پنهان کنید.',
  },
]

export default function Other() {
  return (
    <section className="py-22">
      <div className="mx-auto w-full lg:max-w-5xl">
        <h2 className="text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          سایر امکانات
        </h2>
      </div>
      <div className="relative mx-auto mt-10 grid w-full grid-cols-1 gap-y-12 md:grid-cols-2 lg:mt-20 lg:max-w-5xl lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="flex max-w-72 flex-col">
            <img
              className="rounded-lg ring shadow-lg shadow-zinc-800/7 ring-zinc-200"
              src={`/small_feature-${f.id}.webp`}
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
