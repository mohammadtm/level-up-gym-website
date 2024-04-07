"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { images } from "../public/constants";
import Description from "./Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <section className="mx-auto grid w-full max-w-5xl grid-cols-1 place-content-center place-items-center rounded-2xl shadow-2xl md:mt-5 md:grid-cols-2">
      <div
        className={`flex w-full items-center justify-center gap-4 p-6 transition-transform duration-500 ease-in-out md:rounded-2xl md:p-0`}
      >
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block h-[50dvh] w-full object-cover transition-all duration-500 ease-in-out smd:h-[75dvh] md:h-[80dvh] lg:h-[50dvh]"
                : "hidden"
            }`}
          >
            <Image
              src={elem.src}
              alt=""
              width={400}
              height={400}
              className="h-full w-full object-cover "
            />
          </div>
        ))}
      </div>
      <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      />
    </section>
  );
};

export default Slider;
