import React from "react";

export default function Pricing() {
  return (
    <section className="py-22">
      <div className="w-full lg:max-w-5xl mx-auto">
        <h2 className="lg:text-5xl text-3xl leading-14 font-black text-zinc-800 mb-16">
          قیمت گذاری
        </h2>
      </div>
      <div
        className="flex flex-wrap lg:flex-nowrap gap-y-8 lg:gap-x-8 *:flex *:items-center *:justify-center max-w-5xl mx-auto
      *:flex-col *:bg-zinc-50 *:ring *:ring-zinc-200 *:shadow-sm *:rounded-lg *:p-6 *:w-md *:lg:w-lg
       *:hover:shadow-lg *:hover:-translate-y-2 *:transition-transform">
        <div>
          <h4 className="text-3xl font-light leading-10">امگا</h4>
          <div
            className="mt-6 pb-10 text-center relative
          before:content-[''] before:absolute before:w-10 before:h-[3px] before:rounded-xs before:bottom-0 before:left-[calc(50%_-_20px)] before:bg-blue-600">
            <p className="text-sm font-normal text-zinc-700 leading-5">
              شروع از
            </p>
            <h3 className="font-bold text-[40px]">
              1,360,000 <span className="font-light text-2xl">تومانءءء</span>
            </h3>
            <p className="text-sm font-normal text-zinc-700">سالانه</p>
          </div>
          <ul className="mt-8 text-center *:mb-3 *:font-light *: *:text-zinc-800 *:text-base">
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
            className="mt-6 bg-blue-600 w-36 text-center text-white font-medium py-4 rounded-lg hover:bg-blue-700 transition-colors"
            href="https://designesia.ir/downloads/lagom-whmcs-theme/"
            target="_blank">
            سفارش دهید
          </a>
        </div>
        <div>
          <h4 className="text-3xl font-light leading-10">آلفا</h4>
          <div
            className="mt-6 pb-10 text-center relative
          before:content-[''] before:absolute before:w-10 before:h-[3px] before:rounded-xs before:bottom-0 before:left-[calc(50%_-_20px)] before:bg-blue-600">
            <p className="text-sm font-normal text-zinc-700 leading-5">
              شروع از
            </p>
            <h3 className="font-bold text-[40px]">
              2,500,000 <span className="font-light text-2xl">تومانءءء</span>
            </h3>
            <p className="text-sm font-normal text-zinc-700">سالانه</p>
          </div>
          <ul className="mt-8 text-center *:mb-3 *:font-light *: *:text-zinc-800 *:text-base">
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
            className="mt-6 bg-blue-600 w-36 text-center text-white font-medium py-4 rounded-lg hover:bg-blue-700 transition-colors"
            href="https://designesia.ir/downloads/lagom-whmcs-theme/"
            target="_blank">
            سفارش دهید
          </a>
        </div>
      </div>
    </section>
  );
}
