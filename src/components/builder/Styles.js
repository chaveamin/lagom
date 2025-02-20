import * as motion from "motion/react-client";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Modern from "@/components/builder/slides/Modern";
import Default from "@/components/builder/slides/Default";
import Depth from "@/components/builder/slides/Depth";
import Futuristic from "@/components/builder/slides/Futuristic";

const slides = [
  {
    name: "Modern Style",
    slide: Modern,
  },
  {
    name: "Default Style",
    slide: Default,
  },
  {
    name: "Depth Style",
    slide: Depth,
  },
  {
    name: "Futuristic Style",
    slide: Futuristic,
  },
];

export default function Styles() {
  return (
    <section className="py-22 relative">
      <div className="w-full lg:max-w-5xl mx-auto flex flex-col lg:gap-y-10 gap-y-4">
        <h2 className="lg:text-5xl text-3xl leading-14 font-black text-zinc-800">
          طرح ها و رنگ های مختلف
        </h2>
        <p className="lg:text-2xl text-xl lg:leading-10 text-justify leading-8 font-light text-zinc-600">
          سایت ساز لاگوم از 4 سبک منحصر به فرد تشکیل شده است. 5 طرح رنگی مختلف
          برای هر سبک موجود است.
        </p>
      </div>
      <div className="flex w-full justify-center mt-12 px-4">
        <div className="w-full">
          <TabGroup>
            <TabList className="flex mx-auto max-w-2xl rounded-lg shadow overflow-auto">
              {slides.map(({ name }) => (
                <Tab
                  key={name}
                  className="lg:text-lg text-base whitespace-nowrap cursor-pointer focus:outline-0 border-r border-zinc-200 text-center font-bold w-full text-zinc-500 hover:text-zinc-700 group p-3 hover:bg-gray-50 transition-colors
                  data-[selected]:text-blue-600 data-[selected]:border-b-2 data-[selected]:border-b-blue-600">
                  {name}
                </Tab>
              ))}
            </TabList>
            <motion.div
              viewport={{ once: true }}
              transition={{ delay: "0.6", duration: "0.7" }}
              initial={{ translateY: "25px", opacity: 0 }}
              whileInView={{ translateY: "0", opacity: 1 }}>
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
  );
}
