import f1 from "@/images/small_feature-layout.png";
import f2 from "@/images/small_feature-seo.png";
import f3 from "@/images/small_feature-page_layout.png";
import f4 from "@/images/small_feature-affix_navigation.png";
import f5 from "@/images/small_feature-style_settings.png";
import f6 from "@/images/small_feature-multiple_templates.png";
import f7 from "@/images/small_feature-font_family.png";
import f8 from "@/images/small_feature-affix_sidebar.png";
import f9 from "@/images/small_feature-hide_sidebar.png";
import Image from "next/image";

const features = [
  {
    image: f1,
    title: "طرح‌ بندی مبتنی بر وضعیت کاربر",
    desc: "نمایش طرح بندی های مختلف منو و پاورقی بر اساس وضعیت ورود مشتری.",
  },
  {
    image: f2,
    title: "مدیریت اولیه سئو",
    desc: "مدیریت سئو برای صفحات قالب. عنوان صفحه سفارشی، توضیحات و تصویر شبکه های اجتماعی خود را اختصاص دهید.",
  },
  {
    image: f3,
    title: "طرح بندی سفارشی برای صفحات",
    desc: "یک طرح را به صفحات خود اختصاص دهید و تنظیمات ایجاد شده در مدیریت طرح ها را بازنویسی کنید.",
  },
  {
    image: f4,
    title: "منوی ثابت",
    desc: "هنگامی که مشتری وبسایت شما را به سمت بالا حرکت میدهد، منوی سایت را ثابت نگه دارید.",
  },
  {
    image: f5,
    title: "بخش های چند استایلی",
    desc: "با استفاده از چند کلیک ساده میتوانید از بین 3 سبک مختلف موجود برای بخش های لاگوم انتخاب کنید.",
  },
  {
    image: f6,
    title: "قالب صفحات",
    desc: "قالب های مختلف را برای صفحات انتخاب شده لاگوم تعریف کنید و تنظیمات آن را پیکربندی کنید.",
  },
  {
    image: f7,
    title: "فونت های مختلف",
    desc: "فونت مورد استفاده در قالب لاگوم را با چند کلیک ساده تغییر دهید.",
  },
  {
    image: f8,
    title: "ساید بار ثابت",
    desc: "نوار کنای ثابت",
  },
  {
    image: f9,
    title: "پنهان کردن نوار کناری",
    desc: "نوار کناری قالب لاگوم را برای صفحات انتخابی در مدیریت صفحه پنهان کنید.",
  },
];

export default function Other() {
  return (
    <section className="py-22">
      <div className="w-full lg:max-w-5xl mx-auto">
        <h2 className="lg:text-5xl text-3xl leading-14 font-black text-zinc-800">
          سایر امکانات
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-12 relative w-full lg:mt-20 mt-10 lg:max-w-5xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col max-w-72">
            <Image
              className="rounded-lg ring ring-zinc-200 shadow-lg shadow-zinc-800/7"
              width={288}
              src={f.image}
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
