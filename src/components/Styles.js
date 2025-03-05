import * as motion from 'motion/react-client'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Modern from '@/components/slides/Modern'
import Default from '@/components/slides/Default'
import Depth from '@/components/slides/Depth'
import Futuristic from '@/components/slides/Futuristic'

const slides = [
  {
    name: 'Modern Style',
    slide: Modern,
  },
  {
    name: 'Default Style',
    slide: Default,
  },
  {
    name: 'Depth Style',
    slide: Depth,
  },
  {
    name: 'Futuristic Style',
    slide: Futuristic,
  },
]

export default function Styles() {
  return (
    <section className="relative py-22">
      <div className="mx-auto flex w-full flex-col gap-y-4 lg:max-w-5xl lg:gap-y-10">
        <h2 className="text-3xl leading-14 font-black text-zinc-800 lg:text-5xl">
          طرح ها و رنگ های مختلف
        </h2>
        <p className="text-justify text-xl leading-8 font-light text-zinc-600 lg:text-2xl lg:leading-10">
          قالب ناحیه کاربری لاگوم از 4 سبک منحصر به فرد تشکیل شده است. 5 طرح
          رنگی مختلف برای هر سبک موجود است.
        </p>
      </div>
      <div className="mt-12 flex w-full justify-center px-4">
        <div className="w-full">
          <TabGroup>
            <TabList className="mx-auto flex max-w-2xl overflow-auto rounded-lg shadow">
              {slides.map(({ name }) => (
                <Tab
                  key={name}
                  className="group w-full cursor-pointer border-r border-zinc-200 p-3 text-center text-base font-bold whitespace-nowrap text-zinc-500 transition-colors hover:bg-gray-50 hover:text-zinc-700 focus:outline-0 data-[selected]:border-b-2 data-[selected]:border-b-blue-600 data-[selected]:text-blue-600 lg:text-lg"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
            <motion.div
              viewport={{ once: true }}
              transition={{ delay: '0.6', duration: '0.7' }}
              initial={{ translateY: '25px', opacity: 0 }}
              whileInView={{ translateY: '0', opacity: 1 }}
            >
              <TabPanels className="mt-3">
                {slides.map((s) => (
                  <TabPanel key={s.name}>
                    <s.slide />
                  </TabPanel>
                ))}
              </TabPanels>
            </motion.div>
          </TabGroup>
        </div>
      </div>
    </section>
  )
}
