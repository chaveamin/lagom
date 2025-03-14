const usecases = [
  {
    type: 'اعلان تبلیغ',
    items: [
      {
        title: 'تغییر در دوره صورتحساب محصول',
        description:
          'پیشنهاد ارتقای چرخه صورتحساب محصول، فقط برای مشتریانی که محصولات انتخابی را خریداری کرده‌اند.',
      },
      {
        title: 'تخفیف ارتقای محصول',
        description:
          'با ارائه تخفیف، مشتریان را تشویق کنید تا محصولات خود را به پلن های بالاتر ارتقا دهند.',
      },
      {
        title: 'فروش متقابل محصول',
        description:
          'مشتریان را به خرید محصولات یا خدمات اضافی بر اساس محصولی که در حساب آنها موجود است تشویق کنید.',
      },
      {
        title: 'فروش برنامه ریزی شده یا جاری',
        description:
          'نمایش اعلان در مورد فروش های برنامه ریزی شده یا جاری، به عنوان مثال: پیشنهاد ویژه جمعه سیاه، تخفیفات نوروزی، تخفیفات تابستانی و غیره.',
      },
    ],
  },
  {
    type: 'اعلان بر اساس صفحه',
    items: [
      {
        title: 'اطلاعیه بخش پشتیبانی',
        description:
          'بر اساس بخش پشتیبانی انتخاب شده، اعلان را برای مشتریان فعلی یا جدید که سعی در تماس با شما دارند، نمایش دهید.',
      },
      {
        title: 'اعلان گروه محصول',
        description:
          'نمایش اعلان بر اساس صفحه گروه محصول، این می تواند تبلیغ جدید یا اطلاعاتی در مورد در دسترس بودن سرور باشد.',
      },
      {
        title: 'اعلان ورود/ثبت نام',
        description:
          'نمایش اعلان مهم برای مشتریانی که وارد سیستم نشده اند، که در تلاش برای ورود یا ثبت نام به ناحیه کاربری سایت هستند.',
      },
      {
        title: 'اعلان در ناحیه کاربری یا فرآیند سفارش',
        description:
          'نمایش اعلان‌های متفاوت در صفحات ناحیه کاربری و در طول فرآیند سفارش، برای مشتریان فعلی یا مهمان.',
      },
    ],
  },
  {
    type: 'اطلاعیه تعمیر و نگهداری',
    items: [
      {
        title: 'تعمیر و نگهداری سایت',
        description:
          'نمایش اعلان در مورد تعمیر و نگهداری وب سایت، بنابراین مشتری شما می تواند اقدامات لازم را زودتر انجام دهد.',
      },
      {
        title: 'اعلان لوکیشن سرور',
        description:
          'مشتریان را در مورد تعمیر و نگهداری برنامه ریزی شده خدمات یا محصولات واقع در لوکیشن انتخاب شده مطلع کنید.',
      },
      {
        title: 'اعلان نوع محصول',
        description:
          'نمایش اعلان تعمیر و نگهداری فقط برای مشتریانی که محصول خاصی را به حساب خود اختصاص داده اند.',
      },
      {
        title: 'اعلان مشکلات رایج',
        description:
          'مشتریان را در مورد مشکلات رایج سرور یا سیستم خود مطلع کنید. با استفاده از چنین اعلان‌هایی، تعداد تیکت های پشتیبانی ایجاد شده توسط مشتریان خود را کاهش می‌دهید.',
      },
    ],
  },
]

export default function UseCase() {
  return (
    <section className="rounded-lg bg-zinc-100 px-12 py-22">
      <div className="mx-auto flex w-full flex-col gap-y-4 lg:max-w-5xl lg:gap-y-10">
        <h2 className="text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          نمونه موارد استفاده
        </h2>
        <p className="text-justify text-xl leading-8 font-light text-zinc-500 lg:text-2xl lg:leading-10">
          با گزینه‌های مدیریتی متوع، این افزونه گزینه‌های استفاده نامحدودی را در
          اختیار شما قرار می‌دهد که تنها تعداد کمی از آنها در زیر فهرست شده‌اند.
        </p>
      </div>
      <div className="mx-auto max-w-7xl">
        {usecases.map((section, index) => (
          <div className="mt-18" key={index}>
            <h2 className="mb-6 text-3xl font-bold text-zinc-800">
              {section.type}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-md bg-white p-4 ring shadow-sm shadow-zinc-800/6 ring-zinc-200"
                >
                  <h3 className="mb-4 text-lg font-semibold">{item.title}</h3>
                  <p className="font-light text-zinc-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
