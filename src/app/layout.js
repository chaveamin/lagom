import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "قالب ناحیه کاربری WHMCS لاگوم",
  description:
    "قالب لاگوم یک قالب ساده، زیبا و کاملاً ریسپانسیو برای ناحیه کاربری WHMCS و فرآیند سفارش است. دارای سبک قدرتمند و مدیریت منو.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
