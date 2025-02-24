const sections = [
  {
    id: "banner-default",
    title: "بنر پیشفرض",
  },
  {
    id: "banner-domain",
    title: "بنر دامنه",
  },
  {
    id: "banner-form",
    title: "بنر فرم",
  },
  {
    id: "cta",
    title: "CTA",
  },
  {
    id: "domain-search",
    title: "جستجوی دامنه",
  },
  {
    id: "faq",
    title: "سوالات متداول",
  },
  {
    id: "featured-tld",
    title: "دامنه های ویژه",
  },
  {
    id: "features",
    title: "امکانات",
  },
  {
    id: "features-sides",
    title: "امکانات با نوار کناری",
  },
  {
    id: "graphics",
    title: "تصاویر",
  },
  {
    id: "key-features",
    title: "ویژگی های کلیدی",
  },
  {
    id: "legal",
    title: "قوانین",
  },
  {
    id: "product-groups",
    title: "گروه محصولات",
  },
  {
    id: "products",
    title: "محصولات",
  },
  {
    id: "testimonials",
    title: "نظر مشتریان",
  },
  {
    id: "tld-table",
    title: "جدول دامنه ها",
  },
];

export default function SectionType() {
  return (
    <section className="py-22">
      <div className="w-full lg:max-w-5xl mx-auto">
        <h2 className="lg:text-5xl mb-8 text-3xl leading-14 font-black text-zinc-800">
          بخش های مختلف
        </h2>
        <p className="lg:text-2xl text-xl lg:leading-10 text-justify leading-8 font-light text-zinc-600">
          در سایت ساز لاگوم، مجموعه‌ای غنی از انواع بخش‌های از پیش طراحی‌شده را
          خواهید دید که به شما این امکان را میدهد تا به آسانی صفحات وبسایت
          منحصربه‌ فرد و متناسبی را با چند کلیک ساده ایجاد کنید.
        </p>
      </div>
      <div className="grid justify-items-center lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-12 gap-x-6 relative w-full lg:mt-20 mt-10 lg:max-w-5xl mx-auto">
        {sections.map((s) => (
          <div key={s.id} className="group flex flex-col max-w-72">
            <img
              className="rounded-lg w-full ring ring-zinc-200 shadow-sm hover:shadow-xl transition-shadow"
              src={`/cms/cms-section-${s.id}.png`}
              alt={s.title}
            />
            <h3 className="font-light text-center text-lg text-zinc-800 mt-2 group-hover:text-blue-600 transition-colors">
              {s.title}
            </h3>
            <p className="font-light text-lg text-zinc-600 text-justify">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
