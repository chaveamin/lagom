import * as motion from 'motion/react-client'

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
    <section className="relative mx-auto w-full pt-18 lg:max-w-5xl">
      <div className="relative isolate pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="py-24 sm:py-12 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-full text-center">
              <h1 className="text-lg font-bold text-blue-600">
                قالب ناحیه کاربری WHMCS لاگوم
              </h1>
              <h2 className="text-4xl leading-12 font-light text-zinc-800 lg:text-6xl lg:leading-22">
                <span className="font-extrabold">قالب WHMCS</span> ساده، شهودی و
                کاملاً ریسپانسیو
              </h2>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                قالب و فرم سفارش مجهز به طرح‌ بندی‌های متعدد، چندین سبک، مدیریت
                منو و شخصی سازی رنگ های قالب.
              </p>
              <div className="mt-10 flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
                <a
                  href="#"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  قیمت گذاری
                </a>
                <a
                  href="#"
                  className="text-lg/6 font-semibold text-blue-600"
                  onClick={onPreviewClick}
                >
                  پیشنمایش
                </a>
                <a
                  className="text-center text-lg font-bold text-blue-600 lg:mr-auto"
                  href="https://docs-eta-amber.vercel.app/"
                  target="_blank"
                >
                  راهنمای محصول
                  <ExternalIcon></ExternalIcon>
                </a>
              </div>
            </div>
            <motion.div
              viewport={{ once: true }}
              initial={{ translateY: '25px', opacity: 0 }}
              whileInView={{ translateY: '0', opacity: 1 }}
              transition={{ delay: '0.3' }}
              className="mt-16 flow-root sm:mt-24"
            >
              <div className="-m-2 rounded-(--card-radius) bg-gray-900/5 p-(--card-padding) ring-1 ring-gray-900/10 [--card-padding:--spacing(3)] [--card-radius:var(--radius-4xl)] ring-inset lg:-m-4">
                <img
                  width={2432}
                  height={1442}
                  className="rounded-[calc(var(--card-radius)-var(--card-padding))] ring-1 shadow-2xl ring-gray-900/10"
                  src="/client-dashboard.webp"
                  alt="قالب ناحیه کاربری لاگوم"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </section>
  )
}
