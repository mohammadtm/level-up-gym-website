"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

export default function () {
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const mobileNavRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = ({ target }: MouseEvent): void => {
    console.log();
    if (
      !mobileNavRef.current?.contains(target as Node) ||
      (target as Node).nodeName === "LI"
    ) {
      setIsPhoneMenuOpen(false);
    }
  };
  function handleScroll() {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const windowScroll = document.documentElement.scrollTop;

    const scrolled = (windowScroll / height) * 100;

    setScrollPosition(scrolled);
  }

  useEffect(
    function () {
      document.addEventListener("click", handleOutsideClick);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        document.removeEventListener("click", handleOutsideClick);
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [isPhoneMenuOpen, scrollPosition],
  );
  const pathName = usePathname();
  return (
    <div
      className={`fixed z-10 flex h-[10%] min-h-[60px] w-screen flex-row items-center justify-between px-10  ${scrollPosition > 14 && "backdrop-brightness-50"} duration-200`}
    >
      <Link href="/">
        <h1 className="min-[60px] cursor-pointer text-2xl font-bold uppercase text-yellow-500">
          Levelup
        </h1>
      </Link>
      <nav
        ref={mobileNavRef}
        className={`absolute ${isPhoneMenuOpen ? "top-[70px]" : "top-[-290px]"} left-0 right-0 m-auto flex w-[80%] grow flex-col justify-end bg-white p-5 text-black duration-300 md:relative md:left-auto md:right-auto md:top-[inherit] md:w-auto md:flex-row md:gap-8 md:bg-transparent md:p-0 md:text-white`}
      >
        <ul className="flex flex-col gap-3 md:flex-row">
          <Link
            className={`hover:text-yellow-500 ${pathName === "/" && "text-yellow-500"}`}
            href="/"
          >
            <li className=" p-2">Home</li>
          </Link>

          <Link
            className={`hover:text-yellow-500 ${pathName === "/about" && "text-yellow-500"}`}
            href="/about"
          >
            <li className="p-2">About</li>
          </Link>

          <Link
            className={`hover:text-yellow-500 ${pathName === "/pricing" && "text-yellow-500"}`}
            href="/pricing"
          >
            <li className="p-2">Pricing</li>
          </Link>

          <Link
            className={`hover:text-yellow-500 ${pathName === "/blog" && "text-yellow-500"}`}
            href="/blog"
          >
            <li className="p-2">Blog</li>
          </Link>

          <Link
            className={`hover:text-yellow-500 ${pathName === "/contact" && "text-yellow-500"}`}
            href="/contact"
          >
            <li className="p-2">Contact</li>
          </Link>
        </ul>
      </nav>
      <div
        onClick={() => {
          setIsPhoneMenuOpen(!isPhoneMenuOpen);
        }}
        className="flex grow justify-end text-2xl md:hidden"
      >
        <FaBars
          name="menuToggle"
          className="cursor-pointer text-white duration-150 active:text-yellow-500"
        />
      </div>
    </div>
  );
}
