const customization = [
  {
    id: "1",
    title: "سبک های مختلف",
    desc: "",
    href: "",
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
    </section>
  );
}
