export default function Pricing() {
  return (
    <section id="pricing" className="bg-zinc-100 py-22 px-8 rounded-b-2xl">
      <div className="w-full lg:max-w-5xl mx-auto">
        <h2 className="lg:text-5xl text-3xl leading-14 font-black text-zinc-800 mb-16">
          قیمت گذاری
        </h2>
      </div>
      <div className="bg-blue-100 rounded-lg ring ring-blue-500 p-8 shadow-sm shadow-zinc-400 max-w-5xl mx-auto mb-10">
        <p className="font-bold">نکته: </p>
        <p className="font-light text-lg">
          1: سایت ساز لاگوم فقط با قالب لاگوم سازگار است.
        </p>
        <p className="font-light text-lg">
          2: سایت ساز لاگوم فقط با نسخه{" "}
          <a
            className="text-blue-700 font-bold"
            href="https://designesia.ir/downloads/lagom-whmcs-theme/">
            قالب لاگوم
          </a>{" "}
          موجود در سایت سازگار است و اگر آن را قانونی خریده باشید با لایسنس بنده
          فعال نمیشود{" "}
        </p>
      </div>
      <div className="flex items-center justify-center mx-auto flex-col bg-white ring ring-zinc-200 shadow-sm rounded-lg p-6 max-w-md">
        <div
          className="mt-6 pb-10 text-center relative
          before:content-[''] before:absolute before:w-10 before:h-[3px] before:rounded-xs before:bottom-0 before:left-[calc(50%_-_20px)] before:bg-blue-600">
          <h3 className="font-bold text-[40px]">
            3,500,000 <span className="font-light text-2xl">تومانءءء</span>
          </h3>
          <p className="text-sm font-normal text-zinc-700">سالانه</p>
        </div>
        <ul className="mt-8 text-center *:mb-3 *:font-light *: *:text-zinc-800 *:text-base">
          <li>
            سازگار فقط با نسخه <span className="font-bold">PHP 8.1</span> به
            بالا
          </li>
          <li>
            <span className="font-bold">6 ماه</span> پشتیبانی
          </li>
          <li>
            <span className="font-bold">1 سال</span> آپدیت
          </li>
          <li>
            <span className="font-bold">بدون محدودیت</span> دامنه
          </li>
          <li>
            لایسنس <span className="font-bold">مادام العمر</span>
          </li>
        </ul>
        <a
          className="mt-6 bg-blue-600 w-36 text-center text-white font-medium py-4 rounded-lg hover:bg-blue-700 transition-colors"
          href="https://designesia.ir/downloads/lagom-website-builder/"
          target="_blank">
          سفارش دهید
        </a>
      </div>
    </section>
  );
}
