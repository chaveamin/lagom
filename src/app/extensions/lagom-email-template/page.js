import Hero from "@/components/ext/email-template/Hero";
import Intro from "@/components/ext/email-template/Intro";

export const metadata = {
  title: "افزونه قالب ایمیل برای قالب ناحیه کاربری لاگوم",
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
    </>
  );
}
