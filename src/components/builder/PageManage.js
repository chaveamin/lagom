import * as motion from 'motion/react-client'

export default function PageManage() {
  return (
    <section className="relative py-22">
      <div className="mx-auto mb-16 flex w-full flex-col gap-y-4 lg:max-w-3xl lg:gap-y-10">
        <h2 className="text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          مدیریت صفحات وبسایت
        </h2>
        <p className="text-justify text-xl leading-8 font-light text-zinc-600 lg:text-2xl lg:leading-10">
          با سایت ساز لاگوم مدیریت صفحه بدون مشکل را تجربه کنید و دنیایی از
          امکانات سفارشی سازی را باز کنید. کنترل وب سایت خود را در دست بگیرید.
        </p>
      </div>
      <div className="relative mx-auto mt-20 lg:max-w-3xl">
        <motion.img
          width={840}
          viewport={{ once: true }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          transition={{ delay: '0.3', duration: '0.5' }}
          className="shadow-3xl rounded-lg ring-2 ring-blue-500/50"
          src="/cms/cms-website_page_management-main.webp"
          alt="مدیریت صفحات سایت ساز"
        />
        <motion.img
          viewport={{ once: true }}
          width={246}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          transition={{ delay: '0.5', duration: '0.5' }}
          className="shadow-3xl hidden rounded-lg ring-2 ring-blue-500/50 lg:absolute lg:top-10 lg:-left-30 lg:block"
          src="/cms/cms-website_page_management-left-1.webp"
          alt="مدیریت صفحات سایت ساز"
        />
        <motion.img
          viewport={{ once: true }}
          width={140}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          transition={{ delay: '0.7', duration: '0.5' }}
          className="shadow-3xl hidden rounded-lg ring-2 ring-blue-500/50 lg:absolute lg:top-70 lg:-left-30 lg:block"
          src="/cms/cms-website_page_management-left-2.webp"
          alt="مدیریت صفحات سایت ساز"
        />
        <motion.img
          viewport={{ once: true }}
          width={400}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          transition={{ delay: '0.6', duration: '0.5' }}
          className="shadow-3xl hidden rounded-lg ring-2 ring-blue-500/50 lg:absolute lg:top-50 lg:-right-30 lg:block"
          src="/cms/cms-website_page_management-right-1.webp"
          alt="مدیریت صفحات سایت ساز"
        />
        <motion.img
          viewport={{ once: true }}
          width={177}
          initial={{ translateX: '-25px', opacity: 0 }}
          whileInView={{ translateX: '0', opacity: 1 }}
          transition={{ delay: '0.8', duration: '0.5' }}
          className="-z-10 hidden lg:absolute lg:top-80 lg:-left-30 lg:block"
          src="/cms/cms-website_page_management-svg.svg"
          alt="مدیریت صفحات سایت ساز"
        />
      </div>
    </section>
  )
}
