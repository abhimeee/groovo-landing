"use client";

import Image from "next/image";
import { Title } from "./Atoms";
import config from "@/config/general";
import { useState } from "react";

const HowWorks = () => {
  const [activeTitle, setActiveTitle] = useState(0);

  return (
    <div className="mb-24">
      <Title label="How it works" />
      <div className="flex xl:flex-row flex-col gap-8 justify-center">
        <div className="xl:order-2 order-1 flex flex-col gap-5">
          {config.contents.howWorks.map((item, index) => {
            return (
              <div key={index} onClick={() => setActiveTitle(index)}>
                <div className="flex items-center gap-2 cursor-pointer">
                  <h4 className="flex-1 font-semibold text-xl sm:text-2xl text-black">
                    {index + 1}. {item.title}
                  </h4>
                  <Image alt="" src={"/down.svg"} width={12} height={6} />
                </div>
                {activeTitle === index && (
                  <p className="text-lg sm:text-xl text-activeButton w-full md:w-[550px] pt-4 mb-2">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
