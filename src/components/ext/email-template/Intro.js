import * as motion from 'motion/react-client'

export default function Intro() {
  return (
    <section className="mx-auto flex w-full flex-col gap-y-22 py-15 lg:max-w-3xl">
      <div className="relative">
        <motion.img
          className="shadow-4xl rounded-lg ring ring-zinc-200"
          viewport={{ once: true }}
          transition={{ delay: '0.3' }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          width={840}
          src="/email/lagom-email_preview-main.webp"
          alt="افزونه بنر تبلیغات لاگوم"
        />
      </div>
      <div id="info" className="fle flex-col gap-y-8">
        <h4 className="mb-8 text-2xl leading-12 font-extrabold text-zinc-800 lg:text-5xl lg:leading-16">
          قالب ایمیل لاگوم چیست؟
        </h4>
        <p className="text-xl leading-8 font-light text-zinc-500 lg:text-2xl lg:leading-10">
          قالب ایمیل لاگوم، قالب ناحیه کاربری لاگوم را گسترش میدهد و به شما این
          امکان را میدهد استایل ایمیل WHMCS خود را به آسانی تغییر دهید. از بین
          سه استایل فقط با چند کلیک انتخاب کنید.
        </p>
      </div>
    </section>
  )
}
