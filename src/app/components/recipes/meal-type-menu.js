"use client";

import { useState, useEffect } from "react";
import MealTypeTag from "./meal-type";
import { fetchRecipes } from "@/lib/recipes";

export default function MealTypeMenu({ addFilter, recipeFilters }) {
  const [recipes, setRecipes] = useState([]);

  const mealTypes = [...new Set(recipes.flatMap((recipe) => recipe.mealType))];

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      if (data) {
        setRecipes(data.recipes);
      }
    };
    getRecipes();
  }, []);

  return (
    <div>
      <ul className="flex gap-2 flex-wrap justify-center">
        {mealTypes.map((type, index) => (
          <li
            key={index}
            className={`
        border-black border-2 ${
          recipeFilters.includes(type) ? "bg-black text-white" : ""
        } p-1 px-2 rounded-xl text-sm select-none cursor-pointer
      `}
            onClick={() => addFilter(type)}
          >
            <MealTypeTag type={type} />
          </li>
        ))}
      </ul>
    </div>
  );
}
