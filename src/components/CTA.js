export default function CTA() {
  return (
    <section className="mx-auto flex flex-col rounded-2xl bg-linear-to-b from-blue-600 to-blue-500 py-22 text-center text-white">
      <h2 className="mx-auto mb-6 max-w-3xl text-3xl leading-10 font-extrabold lg:text-5xl lg:leading-18 lg:font-black">
        به دنبال طراحی یا شخصی سازی وبسایت خود هستید؟
      </h2>
      <p className="text-xl font-light lg:text-2xl">
        برای شروع پروژه با بنده تماس بگیرید.
      </p>
      <div className="mt-10 flex flex-col justify-center gap-6 px-4 *:min-w-42 *:rounded-lg *:bg-white *:p-4 *:text-xl *:font-bold *:text-blue-600 *:transition-opacity *:hover:opacity-90 lg:flex-row">
        <a href="tg://resolve?domain=frontmstr">تلگرام</a>
        <a href="mailto:aminchave@gmail.com" target="_blank">
          ایمیل
        </a>
        <a href="tel:09144871529">تماس</a>
      </div>
    </section>
  )
}
