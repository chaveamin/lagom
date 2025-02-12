"use client";

import { motion } from "motion/react";

export default function ClientDashboard() {
  return (
    <section className="pb-15 relative">
      <div className="relative w-full lg:max-w-3xl mx-auto">
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: "0.5" }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          className="ring-2 ring-blue-500/50 shadow-3xl rounded-lg"
          src="client-dashboard.png"
          alt="ناحیه کاربری لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={350}
          transition={{ delay: "0.3" }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          className="ring-2 ring-blue-500/50 shadow-3xl hidden rounded-lg lg:block lg:absolute lg:top-24 lg:-right-30"
          src="client-dashboard-left.png"
          alt="ناحیه کاربری لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={245}
          transition={{ delay: "0.7" }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          className="ring-2 ring-blue-500/50 shadow-3xl hidden rounded-lg lg:block lg:absolute lg:top-70 lg:-left-30"
          src="client-dashboard-right.png"
          alt="ناحیه کاربری لاگوم"
        />
      </div>
    </section>
  );
}
