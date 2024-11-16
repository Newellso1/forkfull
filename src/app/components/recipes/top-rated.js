import { useState } from "react";

export default function TopRated({ topRecipes, setTopRecipes }) {
  const handleSelect = (value) => {
    setTopRecipes(value);
  };

  return (
    <div className="group text-left absolute top-0 left-0 bg-black text-white p-1.5 w-18 rounded-br-md">
      <h2 className="">Top {topRecipes}</h2>
      <ul className="h-0 overflow-hidden group-hover:h-full transition-all">
        {[3, 5, 10].map((value) => (
          <li
            key={value}
            onClick={() => handleSelect(value)}
            className={` cursor-pointer p-1 box-content ${
              topRecipes === value
                ? "border-white border-2 text-white rounded-md "
                : ""
            }`}
          >
            Top {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
