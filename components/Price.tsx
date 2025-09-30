"use client";
import config from "@/config/general";
import { motion } from "framer-motion";

const Price = () => {
  return (
    <section className="mb-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-activeButton mb-4">Pricing</h2>
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
            
            <div className="flex flex-col items-center gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="text-5xl font-bold text-activeButton block mb-2">
                  {config.contents.price.price}
                </span>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Limited Time Offer</span>
              </motion.div>
              
              <motion.button 
                className="bg-primary hover:bg-primary/90 rounded-xl py-5 px-20 text-black uppercase font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get started
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Price;
