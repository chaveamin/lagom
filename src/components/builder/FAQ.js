import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const faqs = [
  {
    q: "سایت ساز لاگوم چیست؟",
    a: "سایت ساز لاگوم به عنوان یک افزونه برای قالب ناحیه لاگوم عمل میکند و قابلیت های آن را به طور قابل توجهی افزایش میدهد. پس از فعال‌سازی، مجموعه‌ای از ویژگی‌های اضافی را در قالب لاگوم باز میکند و به شما این امکان را میدهد که صفحات وبسایت را مستقیماً در سیستم WHMCS خود بسازید و مدیریت کنید، با عملکرد مشابه سیستم‌های CMS محبوب مانند: وردپرس، جوملا، دروپال و غیره.\nاین ادغام یک تجربه منسجم بین ناحیه کاربری ، فرآیند سفارش و وبسایت شما فراهم میکند. تمام اطلاعات مربوط به محصولات شما، از جمله توضیحات، عناوین، قیمت و در دسترس بودن، به طور خودکار از دیتابیس WHMCS تهیه میشود. این امر نیاز به بروز رسانی اطلاعات در مکان های مختلف از بین میبرد و اطمینان حاصل میکند که همه چیز هماهنگ باقی میماند.\n\nعلاوه بر این، تمام ویژگی‌ های موجود در قالب لاگوم کاملاً با سایت ساز لاگوم سازگار است. این بدان معناست که میتوانید به آسانی رنگ ‌های وبسایت خود را با استفاده از پنل قالب شخصی سازی کنید، منو و پاورقی اصلی خود را با استفاده از مدیریت منو ایجاد کنید و حتی تمام صفحات خود را از طریق افزونه به زبان‌ های مختلف ترجمه کنید.\n\nبا استفاده از این ترکیب قدرتمند، ابزارهایی را در اختیار دارید تا در عین سادگی مدیریت داده خود، یک حضور آنلاین یکپارچه، از نظر بصری جذاب و چند زبانه ایجاد کنید.\nایجاد وب‌سایت‌هایی که محصولات دانلودی را ارائه میدهند: چه محصولات دیجیتال، نرم‌افزار یا محتوای قابل دانلود بفروشید،لاگوم  راه‌اندازی یک فروشگاه آنلاین یا پلتفرم را برای ارائه محصولات دانلودی را به مخاطبانتان آسان میکند.\n",
  },
  {
    q: "موارد استفاده از سایت ساز لاگوم چیست؟",
    a: "سایت ساز لاگوم یک راه حل همه کاره است که نیازهای مختلف کسب و کار را برآورده میکند. در اینجا چند مورد استفاده رایج برای این محصول آورده شده است:\n\n1. ساخت وب سایت هاستینگ: سایت ساز لاگوم شما را قادر میسازد تا وب سایت هاستینگ خود را به آسانی ایجاد و مدیریت کنید. میتوانید پلن ها، خدمات و ویژگی‌ های میزبانی خود را به نمایش بگذارید و در عین حال تجربه یک خرید عالی را برای مشتریان خود فراهم کنید.\n2. ساخت وب ‌سایت‌هایی که محصولات دانلودی را ارائه میدهند: چه محصولات دیجیتال، نرم‌افزار یا محتوای قابل دانلود بفروشید،لاگوم  راه‌اندازی یک فروشگاه آنلاین یا پلتفرم را برای ارائه محصولات دانلودی را به مخاطبانتان آسان میکند.\n3. وبسایت های ارائه دهنده سرورهای گیمینگ: گیمرها و ارائه دهندگان سرور میتوانند با ایجاد وب سایت های سرور باز، از لاگوم بهره مند شوند. شما میتوانید مشخصات سرور بازی، قیمت و گزینه های سفارشی سازی را برای جذب بازیکنان و کاربران سرور برجسته کنید.\n4. ساخت وب سایت ارائه دهنده دامنه: لاگوم به شما امکان میدهد وب سایت های ثبت دامنه ایجاد کنید. شما میتوانید خدمات جستجو، ثبت و انتقال دامنه را ارائه دهید و در عین حال وب سایت را مطابق با برند خود شخصی سازی کنید.\n\nبه طور خلاصه، سایت ساز لاگوم یک ابزار همه کاره مناسب برای طیف وسیعی از مشاغل است، از ارائه دهندگان هاست گرفته تا فروشندگان محصولات دانلودی، میزبان سرورهای بازی و ثبت دامنه. انعطاف‌پذیری و ویژگی‌های کاربرپسند آن به شما امکان میدهد تا وب‌سایت‌هایی متناسب با صنعت و مخاطبان خاص خود بسازید.",
  },
  {
    q: "آیا میتوانم از این محصول بدون قالب لاگوم استفاده کنم؟",
    a: "خیر، سایت ساز لاگوم برای عملکرد صحیح به قالب لاگوم نیاز دارد.\n\nسایت ساز لاگوم به عنوان یک افزونه اختصاصی طراحی شده است تا با قالب لاگوم کار کند. این دو محصول مکمل یکدیگر هستند و به شما این امکان را میدهند که وبسایت خود را در سیستم WHMCS ایجاد، مدیریت و شخصی سازی کنید و در عین حال یک تجربه کاربری سازگار و یکپارچه را ارائه دهید.\n\nبرای استفاده از سایت ساز لاگوم، باید قالب لاگوم را روی سرور خود نصب و فعال کنید. این ادغام تضمین میکند که میتوانید از پتانسیل کامل هر دو محصول برای ارتقای کسب ‌و کار مبتنی بر هاستینگ خود، از جمله ساخت وب‌ سایت، بهبود ناحیه کاربری و موارد دیگر، استفاده کنید.\n\nبه طور خلاصه، سایت ساز لاگوم به قالب لاگوم برای عملکرد اصلی و ادغام یکپارچه در WHMCS متکی است. بنابراین، داشتن قالب لاگوم برای استفاده موثر از این محصول ضروری است.",
  },
  {
    q: "آیا میتوانم از این محصول بدون WHMCS استفاده کنم؟",
    a: "خیر، سایت ساز لاگوم به طور اختصاصی برای کار در ارتباط با سیستم WHMCS طراحی شده است.",
  },
  {
    q: "فایل های قالب کد گذاری شده اند؟",
    a: "بله، همه فایل های قالب اینکود شده هستند و نمیتوان مستقیم آنها را ویرایش کرد",
  },
  {
    q: "این که لایسنس مادام العمر است یعنی چه؟",
    a: "پس از خرید محصول، حتی اگر فاکتور تمدید 6 ماهه پرداخت نشود، قالب مادام العمر فعال باقی می ماند.",
  },
  {
    q: "قالب لایسنس گذاری شده است؟",
    a: "بله، ولی لایسنس به صورت سیستمی هست یعنی فقط با کد لایسنسی که در اختیار شما قرار میگیره فعال میشود و در بینهایت دامنه میتونید استفاده کنید",
  },
  {
    q: "نسخه آزمایشی برای تست قالب ارائه میدهید؟",
    a: "خیر، نسخه تست ارائه نمیشود. درعوض، محصول دارای ضمانت بازگشت وجه 14 روزه برای همه خریدها است. این بدان معناست که شما میتوانید محصول را خریداری کرده و آن را به طور کامل تست کنید و اگر به هر دلیلی در 14 روز اول راضی نبودید، میتوانید درخواست بازگشت وجه کنید. این رویکرد به شما این شانس را می دهد که محصول را در یک محیط واقعی ارزیابی کنید و اطمینان حاصل کنید که نیازهای شما را برآورده میکند. برای دریافت نسخه آزمایشی از طریق راه های ارتباطی موجود در سایت تماس بگیرید.",
  },
];

export default function FAQ() {
  return (
    <section className="py-22">
      <h2 className="lg:text-5xl max-w-5xl mx-auto mb-16 text-3xl leading-14 font-black text-zinc-800">
        سوالات متداول
      </h2>
      <div className="mx-auto w-full max-w-5xl divide-y divide-zinc-800/5 rounded-xl bg-zinc-50 ring ring-zinc-200">
        {faqs.map((faq) => (
          <Disclosure key={faq.q} as="div" className="p-6">
            <DisclosureButton className="group cursor-pointer flex w-full items-center justify-between">
              <span className="text-xl font-light text-zinc-800 group-data-[hover]:text-blue-600 transition duration-400 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                {faq.q}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 stroke-zinc-800/60 group-data-[hover]:stroke-zinc-800/50 group-data-[open]:rotate-180 transition-transform duration-400">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </DisclosureButton>
            <DisclosurePanel
              transition
              className="origin-top whitespace-pre-line mt-4 leading-8 text-base text-zinc-600 font-semibild transition-all duration-400 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
              {faq.a}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
