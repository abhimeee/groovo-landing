"use client";

import { useMemo } from "react";
// config
import config from "@/config/general";
// components
import Form from "./Form";
import YouTubeVideo from "./YouTubeVideo";
import { motion } from "framer-motion";

const Hero = () => {
  const title = useMemo(() => {
    const findIndex = config.contents.title.search(config.contents.markOfTitle);

    if (findIndex >= 0) {
      return {
        text: config.contents.title.slice(0, findIndex),
        mark: config.contents.title.slice(
          findIndex,
          findIndex + config.contents.markOfTitle.length
        ),
      };
    }
    return { text: config.contents.title, mark: null };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.contents]);

  return (
    <section className="flex flex-col xl:flex-row items-center xl:items-start justify-between max-w-[1440px] mx-auto px-6 xl:px-16 pt-32 gap-12">
      {/* Left side - Text content */}
      <div className="w-full xl:w-1/2 flex flex-col gap-6 pt-8">
        <h1 className="font-heading font-normal text-3xl sm:text-5xl xl:text-6xl text-black relative">
          {title.text}
          {title.mark && (
            <span className="bg-primary whitespace-nowrap inline-block ml-1 absolute px-2 w-[fit-content] bottom-[16px] sm:bottom-[20px] leading-[8px] text-black rounded h-1 sm:h-3">
              {title.mark}
            </span>
          )}
        </h1>
        <span className="font-body text-xl sm:text-3xl xl:text-4xl text-black">
          {config.contents.description}
        </span>
        <div className="flex flex-col gap-8">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="text-5xl font-bold text-activeButton mb-2">
              {config.contents.price.price}
            </span>
          </motion.div>
          
          <motion.button 
            className="ml-onclick-form bg-primary hover:bg-primary/90 rounded-xl py-5 px-20 text-black uppercase font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.ml('show', 'yMGYEW', true)}
          >
            Join Waitlist
          </motion.button>
        </div>
      </div>

      {/* Right side - Video */}
      <div className="w-full xl:w-[400px] flex justify-center xl:justify-end -mt-4 xl:mt-0">
        <YouTubeVideo 
          videoId="YOUR_VIDEO_ID_HERE"
          className="w-[280px] sm:w-[350px] xl:w-[400px]"
        />
      </div>
    </section>
  );
};

export default Hero;
