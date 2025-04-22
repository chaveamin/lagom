import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8">
      <img src="/404.svg" alt="صفحه پیدا نشد" />
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
