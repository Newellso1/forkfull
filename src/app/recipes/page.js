"use client";

import { fetchRecipes } from "@/lib/recipes";
import { useEffect, useState } from "react";
import RecipeCard from "../components/recipes/recipe-card";
import { sankofa } from "../components/Header";
import MealTypeTag from "../components/recipes/meal-type";
export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      if (data) {
        setRecipes(data.recipes);
      }
    };
    getRecipes();
  }, []);

  const mealTypes = [...new Set(recipes.flatMap((recipe) => recipe.mealType))];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className={`${sankofa.className} text-3xl text-center`}>Recipes</h1>
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="">Meals</h2>
          <ul className="flex gap-2 flex-wrap justify-center">
            {mealTypes.map((type, index) => (
              <li
                key={index}
                className="border-black border-2  p-1 px-2 rounded-xl text-sm select-none cursor-pointer"
              >
                <MealTypeTag type={type} />
              </li>
            ))}
          </ul>
          <button className="border-black border-2 bg-black text-white  p-1 px-2 rounded-xl text-sm select-none cursor-pointer">
            Clear Tags
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="">Sort by</h2>
          <div className="flex gap-5">
            <button className="border-black border-2  p-1 px-2 rounded-xl text-sm select-none cursor-pointer">
              Rating High
            </button>
            <button className="border-black border-2  p-1 px-3 rounded-xl text-sm select-none cursor-pointer">
              Rating Low
            </button>
          </div>
        </div>
      </div>
      <ul className="flex gap-2 md:gap-10 md:w-[50em] md:max-w-[50em] justify-center flex-wrap">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipeCard
              image={recipe.image}
              name={recipe.name}
              rating={recipe.rating}
              id={recipe.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
