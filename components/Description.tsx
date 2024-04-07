import React from "react";
import { images } from "../public/constants";
import left from "../public/left.svg";
import right from "../public/right.svg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="relative grid h-full w-full  bg-yellow-500 ">
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "flex h-full w-full items-center px-8 py-8 text-left smd:h-[55dvh] md:h-[80dvh]  lg:h-[50dvh]"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 0.5 },
            }}
            className="w-full"
          >
            {/* <div className="py-16 text-5xl font-extrabold">{elem.title}</div> */}
            <div className="text-base font-medium italic leading-relaxed tracking-wide text-black">
              {elem.desc}
            </div>
          </motion.div>

          <div className="absolute bottom-2 right-2 flex w-full items-center justify-center md:bottom-1 md:right-0">
            <div
              className="absolute bottom-0 right-8 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="" />
            </div>

            <div
              className="absolute bottom-0 right-0 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
