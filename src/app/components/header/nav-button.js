export default function NavButton({ setNavOpen, navOpen }) {
  const toggleNav = () => {
    setTimeout(() => {
      setNavOpen(!navOpen);
    }, 200);
  };

  return (
    <button onClick={() => toggleNav()}>
      <div className="size-10 border-2 border-black rounded-md flex flex-col justify-center items-center gap-1 p-1 ">
        <div
          className={`h-1 w-7 bg-black rounded-sm transition-all ${
            navOpen ? `opacity-0` : ``
          }`}
        ></div>
        <div
          className={`h-1 w-7 bg-black rounded-sm transition-all ${
            navOpen ? ` rotate-45` : ``
          }`}
        ></div>
        <div
          className={`h-1 w-7 bg-black rounded-sm transition-all ${
            navOpen && ` -rotate-45 -translate-y-2 `
          }`}
        ></div>
      </div>
    </button>
  );
}
