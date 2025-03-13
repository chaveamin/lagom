import * as motion from 'motion/react-client'

export default function Intro() {
  return (
    <section className="mx-auto flex w-full flex-col gap-y-22 py-15 lg:max-w-3xl">
      <div className="*:shadow-4xl relative *:rounded-lg *:ring *:ring-zinc-200">
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: '0.3' }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          width={840}
          src="/code/custom_code-main-1.png"
          alt="افزونه کد سفارشی لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: '0.8' }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          className="absolute top-20 -left-40 hidden lg:block"
          width={240}
          src="/code/custom_code-main-2.png"
          alt="افزونه کد سفارشی لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: '0.5' }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          className="absolute top-70 -right-40 hidden lg:block"
          width={230}
          src="/code/custom_code-main-3.png"
          alt="افزونه کد سفارشی لاگوم"
        />
      </div>
    </section>
  )
}
