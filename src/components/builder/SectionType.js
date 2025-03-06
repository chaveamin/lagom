const sections = [
  {
    id: 'banner-default',
    title: 'بنر پیشفرض',
  },
  {
    id: 'banner-domain',
    title: 'بنر دامنه',
  },
  {
    id: 'banner-form',
    title: 'بنر فرم',
  },
  {
    id: 'cta',
    title: 'CTA',
  },
  {
    id: 'domain-search',
    title: 'جستجوی دامنه',
  },
  {
    id: 'faq',
    title: 'سوالات متداول',
  },
  {
    id: 'featured-tld',
    title: 'دامنه های ویژه',
  },
  {
    id: 'features',
    title: 'امکانات',
  },
  {
    id: 'features-sides',
    title: 'امکانات با نوار کناری',
  },
  {
    id: 'graphics',
    title: 'تصاویر',
  },
  {
    id: 'key-features',
    title: 'ویژگی های کلیدی',
  },
  {
    id: 'legal',
    title: 'قوانین',
  },
  {
    id: 'product-groups',
    title: 'گروه محصولات',
  },
  {
    id: 'products',
    title: 'محصولات',
  },
  {
    id: 'testimonials',
    title: 'نظر مشتریان',
  },
  {
    id: 'tld-table',
    title: 'جدول دامنه ها',
  },
]

export default function SectionType() {
  return (
    <section className="py-22">
      <div className="mx-auto w-full lg:max-w-5xl">
        <h2 className="mb-8 text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          بخش های مختلف
        </h2>
        <p className="text-justify text-xl leading-8 font-light text-zinc-600 lg:text-2xl lg:leading-10">
          در سایت ساز لاگوم، مجموعه‌ای غنی از انواع بخش‌های از پیش طراحی‌شده را
          خواهید دید که به شما این امکان را میدهد تا به آسانی صفحات وبسایت
          منحصربه‌ فرد و متناسبی را با چند کلیک ساده ایجاد کنید.
        </p>
      </div>
      <div className="relative mx-auto mt-10 grid w-full grid-cols-1 justify-items-center gap-x-6 gap-y-12 md:grid-cols-2 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
        {sections.map((s) => (
          <div key={s.id} className="group flex max-w-72 flex-col">
            <img
              className="w-full rounded-lg ring shadow-sm ring-zinc-200 transition-shadow hover:shadow-xl"
              src={`/cms/cms-section-${s.id}.webp`}
              alt={s.title}
            />
            <h3 className="mt-2 text-center text-lg font-light text-zinc-800 transition-colors group-hover:text-blue-600">
              {s.title}
            </h3>
            <p className="text-justify text-lg font-light text-zinc-600">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
