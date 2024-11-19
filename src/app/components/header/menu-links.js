import Link from "next/link";

export default function MenuLinks({ setNavOpen, navOpen }) {
  const closeMenu = () => {
    setTimeout(() => {
      setNavOpen(false);
    }, 200);
  };

  return (
    <ul className="bg-white flex flex-col md:flex-row justify-center items-center gap-7 md:gap-10 text-xl">
      <div className="group">
        <Link href="/" onClick={closeMenu}>
          <li>Home</li>
          <div className="w-0 group-hover:w-full h-[0.15em] bg-black rounded-sm transition-all hidden md:flex"></div>
        </Link>
      </div>
      <div className="group">
        <Link href="/recipes" onClick={closeMenu}>
          <li>Recipes</li>
          <div className="w-0 group-hover:w-full h-[0.15em] bg-black rounded-sm transition-all hidden md:flex"></div>
        </Link>
      </div>
      <Link href="/about" onClick={closeMenu}>
        <div className="group">
          <li>About</li>
          <div className="w-0 group-hover:w-full h-[0.15em] bg-black rounded-sm transition-all hidden md:flex"></div>
        </div>
      </Link>
      <div className="group">
        <li>Contact</li>
        <div className="w-0 group-hover:w-full h-[0.15em] bg-black rounded-sm transition-all hidden md:flex"></div>
      </div>
    </ul>
  );
}
