import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const categories = [
  {
    name: "Recent",
    posts: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: "Popular",
    posts: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: "Trending",
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
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
      <div className="flex h-screen w-full justify-center mt-24 px-4">
        <div className="w-full">
          <TabGroup>
            <TabList className="flex gap-4 mx-auto max-w-md rounded-lg shadow">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="text-lg text-center font-bold w-full text-zinc-500 hover:text-zinc-700 rounded-lg group p-3 hover:bg-gray-50
                  data-[selected]:text-zinc-900 data-[selected]:border-none data-[selected]:focus:none">
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="mt-3">
              {categories.map(({ name, posts }) => (
                <TabPanel key={name} className="rounded-xl bg-zinc-800/5 p-3">
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 text-sm/6 transition hover:bg-zinc-800/5">
                        <a href="#" className="font-semibold text-zinc-800">
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                        <ul
                          className="flex gap-2 text-zinc-800/50"
                          aria-hidden="true">
                          <li>{post.date}</li>
                          <li aria-hidden="true">&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li aria-hidden="true">&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
}
