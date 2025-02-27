export const metadata = {
  title: "افزونه بنر تبلیغات برای قالب ناحیه کاربری WHMCS لاگوم",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

import CTA from "@/components/CTA";
import FAQ from "@/components/promoton-manager/FAQ";
import Hero from "@/components/promoton-manager/Hero";
import Intro from "@/components/promoton-manager/Intro";
import Pricing from "@/components/promoton-manager/Pricing";
import Steps from "@/components/promoton-manager/Steps";

export default function page() {
  return (
    <>
      <Hero />
      <Intro />
      <Steps />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
