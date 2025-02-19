import * as motion from "motion/react-client";

export default function PageManage() {
  return (
    <section className="py-22 relative">
      <div className="w-full flex flex-col lg:max-w-3xl mx-auto lg:gap-y-10 gap-y-4 mb-16">
        <h2 className="lg:text-5xl text-3xl leading-14 font-black text-zinc-800">
          مدیریت صفحات وبسایت
        </h2>
        <p className="lg:text-2xl text-xl lg:leading-10 text-justify leading-8 font-light text-zinc-600">
          با سایت ساز لاگوم مدیریت صفحه بدون مشکل را تجربه کنید و دنیایی از
          امکانات سفارشی سازی را باز کنید. کنترل وب سایت خود را در دست بگیرید.
        </p>
      </div>
      <div className="relative mt-20 lg:max-w-3xl mx-auto">
        <motion.img
          width={840}
          viewport={{ once: true }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.3", duration: "0.5" }}
          className="ring-2 ring-blue-500/50 shadow-3xl rounded-lg"
          src="/cms/cms-website_page_management-main.png"
          alt="مدیریت صفحات سایت ساز"
        />
        <motion.img
          viewport={{ once: true }}
          width={246}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.5", duration: "0.5" }}
          className="ring-2 ring-blue-500/50 shadow-3xl hidden rounded-lg lg:block lg:absolute lg:top-10 lg:-left-30"
          src="/cms/cms-website_page_management-left-1.png"
          alt="مدیریت صفحات سایت ساز"
        />
        <motion.img
          viewport={{ once: true }}
          width={140}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.7", duration: "0.5" }}
          className="ring-2 ring-blue-500/50 shadow-3xl hidden rounded-lg lg:block lg:absolute lg:top-70 lg:-left-30"
          src="/cms/cms-website_page_management-left-2.png"
          alt="مدیریت صفحات سایت ساز"
        />
        <motion.img
          viewport={{ once: true }}
          width={400}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.6", duration: "0.5" }}
          className="ring-2 ring-blue-500/50 shadow-3xl hidden rounded-lg lg:block lg:absolute lg:top-50 lg:-right-30"
          src="/cms/cms-website_page_management-right-1.png"
          alt="مدیریت صفحات سایت ساز"
        />
        <motion.img
          viewport={{ once: true }}
          width={177}
          initial={{ translateX: "-25px", opacity: 0 }}
          whileInView={{ translateX: "0", opacity: 1 }}
          transition={{ delay: "0.8", duration: "0.5" }}
          className="hidden lg:block lg:absolute lg:top-80 -z-10 lg:-left-30"
          src="/cms/cms-website_page_management-svg.svg"
          alt="مدیریت صفحات سایت ساز"
        />
      </div>
    </section>
  );
}
