import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const faqs = [
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
              className="origin-top mt-4 leading-8 text-base text-zinc-600 font-light transition-all duration-400 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
              {faq.a}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
