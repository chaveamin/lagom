"use client";

import lagom from "@/images/lagom.svg";
import lagomsm from "@/images/lagomsm.svg";
import clientThemeIcon from "@/images/client-theme.svg";
import websiteBuilderIcon from "@/images/websitebuilder.svg";
import oneSteoIcon from "@/images/onestep.svg";
import Image from "next/image";
import { useState } from "react";
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
} from "@headlessui/react";
import Link from "next/link";

const NavMenus = [
  {
    name: "قالب ناحیه کاربری",
    description:
      "ناحیه کاربری WHMCS و قالب فرم سفارش، حاوی طرح‌بندی‌ها و سبک‌های متعدد.",
    href: "/",
    icon: clientThemeIcon,
  },
  {
    name: "سایت ساز",
    description: "سایت ساز پیشرفته لاگوم، با چندین صفحه و بخش از پیش تعریف شده",
    href: "https://designesia.ir/downloads/lagom-whmcs-theme/",
    icon: websiteBuilderIcon,
  },
  {
    name: "فرم سفارش یک مرحله ای",
    description:
      "قالب سفارش تک صفحه ای قدرتمند لاگوم، حاوی طرح بندی های مختلف.",
    href: "https://designesia.ir/downloads/lagom-whmcs-theme/",
    icon: oneSteoIcon,
  },
];

function Bars3Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
      />
    </svg>
  );
}
function XMarkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 flex-none group-data-[open]:rotate-180 transition-transform">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative lg:top-10 isolate z-10 bg-white">
      <nav aria-label="Global" className="mx-auto flex items-center py-6">
        <div className="flex flex-1">
          <Link href="/">
            <span className="sr-only">امین چاوه پور</span>
            <Image className="h-12 w-auto" src={lagom} alt="لاگوم" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700">
            <span className="sr-only">باز کردن منو</span>
            <Bars3Icon aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-12 lg:justify-end">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-zinc-800 cursor-pointer hover:text-blue-500 focus:outline-0 transition-colors">
              محصولات
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 rounded-xl top-20 -z-10 bg-white pt-14 shadow-sm ring-1 ring-zinc-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in">
              <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                {NavMenus.map((item) => (
                  <div
                    key={item.name}
                    className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-zinc-50 transition-colors">
                    <div className="flex h-22 w-22 items-center justify-center rounded-lg bg-zinc-50 group-hover:bg-white">
                      <Image
                        width={48}
                        height={48}
                        alt={item.name}
                        src={item.icon}
                      />
                    </div>
                    <a
                      href={item.href}
                      className="mt-6 block text-lg font-bold text-zinc-800 group-hover:text-blue-500 transition-colors">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-base text-zinc-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <Link
            href="/extensions"
            className="text-lg font-semibold text-zinc-800 cursor-pointer hover:text-blue-500 transition-colors">
            افزونه ها
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-semibold text-white cursor-pointer bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md transition-colors">
            سفارش دهید
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">امین چاوه پور</span>
              <Image alt="لوگو" src={lagomsm} className="h-12 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-zinc-700">
              <span className="sr-only">بستن منو</span>
              <XMarkIcon aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-zinc-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-lg font-semibold leading-7 text-zinc-800 hover:bg-zinc-50">
                    محصولات
                    <ChevronDownIcon aria-hidden="true" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {NavMenus.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-8 text-sm font-medium leading-7 text-zinc-800 hover:bg-zinc-50">
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/extensions"
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-zinc-800 hover:bg-zinc-50">
                  افزونه ها
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-lg font-semibold leading-7 text-zinc-800 hover:bg-zinc-50">
                  ورود
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Nav;
