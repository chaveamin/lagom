import * as motion from 'motion/react-client'

export default function Intro() {
  return (
    <section className="mx-auto w-full py-15 lg:max-w-3xl">
      <div className="relative *:rounded-lg *:ring *:shadow-xl *:shadow-zinc-800/5 *:ring-zinc-200">
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: '0.3', duration: '0.6' }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          width={840}
          src="/cms/cms-center-main.webp"
          alt="سایت ساز لاگوم - راه حل هاستینگ بدون دردسر"
        />
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: '0.5', duration: '0.6' }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          className="absolute top-16 -right-40 hidden lg:block"
          width={224}
          src="/cms/cms-left-main.svg"
          alt="سایت ساز لاگوم - راه حل هاستینگ بدون دردسر"
        />
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: '0.9', duration: '0.4' }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          className="absolute top-60 -right-10 hidden -scale-x-100 !ring-0 !shadow-none lg:block"
          width={64}
          src="/cms/mouse.svg"
          alt="سایت ساز لاگوم - راه حل هاستینگ بدون دردسر"
        />
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: '1', duration: '0.6' }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          className="absolute top-90 -left-40 hidden lg:block"
          width={366}
          src="/cms/cms-right-main.svg"
          alt="سایت ساز لاگوم - راه حل هاستینگ بدون دردسر"
        />
      </div>
    </section>
  )
}
