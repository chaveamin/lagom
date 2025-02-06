import Image from "next/image";
import logo from "@/images/logo.svg";

function Topbar() {
  return (
    <div className="hidden w-full px-20 min-h-10 absolute top-0 right-0 items-center z-20 h-px border-b-[1px] border-b-zinc-100 lg:flex">
      <a href="https://designesia.ir/" target="_blank">
        <Image
          className="grayscale hover:grayscale-0 transition-all"
          width={18}
          alt="لوگو"
          src={logo}
        />
      </a>
      <ul className="flex mr-auto">
        <li>
          <a
            target="_blank"
            className="transition-colors items-center py-2 px-4 text-sm text-zinc-500 hover:text-blue-600"
            href="https://documentations.liara.run/docs/lagom">
            راهنما
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="transition-colors items-center py-2 px-4 text-sm text-zinc-500 hover:text-blue-600"
            href="https://t.me/sicktoy">
            پشتیبانی
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="transition-colors items-center py-2 px-4 text-sm text-zinc-500 hover:text-blue-600"
            href="https://designesia.ir/checkout/">
            سبد خرید
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="transition-colors items-center py-2 px-4 text-sm text-zinc-500 hover:text-blue-600"
            href="https://designesia.ir/account/?tab=dashboard">
            حساب کاربری
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Topbar;
