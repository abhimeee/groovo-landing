"use client";
import config from "@/config/general";
import { motion } from "framer-motion";

declare global {
  interface Window {
    ml: (...args: any[]) => void;
  }
}

const Price = () => {
  return (
    <section className="mb-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-activeButton mb-4">The Groovo Experience</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      </div>
      
      <motion.div 
        className="bg-grayBackground rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-11/12 xl:w-[1050px] mx-auto py-16">
          <p className="font-light text-2xl text-activeButton text-center max-w-2xl mx-auto leading-relaxed">
            {config.contents.price.description}
          </p>
          
          <div className="flex xl:flex-row flex-col w-fit mx-auto gap-16 items-center mt-16">
            <ul className="flex flex-col gap-4">
              {config.contents.price.advantages.map((advantage, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-4 pl-2 font-normal text-lg text-activeButton group cursor-default"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300" />
                  {advantage}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Price;
