"use client";
import { Sankofa_Display } from "next/font/google";
import Image from "next/image";
import NavButton from "./header/nav-button";
import NavMenu from "./header/menu";
import { useState } from "react";

export const sankofa = Sankofa_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="sticky -top-0 left-0 w-full z-50 p-5 bg-white flex justify-between items-center shadow-md">
      <div className=" w-1/3 flex justify-start">
        <h2
          className={`${sankofa.className} text-2xl font-bold tracking-widest`}
        >
          Forkfull
        </h2>
      </div>
      <div className=" w-1/3 flex justify-center">
        <Image
          src="/images/logo.webp"
          height={100}
          width={100}
          alt="logo"
          className="rounded-full size-14"
        />
      </div>
      <div className=" w-1/3 flex justify-end">
        <NavButton setNavOpen={setNavOpen} navOpen={navOpen} />
      </div>
      <NavMenu setNavOpen={setNavOpen} navOpen={navOpen} />
    </nav>
  );
}
