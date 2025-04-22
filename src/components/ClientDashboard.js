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
          className="shadow-3xl rounded-lg ring-2 shadow-blue-800/5 ring-blue-500/7"
          src="client-dashboard.webp"
          alt="ناحیه کاربری لاگوم"
        />
      </div>
    </section>
  )
}
