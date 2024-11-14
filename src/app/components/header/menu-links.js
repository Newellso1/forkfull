export default function MenuLinks() {
  return (
    <ul className="bg-white flex flex-col md:flex-row justify-center items-center gap-7 md:gap-10 text-xl">
      <div className="group">
        <li>Home</li>
        <div className="w-0 group-hover:w-full h-[0.15em] bg-black rounded-sm transition-all hidden md:flex"></div>
      </div>
      <div className="group">
        <li>Recipes</li>
        <div className="w-0 group-hover:w-full h-[0.15em] bg-black rounded-sm transition-all hidden md:flex"></div>
      </div>
      <div className="group">
        <li>About</li>
        <div className="w-0 group-hover:w-full h-[0.15em] bg-black rounded-sm transition-all hidden md:flex"></div>
      </div>
      <div className="group">
        <li>Contact</li>
        <div className="w-0 group-hover:w-full h-[0.15em] bg-black rounded-sm transition-all hidden md:flex"></div>
      </div>
    </ul>
  );
}
