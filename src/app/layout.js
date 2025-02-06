import "./globals.css";
import localFont from "next/font/local";

const dana = localFont({ src: "./DanaVF.woff2", variable: "--font-dana" });

export const metadata = {
  title: "قالب ناحیه کاربری WHMCS لاگوم",
  description:
    "قالب لاگوم یک قالب ساده، زیبا و کاملاً ریسپانسیو برای ناحیه کاربری WHMCS و فرآیند سفارش است. دارای سبک قدرتمند و مدیریت منو.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${dana.variable} font-dana antialiased px-8 2xl:max-w-8xl lg:max-w-5xl w-full mx-auto`}>
        {children}
      </body>
    </html>
  );
}
