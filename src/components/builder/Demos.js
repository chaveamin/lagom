import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";
import Image from "next/image";

const demos = [
  {
    tab: "محبوب",
    slides: [
      {
        image: "/cms/cms_page-homepage.png",
        href: "https://demo.rsstudio.net/lagom-website-builder",
        title: "صفحه اصلی",
      },
      {
        image: "/cms/cms_page-vps_hosting-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/vps-hosting",
        title: "سرور مجازی",
      },
      {
        image: "/cms/cms_page-dedicated_servers-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/dedicated-servers",
        title: "سرور اختصاصی",
      },
      {
        image: "/cms/cms_page-site_builder-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/site-builder",
        title: "سایت ساز",
      },
      {
        image: "/cms/cms_page-domain_search-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/domain-names",
        title: "دامنه",
      },
      {
        image: "/cms/cms_page-360_monitoring-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/360-monitoring",
        title: "مانیتورینگ وبسایت",
      },
      {
        image: "/cms/cms_page-game_servers-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/game-servers",
        title: "سرورهای گیمینگ",
      },
      {
        image: "/cms/cms_page-game_servers-gta.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/game-servers/gta-5",
        title: "صفحه اصلی گیم",
      },
      {
        image: "/cms/cms_page-about_us-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/about-us",
        title: "درباره ما",
      },
    ],
  },
  {
    tab: "محصولات",
    slides: [
      {
        image: "/cms/cms_page-shared_hosting-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/shared-hosting",
        title: "هاست اشتراکی(لینوکس)",
      },
      {
        image: "/cms/cms_page-wordpress_hosting-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/wordpress-hosting",
        title: "هاست وردپرس",
      },
      {
        image: "/cms/cms_page-reseller_hosting-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/reseller-hosting",
        title: "نمایندگی هاست",
      },
      {
        image: "/cms/cms_page-cloud_hosting-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/cloud-servers",
        title: "سرور ابری",
      },
      {
        image: "/cms/cms_page-dedicated_servers-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/dedicated-servers",
        title: "سرور اختصاصی",
      },
      {
        image: "/cms/cms_page-domain_search-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/domain-names",
        title: "ثبت دامنه",
      },
      {
        image: "/cms/cms_page-domain_transfer-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/domain-transfer",
        title: "انتقال دامنه",
      },
    ],
  },
  {
    tab: "امنیت و ابزارها",
    slides: [
      {
        image: "/cms/cms_page-website_builder-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/website-builder",
        title: "سایت ساز",
      },
      {
        image: "/cms/cms_page-wordpress_hosting-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/wordpress-hosting",
        title: "هاست وردپرس",
      },
      {
        image: "/cms/cms_page-reseller_hosting-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/reseller-hosting",
        title: "نمایندگی هاست",
      },
      {
        image: "/cms/cms_page-cloud_hosting-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/cloud-servers",
        title: "سرور ابری",
      },
      {
        image: "/cms/cms_page-dedicated_servers-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/dedicated-servers",
        title: "سرور اختصاصی",
      },
      {
        image: "/cms/cms_page-domain_search-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/domain-names",
        title: "ثبت دامنه",
      },
      {
        image: "/cms/cms_page-domain_transfer-main.png",
        href: "https://demo.rsstudio.net/lagom-website-builder/domain-transfer",
        title: "انتقال دامنه",
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
                className="text-xl cursor-pointer hover:text-blue-600 font-medium py-2 px-3 rounded-lg text-zinc-800 data-[selected]:text-blue-700 data-[selected]:bg-blue-100 data-[selected]:focus:outline-0 transition-colors">
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3 mx-auto max-w-[85vw]">
            {demos.map(({ tab, slides }) => (
              <TabPanel key={tab}>
                <Transition
                  appear
                  show
                  enter="transition-opacity duration-800"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-800"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <div className="grid gap-y-12 gap-x-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-[90vw]">
                    {slides.map((slide) => (
                      <a
                        key={slide.title}
                        href={slide.href}
                        className="group flex items-center flex-col gap-y-4">
                        <Image
                          width={1000}
                          height={1000}
                          className="w-full object-cover max-h-80 ring ring-zinc-200 shadow-sm rounded-lg group-hover:-translate-y-px group-hover:shadow-2xl transition-all"
                          src={slide.image}
                          alt={slide.title}
                        />
                        <h2 className="font-light text-lg group-hover:text-blue-600">
                          {slide.title}
                        </h2>
                      </a>
                    ))}
                  </div>
                </Transition>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
}
