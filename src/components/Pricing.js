import React from 'react'

export default function Pricing() {
  return (
    <section id="pricing" className="py-22">
      <div className="mx-auto w-full lg:max-w-5xl">
        <h2 className="mb-16 text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          قیمت گذاری
        </h2>
      </div>
      <div className="mx-auto flex max-w-5xl flex-wrap gap-y-8 *:flex *:w-md *:flex-col *:items-center *:justify-center *:rounded-lg *:bg-zinc-50 *:p-6 *:ring *:shadow-sm *:ring-zinc-200 *:transition-transform *:hover:-translate-y-2 *:hover:shadow-lg lg:flex-nowrap lg:gap-x-8 *:lg:w-lg">
        <div>
          <h4 className="text-3xl leading-10 font-light">امگا</h4>
          <div className="relative mt-6 pb-10 text-center before:absolute before:bottom-0 before:left-[calc(50%_-_20px)] before:h-[3px] before:w-10 before:rounded-xs before:bg-blue-600 before:content-['']">
            <p className="text-sm leading-5 font-normal text-zinc-700">
              شروع از
            </p>
            <h3 className="text-[40px] font-bold">
              1,360,000 <span className="text-2xl font-light">تومانءءء</span>
            </h3>
            <p className="text-sm font-normal text-zinc-700">سالانه</p>
          </div>
          <ul className="*: mt-8 text-center *:mb-3 *:text-base *:font-light *:text-zinc-800">
            <li>
              سازگار با نسخه <span className="font-bold">PHP 7.4</span>
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
            href="https://designesia.ir/downloads/lagom-whmcs-theme/"
            target="_blank"
          >
            سفارش دهید
          </a>
        </div>
        <div>
          <h4 className="text-3xl leading-10 font-light">آلفا</h4>
          <div className="relative mt-6 pb-10 text-center before:absolute before:bottom-0 before:left-[calc(50%_-_20px)] before:h-[3px] before:w-10 before:rounded-xs before:bg-blue-600 before:content-['']">
            <p className="text-sm leading-5 font-normal text-zinc-700">
              شروع از
            </p>
            <h3 className="text-[40px] font-bold">
              2,500,000 <span className="text-2xl font-light">تومانءءء</span>
            </h3>
            <p className="text-sm font-normal text-zinc-700">سالانه</p>
          </div>
          <ul className="*: mt-8 text-center *:mb-3 *:text-base *:font-light *:text-zinc-800">
            <li>
              سازگار با نسخه <span className="font-bold">PHP 8.1</span>
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
            href="https://designesia.ir/downloads/lagom-whmcs-theme/"
            target="_blank"
          >
            سفارش دهید
          </a>
        </div>
      </div>
    </section>
  )
}
