"use client";

import config from "@/config/general";

const About = () => {
  return (
    <div className="mt-16 xl:mt-0 flex lg:flex-row flex-col justify-between gap-6 mb-24">
      {config.contents.about.map((item) => (
        <div
          key={item.id}
          className="bg-grayBackground hover:bg-white w-full lg:w-1/3 px-8 py-7 rounded-xl flex flex-col items-start gap-4 
          transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer
          border border-transparent hover:border-gray-200"
        >
          <span className="text-4xl bg-white/80 p-3 rounded-lg shadow-sm">{item.emoji}</span>
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-semibold bg-clip-text">
              {item.title}
            </h3>
            <p className="text-lg sm:text-xl font-normal text-gray-700 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
