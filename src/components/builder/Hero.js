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
    <div className="relative pt-18 pb-24 w-full lg:max-w-3xl mx-auto">
      <div className="flex flex-col gap-y-8">
        <h1 className="text-lg text-blue-600 font-bold">سایت ساز قالب لاگوم</h1>
        <h2 className="font-light text-4xl lg:text-6xl text-zinc-800 leading-12 lg:leading-22">
          <span className="font-extrabold">سایت ساز </span> قدرتمند برای قالب
          لاگوم
        </h2>
        <p className="font-light text-xl lg:text-2xl text-zinc-600 leading-8 lg:leading-10">
          با سایت ساز لاگوم حضور آنلاین خود را افزایش دهید. وبسایتی ایجاد کنید
          که تأثیر ماندگاری از خود به جا بگذارد و با مشتریان شما طنین انداز شود.
        </p>
        <div className="flex items-center flex-col lg:flex-row gap-y-6 lg:gap-x-6 *:text-center *:rounded-lg *:px-7 *:py-3 *:text-xl *:font-medium">
          <a
            className="bg-blue-600 text-white hover:bg-blue-700 lg:w-fit w-full transition-colors"
            href="#pricing">
            تعرفه
          </a>
          <a
            className="bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-100 lg:w-fit w-full transition-colors"
            href="#">
            پیشنمایش
          </a>
          <a
            className="text-xl text-center lg:mr-auto text-blue-600 font-bold"
            href="https://documentations.liara.run/docs/website-builder"
            target="_blank">
            راهنمای محصول
            <ExternalIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
