import Image from 'next/image'
import notfound from '@/images/404.svg'
import Link from 'next/link'
export const runtime = 'edge'

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8">
      <Image width={500} src={notfound} alt="صفحه پیدا نشد" />
      <h1 className="text-3xl font-light text-zinc-500">صفحه پیدا نشد</h1>
      <Link
        className="rounded-lg bg-blue-600 p-4 font-bold text-white"
        href="/"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  )
}
