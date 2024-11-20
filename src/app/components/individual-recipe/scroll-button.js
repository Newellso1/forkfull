"use client";

import Link from "next/link";

export default function ScrollButton({ section }) {
  return (
    <Link href={`#${section}`} className=" scroll-smooth">
      <button className="fixed right-2 mt-1 w-fit z-50 bg-black text-white text-sm p-1 px-2 rounded-lg">
        Recipe
      </button>
    </Link>
  );
}
