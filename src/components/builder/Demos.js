import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import popular1 from "@/images/cms/cms_page-homepage.png";
import Image from "next/image";

const demos = [
  {
    tab: "محبوب",
    slides: [
      {
        image: popular1,
        href: "https://demo.rsstudio.net/lagom-website-builder",
        title: "855",
      },
      {
        image: popular1,
        href: "https://demo.rsstudio.net/lagom-website-builder",
        title: "85005",
      },
    ],
  },
  {
    tab: "محصولات",
    slides: [
      {
        image: popular1,
        href: "https://demo.rsstudio.net/lagom-website-builder",
        title: "8555",
      },
    ],
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
      <div className="w-full mx-auto">
        <TabGroup>
          <TabList className="flex gap-x-4 text-center lg:max-w-3xl mx-auto mb-10">
            {demos.map(({ tab }) => (
              <Tab
                key={tab}
                className="text-lg font-medium py-2 px-3 rounded-lg text-zinc-800 data-[selected]:text-blue-700 data-[selected]:bg-blue-100 transition-colors">
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3 mx-auto max-w-[90vw]">
            {demos.map(({ tab, slides }) => (
              <TabPanel key={tab}>
                <div className="grid gap-y-12 gap-x-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-[90vw]">
                  {slides.map((slide) => (
                    <a
                      key={slide.title}
                      href={slide.href}
                      className="group flex items-center flex-col gap-y-4">
                      <Image
                        className="w-full h-full ring ring-zinc-200 shadow-sm rounded-lg group-hover:-translate-y-px group-hover:shadow-2xl transition-all"
                        src={slide.image}
                        alt={slide.title}
                      />
                      <h2 className="font-light text-lg group-hover:text-blue-600">
                        {slide.title}
                      </h2>
                    </a>
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
}
