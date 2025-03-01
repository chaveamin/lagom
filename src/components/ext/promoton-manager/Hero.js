function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 inline -scale-x-100 mr-2">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-18 pb-24 w-full lg:max-w-3xl mx-auto">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-lg text-blue-600 font-semibold">
          افزونه بنر تبلیغات برای قالب ناحیه کاربری WHMCS لاگوم
        </h1>
        <h2 className="font-light text-4xl lg:text-6xl text-zinc-800 leading-12 lg:leading-22">
          ساخت <span className="font-extrabold">بنرهای تبلیغاتی</span> زیبا در
          WHMCS
        </h2>
        <p className="font-light text-xl lg:text-2xl text-zinc-600 leading-8 lg:leading-10">
          با ایجاد بنرهای تبلیغاتی سفارشی در قالب لاگوم، فروش خود را افزایش دهید
          مکان بنر را انتخاب کنید و شروع به کسب درآمد کنید!
        </p>
        <div className="flex items-center flex-col lg:flex-row gap-y-6 lg:gap-x-6 *:text-center *:rounded-lg *:px-7 *:py-3 *:text-xl *:font-medium">
          <a
            className="bg-blue-600 text-white hover:bg-blue-700 lg:w-fit w-full transition-colors"
            href="#pricing">
            شروع از 1,880,000 تومانءءء/سالانه
          </a>
          <a
            className="text-blue-600 border-2 border-blue-600 hover:bg-blue-100 lg:w-fit w-full transition-colors"
            href="#info">
            اطلاعات بیشتر
          </a>
          <a
            className="text-xl text-center lg:mr-auto text-blue-600 font-bold"
            href="https://documentations.liara.run/docs/lagom"
            target="_blank">
            راهنمای محصول
            <ExternalIcon></ExternalIcon>
          </a>
        </div>
      </div>
    </section>
  );
}
