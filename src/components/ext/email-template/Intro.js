import * as motion from "motion/react-client";

export default function Intro() {
  return (
    <section className="py-15 lg:max-w-3xl flex flex-col gap-y-22 w-full mx-auto">
      <div className="relative">
        <motion.img
          className="shadow-4xl ring ring-zinc-200 rounded-lg"
          viewport={{ once: true }}
          transition={{ delay: "0.3" }}
          initial={{ translateY: "25px", opacity: 0 }}
          whileInView={{ translateY: "0", opacity: 1 }}
          width={840}
          src="/email/lagom-email_preview-main.png"
          alt="افزونه بنر تبلیغات لاگوم"
        />
      </div>
      <div id="info" className="fle flex-col gap-y-8">
        <h4 className="font-extrabold mb-8 text-2xl lg:text-5xl text-zinc-800 leading-12 lg:leading-16">
          قالب ایمیل لاگوم چیست؟
        </h4>
        <p className="font-light text-xl lg:text-2xl text-zinc-600 leading-8 lg:leading-10">
          قالب ایمیل لاگوم، قالب ناحیه کاربری لاگوم را گسترش میدهد و به شما این
          امکان را میدهد استایل ایمیل WHMCS خود را به آسانی تغییر دهید. از بین
          سه استایل فقط با چند کلیک انتخاب کنید.
        </p>
      </div>
    </section>
  );
}
