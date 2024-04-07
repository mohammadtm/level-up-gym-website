import Image, { StaticImageData } from "next/image";
import React from "react";

interface TrainerCardProps {
  trainerImage: StaticImageData;
  trainerName: string;
  trainerTitle: string;
}

export default function TrainerCard({
  trainerImage,
  trainerName,
  trainerTitle,
}: TrainerCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3">
      <figure>
        <Image
          className="h-44 rounded object-cover object-center"
          src={trainerImage}
          alt="Trainer1"
        />
      </figure>
      <figcaption className="flex flex-col items-center gap-y-2">
        <p className=" font-semibold text-yellow-500">{trainerName}</p>
        <p className=" text-slate-300">{trainerTitle}</p>
      </figcaption>
    </div>
  );
}
