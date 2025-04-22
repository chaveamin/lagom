function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5 flex-none text-blue-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="rounded-b-2xl px-8 py-22">
      <div className="mx-auto w-full lg:max-w-5xl">
        <h2 className="mb-16 text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          قیمت گذاری
        </h2>
      </div>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 *:flex *:flex-col *:justify-between *:rounded-3xl *:bg-white *:p-8 *:ring-1 *:shadow-xl *:ring-gray-900/10 *:sm:p-10">
        <div>
          <div className="relative pb-10 text-center before:absolute before:right-0 before:bottom-0 before:h-[3px] before:w-10 before:rounded-xs before:bg-blue-600 before:content-['']">
            <div className="mt-4 flex items-baseline gap-x-2">
              <span className="text-4xl font-semibold tracking-tight text-gray-900">
                800,000 تومانءءء
              </span>
              <span className="text-base/7 font-semibold text-gray-600">
                /سالانه
              </span>
            </div>
          </div>
          <ul
            role="list"
            className="mt-10 space-y-4 text-sm text-gray-600 *:flex *:gap-x-3"
          >
            <li>
              <CheckIcon aria-hidden="true" />6 ماه پشتیبانی
            </li>
            <li>
              <CheckIcon aria-hidden="true" />6 ماه آپدیت
            </li>
            <li>
              <CheckIcon aria-hidden="true" />
              لایسنس یک ساله
            </li>
          </ul>
          <a
            className="mt-8 block rounded-md bg-blue-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            href="https://designesia.ir/downloads/lagom-custom-code/"
            target="_blank"
          >
            سفارش دهید
          </a>
        </div>
      </div>
    </section>
  )
}
