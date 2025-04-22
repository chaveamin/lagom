import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from '@headlessui/react'

const demos = [
  {
    tab: 'محبوب',
    slides: [
      {
        image: '/cms/cms_page-homepage.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder',
        title: 'صفحه اصلی',
      },
      {
        image: '/cms/cms_page-vps_hosting-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/vps-hosting',
        title: 'سرور مجازی',
      },
      {
        image: '/cms/cms_page-dedicated_servers-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/dedicated-servers',
        title: 'سرور اختصاصی',
      },
      {
        image: '/cms/cms_page-site_builder-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/site-builder',
        title: 'سایت ساز',
      },
      {
        image: '/cms/cms_page-domain_search-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/domain-names',
        title: 'دامنه',
      },
      {
        image: '/cms/cms_page-360_monitoring-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/360-monitoring',
        title: 'مانیتورینگ وبسایت',
      },
      {
        image: '/cms/cms_page-game_servers-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/game-servers',
        title: 'سرورهای گیمینگ',
      },
      {
        image: '/cms/cms_page-game_servers-gta.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/game-servers/gta-5',
        title: 'صفحه اصلی گیم',
      },
      {
        image: '/cms/cms_page-about_us-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/about-us',
        title: 'درباره ما',
      },
    ],
  },
  {
    tab: 'محصولات',
    slides: [
      {
        image: '/cms/cms_page-shared_hosting-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/shared-hosting',
        title: 'هاست اشتراکی(لینوکس)',
      },
      {
        image: '/cms/cms_page-wordpress_hosting-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/wordpress-hosting',
        title: 'هاست وردپرس',
      },
      {
        image: '/cms/cms_page-reseller_hosting-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/reseller-hosting',
        title: 'نمایندگی هاست',
      },
      {
        image: '/cms/cms_page-cloud_hosting-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/cloud-servers',
        title: 'سرور ابری',
      },
      {
        image: '/cms/cms_page-dedicated_servers-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/dedicated-servers',
        title: 'سرور اختصاصی',
      },
      {
        image: '/cms/cms_page-domain_search-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/domain-names',
        title: 'ثبت دامنه',
      },
      {
        image: '/cms/cms_page-domain_transfer-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/domain-transfer',
        title: 'انتقال دامنه',
      },
    ],
  },
  {
    tab: 'امنیت و ابزارها',
    slides: [
      {
        image: '/cms/cms_page-website_builder-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/website-builder',
        title: 'سایت ساز',
      },
      {
        image: '/cms/cms_page-site_builder-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/site-builder',
        title: 'سایت ساز 2',
      },
      {
        image: '/cms/cms_page-ssl_certificates-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/ssl-certificates',
        title: 'گواهی SSL',
      },
      {
        image: '/cms/cms_page-website_security-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/website-security',
        title: 'امنیت وبسایت',
      },
      {
        image: '/cms/cms_page-seo_tools-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/seo-tools',
        title: 'سئو',
      },
      {
        image: '/cms/cms_page-email_services-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/email-services',
        title: 'خدمات ایمیل',
      },
      {
        image: '/cms/cms_page-360_monitoring-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/360-monitoring',
        title: 'مانیتورینگ وبسایت',
      },
    ],
  },
  {
    tab: 'سایر ',
    slides: [
      {
        image: '/cms/cms_page-about_us-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/about-us',
        title: 'درباره ما',
      },
      {
        image: '/cms/cms_page-contact_us-main.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/contact-us',
        title: 'ارتباط',
      },
      {
        image: '/cms/cms_page-terms_of_service.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/legal/terms-of-services',
        title: 'شرایط خدمات',
      },
      {
        image: '/cms/cms_page-privacy_policy.webp',
        href: 'https://demo.rsstudio.net/lagom-website-builder/legal/privacy-policy',
        title: 'قوانین',
      },
    ],
  },
]

export default function Demos() {
  return (
    <section className="mt-24 py-15">
      <div className="mx-auto mb-16 flex w-full flex-col gap-y-4 lg:max-w-3xl lg:gap-y-10">
        <h2 className="text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          راه اندازی وبسایت با یک کلیک
        </h2>
        <p className="text-justify text-xl leading-8 font-light text-zinc-500 lg:text-2xl lg:leading-10">
          سایت ساز لاگوم دارای یک کتابخانه همه کاره بیش از{' '}
          <span className="font-extrabold">40 صفحه</span> از پیش طراحی شده است
          که انواع محصولات مختلف و نیازهای وب سایت را برآورده می کند. آنها را به
          سرعت و به آسانی مطابق با نیازهای خاص خود شخصی سازی کنید.
        </p>
      </div>
      <div className="mx-auto w-full">
        <TabGroup>
          <TabList className="mx-auto mb-10 flex justify-center gap-x-4 overflow-auto text-center lg:max-w-3xl">
            {demos.map(({ tab }) => (
              <Tab
                key={tab}
                className="cursor-pointer rounded-lg px-3 py-2 text-lg font-medium whitespace-nowrap text-zinc-800 transition-colors hover:text-blue-600 data-[selected]:bg-blue-100 data-[selected]:text-blue-700 data-[selected]:focus:outline-0 lg:text-xl"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mx-auto mt-3 max-w-[85vw]">
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
                  leaveTo="opacity-0"
                >
                  <div className="mx-auto grid max-w-[90vw] grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                    {slides.map((slide) => (
                      <a
                        key={slide.title}
                        href={slide.href}
                        className="group flex flex-col items-center gap-y-4"
                      >
                        <img
                          className="max-h-80 w-full rounded-lg object-cover ring shadow-sm ring-zinc-200 transition-all group-hover:-translate-y-px group-hover:shadow-2xl"
                          src={slide.image}
                          alt={slide.title}
                        />
                        <h2 className="text-lg font-light group-hover:text-blue-600">
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
  )
}
