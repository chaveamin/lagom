"use client";

import { motion } from "motion/react";

const transition = {
  duration: 0.9,
  delay: 0.3,
  ease: [0.16, 1, 0.3, 1],
};
const transition_l = {
  duration: 0.9,
  delay: 0.5,
  ease: [0.16, 1, 0.3, 1],
};
const transition_r = {
  duration: 0.9,
  delay: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

export default function ClientDashboard() {
  return (
    <section className="py-15 relative">
      <div className="relative w-full lg:max-w-3xl mx-auto">
        <motion.img
          viewport={{ once: true }}
          transition={transition}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          className="shadow-4xl rounded-lg"
          src="client-dashboard.png"
          alt="ناحیه کاربری لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={350}
          transition={transition_l}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          className="shadow-4xl rounded-lg absolute top-24 -left-30"
          src="client-dashboard-left.png"
          alt="ناحیه کاربری لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={245}
          transition={transition_r}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          className="shadow-4xl rounded-lg absolute top-70 -right-30"
          src="client-dashboard-right.png"
          alt="ناحیه کاربری لاگوم"
        />
      </div>
    </section>
  );
}
