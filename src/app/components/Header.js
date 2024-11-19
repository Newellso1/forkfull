"use client";
import { Sankofa_Display } from "next/font/google";
import Image from "next/image";
import NavButton from "./header/nav-button";
import NavMenu from "./header/menu";
import { useState } from "react";
import MenuLinks from "./header/menu-links";
import Link from "next/link";

export const sankofa = Sankofa_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="sticky -top-0 left-0 w-full z-50 p-5 bg-white flex justify-between items-center border-b-2 border-black md:pb-4">
      <div className=" w-1/3 flex justify-start ">
        <Link href="/">
          <h2
            className={`${sankofa.className} text-2xl md:text-5xl font-bold tracking-widest`}
          >
            Forkfull
          </h2>
        </Link>
      </div>
      <div className=" w-1/3   flex justify-center md:hidden  ">
        <Image
          src="/images/forkfull_logo.png"
          height={19}
          width={19}
          alt="logo"
          className=" rotate-12"
        />
      </div>
      <div className=" w-1/3 flex justify-end md:hidden">
        <NavButton setNavOpen={setNavOpen} navOpen={navOpen} />
      </div>
      <div className="hidden md:flex">
        <MenuLinks setNavOpen={setNavOpen} navOpen={navOpen} />
      </div>
      <NavMenu setNavOpen={setNavOpen} navOpen={navOpen} />
    </nav>
  );
}
