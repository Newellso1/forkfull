import NavButton from "./nav-button";
import { sankofa } from "../Header";

export default function NavMenu({ setNavOpen, navOpen }) {
  return (
    <div
      className={` absolute top-0 right-0 w-dvw h-dvh z-[60] bg-black/35 flex flex-row-reverse transition-all ${
        !navOpen && `-translate-x-full`
      }`}
    >
      <div
        className={`bg-white w-2/3 h-dvh flex flex-col justify-start items-center gap-7 pt-40 transition-all  ${
          navOpen ? `slide-in` : ``
        }`}
      >
        <div className="absolute top-6 right-5">
          <NavButton setNavOpen={setNavOpen} navOpen={navOpen} />
        </div>
        <h2 className={`${sankofa.className} text-6xl`}>Menu</h2>
        <ul className="bg-white flex flex-col justify-center items-center gap-7 text-xl">
          <li>Home</li>
          <li>Recipes</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
