"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-l from-yellow-600">
      <section className="relative">
        <h1 className="text-[10rem] font-bold leading-snug ">404</h1>
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-10 rotate-12 transform rounded bg-red-400 px-1.5 capitalize duration-300">
          Page not flound
        </p>
      </section>
      <section className="flex flex-row gap-x-5 [&_button]:w-28">
        <button
          className=" py-2 ring-2 ring-white duration-300 active:translate-y-1"
          onClick={router.back}
        >
          Go Back
        </button>
        <button
          className="bg-yellow-500 py-2 ring-2 ring-yellow-500 duration-300 active:translate-y-1"
          onClick={() => {
            router.push("/", { scroll: false });
          }}
        >
          Go Home
        </button>
      </section>
    </main>
  );
}
