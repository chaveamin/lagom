import clsx from 'clsx'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import Link from 'next/link'

const NavMenus = [
  {
    name: 'قالب ناحیه کاربری',
    description:
      'ناحیه کاربری WHMCS و قالب فرم سفارش، حاوی طرح‌بندی‌ها و سبک‌های متعدد.',
    href: '/',
    icon: '/client-theme.svg',
  },
  {
    name: 'سایت ساز',
    description:
      'سایت ساز WHMCS پیشرفته، با چندین صفحه و بخش از پیش تعریف شده.',
    href: '/website-builder',
    icon: '/websitebuilder.svg',
  },
  {
    name: 'فرم سفارش یک مرحله ای',
    description: 'به زودی...',
    href: '/',
    icon: '/onestep.svg',
  },
]

function Bars3Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
      />
    </svg>
  )
}
function XMarkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  )
}
function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 flex-none transition-transform group-data-[open]:rotate-180"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}

function Nav({ isScrolled, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header
      className={clsx(
        'sticky z-10 rounded-xl bg-white/90 ring shadow-sm shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition-all',
        isScrolled ? 'ring-1 lg:top-5' : 'lg:top-10',
      )}
    >
      <nav aria-label="Global" className="flex p-6">
        <div className="flex flex-1">
          <Link href="/">
            <span className="sr-only">لاگوم</span>
            <img className="h-10 w-auto" src="/lagom.svg" alt="لاگوم" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700"
          >
            <span className="sr-only">باز کردن منو</span>
            <Bars3Icon aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:items-center lg:justify-end lg:gap-x-12">
          <Popover>
            <PopoverButton className="flex cursor-pointer items-center gap-x-1 text-lg font-semibold text-zinc-800 transition-colors hover:text-blue-500 focus:outline-0">
              محصولات
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-20 -z-10 rounded-b-xl bg-white pt-14 ring-1 shadow-sm shadow-zinc-800/5 ring-zinc-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in"
            >
              <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                {NavMenus.map((item) => (
                  <div
                    key={item.name}
                    className="group relative rounded-lg p-6 text-sm leading-6 transition-colors hover:bg-blue-50"
                  >
                    <div className="flex h-22 w-22 items-center justify-center rounded-lg bg-zinc-50 group-hover:bg-white">
                      <img alt={item.name} src={item.icon} />
                    </div>
                    <PopoverButton
                      as={Link}
                      onClick={() => setMobileMenuOpen(false)}
                      href={item.href}
                      className="mt-6 block text-lg font-bold text-zinc-800 transition-colors group-hover:text-blue-600"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </PopoverButton>
                    <p className="mt-1 text-base text-zinc-500 group-hover:text-blue-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link
            href="/extensions"
            className="cursor-pointer text-lg font-semibold text-zinc-800 transition-colors hover:text-blue-500"
          >
            افزونه ها
          </Link>
          <Link
            target="_blank"
            href="https://designesia.ir/"
            className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            فروشگاه
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">لاگوم</span>
              <img alt="لوگو" src="/lagomsm.svg" className="h-12 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-zinc-700"
            >
              <span className="sr-only">بستن منو</span>
              <XMarkIcon aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-zinc-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-lg leading-7 font-semibold text-zinc-800 hover:bg-zinc-50">
                    محصولات
                    <ChevronDownIcon aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {NavMenus.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-8 pl-6 text-sm leading-7 font-medium text-zinc-800 hover:bg-zinc-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/extensions"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg leading-7 font-semibold text-zinc-800 hover:bg-zinc-50"
                >
                  افزونه ها
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-lg leading-7 font-semibold text-zinc-800 hover:bg-zinc-50"
                >
                  ورود
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Nav
