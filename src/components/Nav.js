import lagom from "@/images/lagom.svg";
import clientThemeIcon from "@/images/client-theme.svg";
import websiteBuilderIcon from "@/images/websitebuilder.svg";
import oneSteoIcon from "@/images/onestep.svg";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Menus = [
  {
    key: "قالب ناحیه کاربری",
    icon: clientThemeIcon,
    title: "قالب ناحیه کاربری",
    description:
      "ناحیه کاربری WHMCS و قالب فرم سفارش، حاوی طرح‌بندی‌ها و سبک‌های متعدد.",
    href: "https://designesia.ir/downloads/lagom-whmcs-theme/",
  },
  {
    key: "سایت ساز",
    icon: websiteBuilderIcon,
    title: "سایت ساز",
    description:
      "سایت ساز پیشرفته لاگوم، با چندین صفحه و بخش از پیش تعریف شده.",
    href: "https://designesia.ir/downloads/lagom-whmcs-theme/",
  },
  {
    key: "فرم سفارش یک مرحله ای",
    icon: oneSteoIcon,
    title: "فرم سفارش یک مرحله ای",
    description:
      "قالب سفارش تک صفحه ای قدرتمند لاگوم، حاوی طرح بندی های مختلف.",
    href: "https://designesia.ir/downloads/lagom-whmcs-theme/",
  },
];

function Nav() {
  return (
    <nav className="absolute w-full min-h-20 right-0 top-10 flex px-20">
      <a className="inline-flex ml-auto items-center lg:min-h-11" href="/">
        <Image width={115} height={44} alt="لاگوم" src={lagom}></Image>
      </a>
      <Menu>
        <MenuButton className="text-2xl font-semibold text-zinc-800 cursor-pointer py-2 px-4 hover:text-blue-600 transition-colors">
          محصولات
        </MenuButton>
        <MenuItems
          anchor="bottom"
          transition
          className="z-50 bg-white animate-fadeInUp absolute right-0 transition-all shadow-3xl w-screen mx-auto flex py-24 px-14 *:flex *:flex-col *:items-start *:flex-[3] *:mx-6">
          {Menus.map((i) => (
            <MenuItem key={i.key}>
              <a className="group" href={i.href}>
                <Image
                  width={56}
                  height={56}
                  alt={i.title}
                  src={i.icon}></Image>
                <h6 className="font-bold mt-8 mb-4 text-zinc-800 text-xl group-hover:text-blue-600 transition-colors">
                  {i.title}
                </h6>
                <p className="text-zinc-600 font-normal text-base">
                  {i.description}
                </p>
              </a>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </nav>
  );
}

export default Nav;
