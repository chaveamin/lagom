import * as motion from "motion/react-client";

export default function Intro() {
  return (
    <section className="py-15 lg:max-w-3xl w-full mx-auto">
      <div className="relative *:shadow-xl *:shadow-zinc-800/5 *:ring *:ring-zinc-200 *:rounded-lg">
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: "0.3", duration: "0.6" }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          width={840}
          src="/cms/cms-center-main.png"
          alt="سایت ساز لاگوم - راه حل هاستینگ بدون دردسر"
        />
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: "0.5", duration: "0.6" }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          className="hidden lg:block absolute -right-40 top-16"
          width={224}
          src="/cms/cms-left-main.svg"
          alt="سایت ساز لاگوم - راه حل هاستینگ بدون دردسر"
        />
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: "0.9", duration: "0.4" }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          className="hidden lg:block absolute -right-10 top-60 !shadow-none !ring-0 -scale-x-100"
          width={64}
          src="/cms/mouse.svg"
          alt="سایت ساز لاگوم - راه حل هاستینگ بدون دردسر"
        />
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: "1", duration: "0.6" }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          className="hidden lg:block absolute -left-40 top-90"
          width={366}
          src="/cms/cms-right-main.svg"
          alt="سایت ساز لاگوم - راه حل هاستینگ بدون دردسر"
        />
      </div>
    </section>
  );
}
