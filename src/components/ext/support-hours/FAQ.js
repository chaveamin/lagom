import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

const faqs = [
  {
    q: 'چگونه می توانم از افزونه ساعات پشتیبانی استفاده کنم؟',
    a: 'افزونه ساعات پشتیبانی را به طور کامل با قالب لاگوم ادغام کنید تا تجربه پشتیبانی مشتری خود را ارتقا دهید. این ترکیب قدرتمند در دسترس بودن بخش های پشتیبان را همزمان ارائه می دهد و به مشتریان امکان می دهد به راحتی تشخیص دهند که چه زمانی پشتیبانی در دسترس یا آفلاین است.\nتعطیلات را به آسانی در افزونه پیکربندی کنید تا مشتریان را از در دسترس نبودن بخش در روز های خاص مطلع کنید. این امر ارتباطات شفاف را تضمین می کند و انتظارات روشنی را برای مشتریان شما ایجاد می کند.\nافزونه ساعات پشتیبانی، هنگامی که با قالب لاگوم ترکیب می شود، رضایت مشتری را به طور قابل توجهی بهبود می بخشد. ارائه اطلاعات همزمان در مورد در دسترس بودن بخش های پشتیبانی اعتماد را تقویت می کند و انتظارات را به طور موثر مدیریت می کند و در نهایت یک تجربه کاربری استثنایی را ارائه می دهد. استراتژی پشتیبانی مشتری خود را همین امروز ارتقا دهید.',
  },
  {
    q: 'آیا می توانم تعطیلات را پیکربندی کنم؟',
    a: 'بله، افزونه ساعات پشتیبانی شامل یک قابلیت اختصاصی تعطیلات است که به شما این امکان را می دهد تا تعطیلات را به آسانی پیکربندی و مدیریت کنید. این ویژگی شما را قادر می‌سازد تا دوره‌هایی را مشخص کنید که در طی آن بخش‌های پشتیبانی موقتاً در دسترس نباشند، و از نمایش دقیق در دسترس بودن پشتیبانی برای مشتریانتان اطمینان حاصل کنید. با خیال راحت برنامه های تعطیلات خود را سفارشی کنید تا با نیازهای منحصر به فرد کسب و کار خود مطابقت داشته باشد و ارتباط شفاف با مشتریان خود را فراهم کنید.',
  },
  {
    q: 'آیا می توانم ساعات در دسترس بودن متفاوتی را به بخش های مختلف اختصاص دهم؟',
    a: 'بله، افزونه ساعات پشتیبانی، انعطاف پذیری را برای اختصاص ساعات در دسترس بودن متمایز به بخش های مختلف ارائه می دهد. این بدان معنی است که می توانید ساعات پشتیبانی را برای هر بخش به طور مستقل تنظیم کنید، مناطق زمانی مختلف یا الزامات عملیاتی خاص را در نظر بگیرید. در دسترس بودن هر بخش را سفارشی کنید تا با نیازهای کسب و کار شما هماهنگ باشد و پوشش پشتیبانی بهینه را در تیم های مختلف ارائه دهید.',
  },
  {
    q: 'آیا میتوانم از این افزونه بدون قالب لاگوم استفاده کنم؟',
    a: 'خیر. همه افزونه های لاگوم نیاز به نصب و فعال سازی قالب لاگوم روی سرور شما دارند. این افزونه ها با هیچ قالب دیگری کار نمیکنند.',
  },
  {
    q: 'فایل های افزونه کد گذاری شده اند؟',
    a: 'بله، همه فایل های افزونه اینکود شده هستند و نمیتوان مستقیم آنها را ویرایش کرد',
  },
  {
    q: 'این که لایسنس مادام العمر است یعنی چه؟',
    a: 'پس از خرید محصول، حتی اگر فاکتور تمدید 1 ساله پرداخت نشود، قالب مادام العمر فعال باقی می ماند.',
  },
  {
    q: 'قالب لایسنس گذاری شده است؟',
    a: 'بله، ولی لایسنس به صورت سیستمی هست یعنی فقط با کد لایسنسی که در اختیار شما قرار میگیره فعال میشود و در بینهایت دامنه میتونید استفاده کنید',
  },
  {
    q: 'نسخه آزمایشی برای تست ارائه میدهید؟',
    a: 'خیر، نسخه تست ارائه نمیشود. درعوض، محصول دارای ضمانت بازگشت وجه 14 روزه برای همه خریداران است. این بدان معناست که شما میتوانید محصول را خریداری کرده و آن را به طور کامل تست کنید و اگر به هر دلیلی در 14 روز اول راضی نبودید، میتوانید درخواست بازگشت وجه کنید. این رویکرد به شما این شانس را می دهد که محصول را در یک محیط واقعی ارزیابی کنید و اطمینان حاصل کنید که نیازهای شما را برآورده میکند. برای دریافت نسخه آزمایشی از طریق راه های ارتباطی موجود در سایت تماس بگیرید.',
  },
]

export default function FAQ() {
  return (
    <section className="py-22">
      <h2 className="mx-auto mb-16 max-w-5xl text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
        سوالات متداول
      </h2>
      <div className="mx-auto w-full max-w-5xl divide-y divide-zinc-800/5 rounded-xl bg-zinc-50 ring ring-zinc-200">
        {faqs.map((faq) => (
          <Disclosure key={faq.q} as="div" className="p-6">
            <DisclosureButton className="group flex w-full cursor-pointer items-center justify-between">
              <span className="text-xl font-light text-zinc-800 transition duration-400 ease-out group-data-[hover]:text-blue-600 data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                {faq.q}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 stroke-zinc-800/60 transition-transform duration-400 group-data-[hover]:stroke-zinc-800/50 group-data-[open]:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </DisclosureButton>
            <DisclosurePanel
              transition
              className="font-semibild mt-4 origin-top text-base leading-8 whitespace-pre-line text-zinc-600 transition-all duration-400 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
            >
              {faq.a}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </section>
  )
}
