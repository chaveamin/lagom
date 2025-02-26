"use client";

import { motion, useAnimation } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ProgressBar() {
  const controls = useAnimation();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    controls.start({
      width: "100%",
    });

    const timer = setTimeout(() => {
      controls.start({
        opacity: 0,
      });
    }, 500);

    const resetTimer = setTimeout(() => {
      controls.set({ width: "0%", opacity: 1 });
    }, 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(resetTimer);
    };
  }, [pathname, searchParams, controls]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-blue-600 z-50"
      initial={{ opacity: 1 }}
      animate={controls}>
      <motion.div
        className="h-full bg-blue-500"
        initial={{ width: "0%" }}
        animate={{ width: controls.width }}
      />
    </motion.div>
  );
}
