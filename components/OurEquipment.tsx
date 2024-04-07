"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import FreeWeight1 from "../public/free-weights/free-weight1.jpg";
import FreeWeight2 from "../public/free-weights/free-weight2.jpg";
import FreeWeight3 from "../public/free-weights/free-weight3.jpg";
import FreeWeight4 from "../public/free-weights/free-weight4.jpg";
import FreeWeight5 from "../public/free-weights/free-weight5.jpg";

import StrengthTrainingMachine1 from "../public/strength-training-machine/strength-training-machine1.jpg";
import StrengthTrainingMachine2 from "../public/strength-training-machine/strength-training-machine2.jpg";
import StrengthTrainingMachine3 from "../public/strength-training-machine/strength-training-machine3.jpg";
import StrengthTrainingMachine4 from "../public/strength-training-machine/strength-training-machine4.webp";
import StrengthTrainingMachine5 from "../public/strength-training-machine/strength-training-machine5.jpg";

import CardiovascularEquipment1 from "../public/cardiovascular-equipment/cardiovascular-equipment1.jpg";
import CardiovascularEquipment2 from "../public/cardiovascular-equipment/cardiovascular-equipment2.jpg";
import CardiovascularEquipment3 from "../public/cardiovascular-equipment/cardiovascular-equipment3.webp";
import CardiovascularEquipment4 from "../public/cardiovascular-equipment/cardiovascular-equipment4.jpg";
import CardiovascularEquipment5 from "../public/cardiovascular-equipment/cardiovascular-equipment5.webp";

import FunctionalTrainingEquipment1 from "../public/functional-training-equipment/functional-training-equipment1.jpg";
import FunctionalTrainingEquipment2 from "../public/functional-training-equipment/functional-training-equipment2.png";
import FunctionalTrainingEquipment3 from "../public/functional-training-equipment/functional-training-equipment3.webp";
import FunctionalTrainingEquipment4 from "../public/functional-training-equipment/functional-training-equipment4.jpg";
import FunctionalTrainingEquipment5 from "../public/functional-training-equipment/functional-training-equipment5.jpg";

export default function OurEquipment() {
  const [activeEquipmentButton, setActiveEquipmentButton] = useState(0);

  return (
    <section className="my-9 px-9">
      <h2 className="text-center font-sans text-4xl">Our Equipment</h2>
      <div className="mt-6 flex flex-col items-center  justify-center gap-2 md:flex-row  md:gap-4">
        <div className="flex flex-row gap-4 [&>button]:h-16 [&>button]:w-40 [&>button]:duration-300">
          <button
            onClick={() => setActiveEquipmentButton(0)}
            className={`${activeEquipmentButton === 0 ? "bg-yellow-500" : "bg-gray-500"}  active:translate-y-1`}
          >
            Free Weights
          </button>
          <button
            onClick={() => setActiveEquipmentButton(1)}
            className={`${activeEquipmentButton === 1 ? "bg-yellow-500" : "bg-gray-500"}  active:translate-y-1`}
          >
            Strength Training Machine
          </button>
        </div>
        <div className="flex flex-row gap-4 [&>button]:h-16 [&>button]:w-40 [&>button]:duration-300">
          <button
            onClick={() => setActiveEquipmentButton(2)}
            className={`${activeEquipmentButton === 2 ? "bg-yellow-500" : "bg-gray-500"}  active:translate-y-1`}
          >
            Cardiovascular Equipment
          </button>
          <button
            onClick={() => setActiveEquipmentButton(3)}
            className={`${activeEquipmentButton === 3 ? "bg-yellow-500" : "bg-gray-500"}  active:translate-y-1`}
          >
            Functional Training Equipment
          </button>
        </div>
      </div>

      {activeEquipmentButton === 0 && (
        <EquipmentImages
          image1={FreeWeight1}
          image2={FreeWeight2}
          image3={FreeWeight3}
          image4={FreeWeight4}
          image5={FreeWeight5}
        />
      )}
      {activeEquipmentButton === 1 && (
        <EquipmentImages
          image1={StrengthTrainingMachine1}
          image2={StrengthTrainingMachine2}
          image3={StrengthTrainingMachine3}
          image4={StrengthTrainingMachine4}
          image5={StrengthTrainingMachine5}
        />
      )}
      {activeEquipmentButton === 2 && (
        <EquipmentImages
          image1={CardiovascularEquipment1}
          image2={CardiovascularEquipment2}
          image3={CardiovascularEquipment3}
          image4={CardiovascularEquipment4}
          image5={CardiovascularEquipment5}
        />
      )}
      {activeEquipmentButton === 3 && (
        <EquipmentImages
          image1={FunctionalTrainingEquipment1}
          image2={FunctionalTrainingEquipment2}
          image3={FunctionalTrainingEquipment3}
          image4={FunctionalTrainingEquipment4}
          image5={FunctionalTrainingEquipment5}
        />
      )}
    </section>
  );
}

interface EquipmentImagesProps {
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  image4: StaticImageData;
  image5: StaticImageData;
}

function EquipmentImages({
  image1,
  image2,
  image3,
  image4,
  image5,
}: EquipmentImagesProps) {
  return (
    <div className="flex justify-center ">
      <div className="mt-3 grid grid-cols-2 grid-rows-2 place-content-center gap-x-2 gap-y-4 md:grid-cols-3 xl:w-[90%]">
        <figure className="col-span-2 row-span-2 sm:col-span-1 md:col-span-1 md:row-span-2">
          <Image
            className="aspect-square object-cover sm:aspect-auto sm:h-full md:aspect-auto md:h-full"
            src={image1}
            alt="multiple dambells on rack"
          />
        </figure>
        <figure className=" ">
          <Image
            className="aspect-square object-cover "
            src={image2}
            alt="a 10kg dumbell"
          />
        </figure>
        <figure className="">
          <Image
            className="aspect-square object-cover"
            src={image3}
            alt="dumbells"
          />
        </figure>
        <figure>
          <Image
            className="aspect-square w-full object-cover"
            src={image4}
            alt="dumbells"
          />
        </figure>
        <figure>
          <Image
            className="aspect-square w-full object-cover"
            src={image5}
            alt="dumbells"
          />
        </figure>
      </div>
    </div>
  );
}
