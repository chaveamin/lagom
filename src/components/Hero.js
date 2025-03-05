function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="mr-2 inline size-6 -scale-x-100"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  )
}

export default function Hero({ onPreviewClick }) {
  return (
    <section className="relative mx-auto w-full pt-18 pb-24 lg:max-w-3xl">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-lg font-bold text-blue-600">
          قالب ناحیه کاربری WHMCS لاگوم
        </h1>
        <h2 className="text-4xl leading-12 font-light text-zinc-800 lg:text-6xl lg:leading-22">
          <span className="font-extrabold">قالب WHMCS</span> ساده، شهودی و
          کاملاً ریسپانسیو
        </h2>
        <p className="text-xl leading-8 font-light text-zinc-600 lg:text-2xl lg:leading-10">
          قالب و فرم سفارش مجهز به طرح‌ بندی‌های متعدد، چندین سبک، مدیریت منو و
          شخصی سازی رنگ های قالب.
        </p>
        <div className="flex flex-col items-center gap-y-6 *:rounded-lg *:px-7 *:py-3 *:text-center *:text-xl *:font-medium lg:flex-row lg:gap-x-6">
          <a
            className="w-full bg-blue-600 text-white transition-colors hover:bg-blue-700 lg:w-fit"
            href="#pricing"
          >
            قیمت گذاری
          </a>
          <a
            className="w-full border-2 border-blue-600 text-blue-600 transition-colors hover:bg-blue-100 lg:w-fit"
            href="#"
            onClick={onPreviewClick}
          >
            پیشنمایش
          </a>
          <a
            className="text-center text-xl font-bold text-blue-600 lg:mr-auto"
            href="https://documentations.liara.run/docs/lagom"
            target="_blank"
          >
            راهنمای محصول
            <ExternalIcon></ExternalIcon>
          </a>
        </div>
      </div>
    </section>
  )
}
