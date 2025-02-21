import Demos from "@/components/builder/Demos";
import Features from "@/components/builder/Features";
import Graphics from "@/components/builder/Graphics";
import Hero from "@/components/builder/Hero";
import Intro from "@/components/builder/Intro";
import PageManage from "@/components/builder/PageManage";
import Pricing from "@/components/builder/Pricing";
import SectionType from "@/components/builder/SectionType";
import Sitemap from "@/components/builder/Sitemap";
import Styles from "@/components/builder/Styles";

export const metadata = {
  title: "سایت ساز لاگوم",
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

export default function page() {
  return (
    <>
      <Hero />
      <Intro />
      <Demos />
      <PageManage />
      <Sitemap />
      <Styles />
      <SectionType />
      <Features />
      <Graphics />
      <Pricing />
    </>
  );
}
