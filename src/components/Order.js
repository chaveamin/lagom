import * as motion from "motion/react-client";

export default function Order() {
  return (
    <section className="py-22">
      <div className="w-full lg:max-w-5xl mx-auto flex flex-col lg:gap-y-10 gap-y-4">
        <h2 className="lg:text-5xl text-3xl leading-14 font-black text-zinc-800">
          قالب فرم سفارش
        </h2>
        <p className="lg:text-2xl text-xl lg:leading-10 text-justify leading-8 font-light text-zinc-600">
          قالب فرم سفارش جذاب، ساده و بصری، که بطور کامل با قالب ناحیه کاربری
          لاگوم سازگار شده است.
        </p>
      </div>
      <div className="relative w-full  mt-20 lg:max-w-3xl mx-auto">
        <motion.img
          viewport={{ once: true }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.5" }}
          className="ring-2 ring-blue-500/50 shadow-3xl rounded-lg"
          src="/illustration-order-process.png"
          alt="فرم سفارش لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={140}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.3" }}
          className="ring-2 ring-blue-500/50 shadow-3xl hidden rounded-lg lg:block lg:absolute lg:top-80 lg:-left-30"
          src="/illustration-order-process-right.png"
          alt="فرم سفارش لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={140}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.3" }}
          className="ring-2 ring-blue-500/50 shadow-3xl hidden rounded-lg lg:block lg:absolute lg:top-40 lg:-left-30"
          src="/illustration-order-process-right-1.png"
          alt="فرم سفارش لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={350}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          transition={{ delay: "0.3" }}
          className="ring-2 ring-blue-500/50 shadow-3xl hidden rounded-lg lg:block lg:absolute lg:top-20 lg:-right-30"
          src="/client-dashboard-left.png"
          alt="فرم سفارش لاگوم"
        />
      </div>
    </section>
  );
}
