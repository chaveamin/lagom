export default function Pricing() {
  return (
    <section id="pricing" className="rounded-b-2xl bg-zinc-100 px-8 py-22">
      <div className="mx-auto w-full lg:max-w-5xl">
        <h2 className="mb-16 text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          قیمت گذاری
        </h2>
      </div>
      <div className="mx-auto mb-10 max-w-5xl rounded-lg bg-blue-100 p-8 ring shadow-sm shadow-zinc-400 ring-blue-500">
        <p className="font-bold">نکته: </p>
        <p className="text-lg font-light">
          1: سایت ساز لاگوم فقط با قالب لاگوم سازگار است.
        </p>
        <p className="text-lg font-light">
          2: سایت ساز لاگوم فقط با نسخه{' '}
          <a
            className="font-bold text-blue-700"
            href="https://designesia.ir/downloads/lagom-whmcs-theme/"
          >
            قالب لاگوم
          </a>{' '}
          موجود در سایت سازگار است و اگر آن را قانونی خریده باشید با لایسنس بنده
          فعال نمیشود{' '}
        </p>
      </div>
      <div className="mx-auto flex max-w-md flex-col items-center justify-center rounded-lg bg-white p-6 ring shadow-sm ring-zinc-200">
        <div className="relative mt-6 pb-10 text-center before:absolute before:bottom-0 before:left-[calc(50%_-_20px)] before:h-[3px] before:w-10 before:rounded-xs before:bg-blue-600 before:content-['']">
          <h3 className="text-[40px] font-bold">
            3,500,000 <span className="text-2xl font-light">تومانءءء</span>
          </h3>
          <p className="text-sm font-normal text-zinc-700">سالانه</p>
        </div>
        <ul className="*: mt-8 text-center *:mb-3 *:text-base *:font-light *:text-zinc-800">
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
          className="mt-6 w-36 rounded-lg bg-blue-600 py-4 text-center font-medium text-white transition-colors hover:bg-blue-700"
          href="https://designesia.ir/downloads/lagom-website-builder/"
          target="_blank"
        >
          سفارش دهید
        </a>
      </div>
    </section>
  )
}
