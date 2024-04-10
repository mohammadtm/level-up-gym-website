"use client";

import Link from "next/link";
import { PropsWithChildren, useState } from "react";

interface PostGridCardProps {
  cardTitle: string;
  cardImage: string;
  cardType: "Story" | "Topic";
  cardIndex: number;
}

export default function PostGridCard({
  children,
  cardTitle,
  cardImage,
  cardIndex,
  cardType,
}: PropsWithChildren<PostGridCardProps>) {
  const [isActive, setIsActive] = useState(false);
  if (cardType == "Story")
    return (
      <figure
        style={{
          backgroundImage: `url(${cardImage})`,
        }}
        className={`h-60 w-full cursor-pointer rounded bg-cover bg-center bg-no-repeat ${cardIndex == 0 && "sm:col-span-2"}  md:h-auto`}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onTouchStart={() => setIsActive(true)}
        onTouchEnd={() => setIsActive(false)}
      >
        <Link href={`/blog/${cardTitle.replaceAll(" ", "-").toLowerCase()}`}>
          <div className="flex h-full w-full flex-col justify-end backdrop-brightness-[0.5]">
            <figcaption
              className={`bg-slate-800 px-5 py-2 duration-150 ${isActive ? "bg-opacity-70" : "bg-opacity-30"}`}
            >
              <h3 className="text-xl font-bold">{cardTitle}</h3>
              <p className="truncate text-justify text-slate-300">
                {(children as String).replace(/(<([^>]+)>)/gi, "")}
              </p>
            </figcaption>
          </div>
        </Link>
      </figure>
    );
  if (cardType == "Topic")
    return (
      <figure
        style={{
          backgroundImage: `url(${cardImage})`,
        }}
        className={`h-60 cursor-pointer rounded bg-cover bg-center bg-no-repeat ${cardIndex == 0 && "sm:col-span-2 md:col-span-1"} ${cardIndex == 1 && "md:row-span-2"} md:h-auto`}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onTouchStart={() => setIsActive(true)}
        onTouchEnd={() => setIsActive(false)}
      >
        <Link href={`/blog/${cardTitle.replaceAll(" ", "-").toLowerCase()}`}>
          <div className="flex h-full w-full flex-col justify-end backdrop-brightness-[0.5]">
            <figcaption
              className={`bg-slate-800 px-5 py-2 duration-150 ${isActive ? "bg-opacity-70" : "bg-opacity-30"}`}
            >
              <h3 className="text-xl font-bold">{cardTitle}</h3>
              <p className="truncate text-justify text-slate-300">
                {(children as String).replace(/(<([^>]+)>)/gi, "")}
              </p>
            </figcaption>
          </div>
        </Link>
      </figure>
    );
}
