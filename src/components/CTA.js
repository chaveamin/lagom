import React from "react";

export default function CTA() {
  return (
    <section className="py-22 rounded-2xl bg-linear-to-b from-blue-600 to-blue-500 flex flex-col text-white text-center">
      <h2 className="lg:font-black font-extrabold mb-6 lg:text-5xl text-3xl max-w-3xl lg:leading-18 leading-10 mx-auto">
        به دنبال طراحی یا شخصی سازی وبسایت خود هستید؟
      </h2>
      <p className="font-light lg:text-2xl text-xl">
        برای شروع پروژه با بنده تماس بگیرید.
      </p>
      <div
        className="flex justify-center px-4 mt-10 lg:flex-row flex-col gap-6
      *:min-w-42 *:bg-white *:p-4 *:rounded-lg *:text-blue-600 *:text-xl *:font-bold *:hover:opacity-90 *:transition-opacity">
        <a href="https://t.me/sicktoy" target="_blank">
          تلگرام
        </a>
        <a href="mailto:aminchave@gmail.com" target="_blank">
          ایمیل
        </a>
        <a href="tel:09144871529">تماس</a>
      </div>
    </section>
  );
}
