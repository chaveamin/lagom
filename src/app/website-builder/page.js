import Demos from "@/components/builder/Demos";
import Hero from "@/components/builder/Hero";
import Intro from "@/components/builder/Intro";
import PageManage from "@/components/builder/PageManage";

export default function page() {
  return (
    <>
      <Hero />
      <Intro />
      <Demos />
      <PageManage />
    </>
  );
}
