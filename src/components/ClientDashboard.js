import * as motion from 'motion/react-client'

export default function ClientDashboard() {
  return (
    <section className="relative pb-15">
      <div className="relative mx-auto w-full lg:max-w-3xl">
        <motion.img
          viewport={{ once: true }}
          transition={{ delay: '0.4' }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          className="shadow-3xl rounded-lg ring-2 ring-blue-500/50"
          src="client-dashboard.webp"
          alt="ناحیه کاربری لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={350}
          transition={{ delay: '0.3' }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          className="shadow-3xl hidden rounded-lg ring-2 ring-blue-500/50 lg:absolute lg:top-24 lg:-right-30 lg:block"
          src="client-dashboard-left.webp"
          alt="ناحیه کاربری لاگوم"
        />
        <motion.img
          viewport={{ once: true }}
          width={245}
          transition={{ delay: '0.5' }}
          initial={{ translateY: '25px', opacity: 0 }}
          whileInView={{ translateY: '0', opacity: 1 }}
          className="shadow-3xl hidden rounded-lg ring-2 ring-blue-500/50 lg:absolute lg:top-70 lg:-left-30 lg:block"
          src="client-dashboard-right.webp"
          alt="ناحیه کاربری لاگوم"
        />
      </div>
    </section>
  )
}
