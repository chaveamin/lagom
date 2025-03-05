import Image from 'next/image'
import logo from '@/images/logo.svg'

function Topbar() {
  return (
    <div className="absolute top-0 right-0 z-20 hidden h-px min-h-10 w-full items-center border-b-[1px] border-b-zinc-100 px-14 lg:flex">
      <a href="https://designesia.ir/" target="_blank">
        <Image
          className="grayscale transition-all hover:grayscale-0"
          width={18}
          alt="لوگو"
          src={logo}
        />
      </a>
      <ul className="mr-auto flex">
        <li>
          <a
            target="_blank"
            className="items-center px-4 py-2 text-sm text-zinc-500 transition-colors hover:text-blue-600"
            href="https://documentations.liara.run/docs/lagom"
          >
            راهنما
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="items-center px-4 py-2 text-sm text-zinc-500 transition-colors hover:text-blue-600"
            href="https://t.me/sicktoy"
          >
            پشتیبانی
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="items-center px-4 py-2 text-sm text-zinc-500 transition-colors hover:text-blue-600"
            href="https://designesia.ir/checkout/"
          >
            سبد خرید
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="items-center px-4 py-2 text-sm text-zinc-500 transition-colors hover:text-blue-600"
            href="https://designesia.ir/account/?tab=dashboard"
          >
            حساب کاربری
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Topbar
