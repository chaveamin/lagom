import Image from "next/image";

const customization = [
  {
    id: "1",
    title: "سبک های مختلف",
    desc: "از بین سه سبک مختلف از قالب ایمیل، که هر کدام برای تقویت ارتباطات شما و مطابقت با زیبایی سایت شما طراحی شده اند، انتخاب کنید.",
    href: "https://lagom.rsstudio.net/docs/extensions/email-template/configuration/#styles",
  },
  {
    id: "2",
    title: "تغییر آسان متن",
    desc: "به راحتی متن نمایش داده شده در قالب های ایمیل را با استفاده از افزونه لاگوم سفارشی کنید، بدون نیاز به هیچ گونه دانش برنامه نویسی.",
    href: "https://lagom.rsstudio.net/docs/extensions/email-template/configuration/#styles",
  },
  {
    id: "3",
    title: "تنظیم لینک های اجتماعی",
    desc: "لینک رسانه های اجتماعی را برای نمایش در قالب انتخاب کنید و به راحتی با استفاده از افزونه لاگوم ادرس ها را به پروفایل رسانه های اجتماعی خود اختصاص دهید.",
    href: "https://lagom.rsstudio.net/docs/extensions/email-template/configuration/#styles",
  },
  {
    id: "4",
    title: "شخصی سازی لینک های فوتر",
    desc: "لینک های ضروری را پیکربندی کنید تا از طریق افزونه لاگوم در فوتر نشان داده شوند. این کار بدون نیاز به کدنویسی قابل انجام است.",
    href: "https://lagom.rsstudio.net/docs/extensions/email-template/configuration/#styles",
  },
  {
    id: "5",
    title: "متن کپی رایت",
    desc: "محتوای خود را ذخیره کنید و متن کپی رایت مورد نیاز را به صورت خودکار به همه ایمیل های ارسالی اضافه کنید.",
    href: "https://lagom.rsstudio.net/docs/extensions/email-template/configuration/#styles",
  },
  {
    id: "6",
    title: "مدیریت لوگو",
    desc: "با استفاده از افزونه لاگوم تنها با چند کلیک، به راحتی لوگوی خود را به قالب های ایمیل اختصاص دهید.",
    href: "https://lagom.rsstudio.net/docs/extensions/email-template/configuration/#styles",
  },
];

export default function Customize() {
  return (
    <section className="my-22 lg:max-w-3xl flex flex-col gap-y-22 w-full mx-auto">
      <div className="fle flex-col gap-y-8">
        <h4 className="font-extrabold mb-8 text-2xl lg:text-5xl text-zinc-800 leading-12 lg:leading-16">
          شخصی سازی آسان از طریق پنل لاگوم
        </h4>
        <p className="font-light text-xl lg:text-2xl text-zinc-600 leading-8 lg:leading-10">
          افزونه لاگوم به شما این امکان را میدهد تمام موارد قالب را از طریق یک
          رابط کاربری ساده مدیریت کنید و روند شخصی سازی را بسیار ساده میکند.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {customization.map((c) => (
          <div className="flex flex-col gap-y-3" key={c.id}>
            <Image
              className="ring ring-zinc-200 shadow-sm shadow-zinc-800/5 rounded-lg"
              width={240}
              height={180}
              src={`/email/lagom-email-gallery-${c.id}.png`}
              alt="قالب ایمیل لاگوم"></Image>
            <h3 className="font-bold text-xl">{c.title}</h3>
            <p className="text-justify mb-2 font-light text-zinc-700">
              {c.desc}
            </p>
            <a
              className="text-blue-600 font-light"
              href={c.href}
              target="_blank">
              اطلاعات بیشتر
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
