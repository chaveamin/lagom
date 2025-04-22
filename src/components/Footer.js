import lagom from '@/images/lagom.svg'
import Image from 'next/image'

const navigation = {
  products: [
    { name: 'قالب ناحیه کاربری', href: '#' },
    { name: 'سایت ساز', href: '#' },
    { name: 'فرم سفارش یک مرحله ای', href: '#' },
  ],
  extensions: [
    {
      name: 'بنر تبلیغات',
      href: 'https://designesia.ir/downloads/lagom-promotion-manager/',
    },
    {
      name: 'قالب ایمیل',
      href: 'https://designesia.ir/downloads/lagom-email-template/',
    },
    {
      name: 'اعلان مشتری',
      href: 'https://designesia.ir/downloads/lagom-client-notifications/',
    },
    {
      name: 'ساعات کاری',
      href: 'https://designesia.ir/downloads/lagom-support-hours/',
    },
    {
      name: 'کد سفارشی',
      href: 'https://designesia.ir/downloads/lagom-custom-code/',
    },
  ],
  resources: [
    { name: 'وبلاگ', href: '#' },
    { name: 'سایت های قدرت گرفته', href: '#' },
    { name: 'پشتیبانی', href: 'https://t.me/sicktoy' },
    { name: 'راهنما', href: 'https://docs-eta-amber.vercel.app/' },
    {
      name: 'ناحیه کاربری',
      href: 'https://designesia.ir/account/?tab=dashboard',
    },
  ],
  social: [
    {
      name: 'Telegram',
      href: 'https://t.me/sicktoy',
      icon: (props) => (
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
          {...props}
        >
          <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
        </svg>
      ),
    },
    {
      name: 'whatsapp',
      href: 'https://wa.me/message/4OBTW5FOZSP5L1',
      icon: (props) => (
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          {...props}
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/chaveamin',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
      <h2 id="footer-heading" className="sr-only">
        فوتر
      </h2>
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image alt="لاگوم" src={lagom} className="h-auto w-24" />
            <p className="text-base font-light text-zinc-600">
              لاگوم پکیج حرفه ای قالب ها و ابزارهای WHMCS که برای ارتقای کسب و
              کار هاستینگ شما طراحی شده اند و تجربه کاربری یکپارچه و حرفه ای را
              ارائه می دهند.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  target="_blank"
                  key={item.name}
                  href={item.href}
                  className="text-zinc-400 transition-colors hover:text-blue-600"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900">محصولات</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base font-light text-zinc-500 transition-colors hover:text-blue-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-xl font-semibold text-zinc-900">
                  افزونه ها
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.extensions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base font-light text-zinc-500 transition-colors hover:text-blue-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900">منابع</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base font-light text-zinc-500 transition-colors hover:text-blue-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-zinc-900/10 pt-8 sm:mt-20 lg:mt-18">
          <p className="text-base text-zinc-500">
            طراحی،‌توسعه و پشتیبانی توسط{' '}
            <a
              className="text-blue-500"
              href="https://designesia.ir/"
              target="_blank"
            >
              امین چاوه پور
            </a>
            💙
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
