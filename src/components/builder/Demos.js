import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import popular1 from "@/images/cms/cms_page-homepage.png";
import Image from "next/image";

const demos = [
  {
    tab: "محبوب",
    image: popular1,
    href: "https://demo.rsstudio.net/lagom-website-builder",
    title: "صفdحه fاصلی",
  },
  {
    tabName: "محصولات",
    image: popular1,
    href: "https://demo.rsstudio.net/lagom-website-builder",
    title: "صفحه dاصلی",
  },
  {
    tabName: "گیمینگ",
    image: popular1,
    href: "https://demo.rsstudio.net/lagom-website-builder",
    title: "صفحه ddاصلی",
  },
  {
    tabName: "امنیت و ابزارها",
    image: popular1,
    href: "https://demo.rsstudio.net/lagom-website-builder",
    title: "صفحه fاصلی",
  },
  {
    tabName: "سایر",
    image: popular1,
    href: "https://demo.rsstudio.net/lagom-website-builder",
    title: "صفحه ",
  },
];

export default function Demos() {
  return (
    <section className="py-15 mt-24">
      <div className="w-full flex flex-col lg:max-w-3xl mx-auto lg:gap-y-10 gap-y-4 mb-16">
        <h2 className="lg:text-5xl text-3xl leading-14 font-black text-zinc-800">
          راه اندازی وبسایت با یک کلیک
        </h2>
        <p className="lg:text-2xl text-xl lg:leading-10 text-justify leading-8 font-light text-zinc-600">
          سایت ساز لاگوم دارای یک کتابخانه همه کاره بیش از{" "}
          <span className="font-extrabold">40 صفحه</span> از پیش طراحی شده است
          که انواع محصولات مختلف و نیازهای وب سایت را برآورده می کند. آنها را به
          سرعت و به آسانی مطابق با نیازهای خاص خود شخصی سازی کنید.
        </p>
      </div>
      <div className="grid gap-y-12 gap-x-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-[90vw]">
        <TabGroup>
          <TabList className="">
            {demos.map(({ tabName }) => (
              <Tab
                key={tabName}
                className="lg:text-lg text-base whitespace-nowrap cursor-pointer focus:outline-0 border-r border-zinc-200 text-center font-bold w-full text-zinc-500 hover:text-zinc-700 group p-3 hover:bg-gray-50 transition-colors
              data-[selected]:text-blue-600 data-[selected]:border-b-2 data-[selected]:border-b-blue-600">
                {tabName}
              </Tab>
            ))}
          </TabList>
          <div>
            <TabPanels className="mt-3">
              {demos.map((d) => (
                <a
                  key={d.title}
                  href={d.href}
                  className="group flex items-center flex-col gap-y-4">
                  <Image
                    className="w-full h-full ring ring-zinc-200 shadow-sm rounded-lg group-hover:-translate-y-px group-hover:shadow-2xl transition-all"
                    src={d.image}
                    alt={d.title}
                  />
                  <h2 className="font-light text-lg group-hover:text-blue-600">
                    {d.title}
                  </h2>
                </a>
              ))}
            </TabPanels>
          </div>
        </TabGroup>
      </div>
    </section>
  );
}
