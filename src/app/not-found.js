import Image from "next/image";
import notfound from "@/images/404.svg";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className=" flex flex-col justify-center items-center gap-y-8">
      <Image width={500} src={notfound} alt="صفحه پیدا نشد" />
      <h1 className="font-light text-zinc-500 text-3xl">صفحه پیدا نشد</h1>
      <Link
        className="bg-blue-600 text-white font-bold rounded-lg p-4"
        href="/">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
