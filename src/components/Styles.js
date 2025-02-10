import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";
import Modern from "@/components/slides/Modern";
import Default from "@/components/slides/Default";
import Depth from "@/components/slides/Depth";
import Futuristic from "@/components/slides/Futuristic";

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
    <section className="py-16 relative">
      <div className="w-full lg:max-w-3xl mx-auto flex flex-col gap-y-10">
        <h2 className="text-5xl font-black text-zinc-800">
          طرح ها و رنگ های مختلف
        </h2>
        <p className="text-2xl font-light text-zinc-600">
          قالب ناحیه کاربری لاگوم از 4 سبک منحصر به فرد تشکیل شده است. 5 طرح
          رنگی مختلف برای هر سبک موجود است.
        </p>
      </div>
      <div className="flex w-full justify-center mt-12 px-4">
        <div className="w-full">
          <TabGroup>
            <TabList className="flex mx-auto max-w-2xl rounded-lg shadow">
              {slides.map(({ name }) => (
                <Tab
                  key={name}
                  className="text-lg cursor-pointer focus:outline-0 border-r border-zinc-200 text-center font-bold w-full text-zinc-500 hover:text-zinc-700 group p-3 hover:bg-gray-50 transition-colors
                  data-[selected]:text-blue-600 data-[selected]:border-b-2 data-[selected]:border-b-blue-600">
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="mt-3">
              {slides.map((s) => (
                <TabPanel key={s.name}>
                  <s.slide />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
}
