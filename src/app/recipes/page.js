"use client";

import { fetchRecipes } from "@/lib/recipes";
import { useEffect, useState } from "react";
import RecipeCard from "../components/recipes/recipe-card";
import { sankofa } from "../components/Header";
import MealTypeTag from "../components/recipes/meal-type";
import MealTypeMenu from "../components/recipes/meal-type-menu";
export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [recipeFilters, setRecipeFilters] = useState([]);
  const [sortOrder, setSortOrder] = useState("high");
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

  const addFilter = (filter) => {
    if (!recipeFilters.includes(filter)) {
      setRecipeFilters((prevFilters) => [...prevFilters, filter]);
    } else {
      setRecipeFilters((prevFilters) =>
        prevFilters.filter((item) => item !== filter)
      );
    }
  };

  const clearFilters = () => {
    setRecipeFilters([]);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.mealType.some((type) => recipeFilters.includes(type))
  );

  const sortedRecipes = [
    ...(filteredRecipes.length ? filteredRecipes : recipes).sort((a, b) => {
      if (sortOrder === "high") {
        return b.rating - a.rating;
      } else {
        return a.rating - b.rating;
      }
    }),
  ];

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-2">
        <h1 className={`${sankofa.className} text-3xl text-center`}>Recipes</h1>
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="">Meals</h2>
          <MealTypeMenu addFilter={addFilter} recipeFilters={recipeFilters} />

          <button
            className="border-black border-2 bg-black text-white  p-1 px-2 rounded-xl text-sm select-none cursor-pointer"
            onClick={() => clearFilters()}
          >
            Clear Tags
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="">Sort by</h2>
          <div className="flex gap-5">
            <button
              onClick={() => setSortOrder("high")}
              className={`border-black border-2 ${
                sortOrder === "high" && `bg-black text-white`
              } p-1 px-2 rounded-xl text-sm select-none cursor-pointer`}
            >
              Rating High
            </button>
            <button
              onClick={() => setSortOrder("low")}
              className={`border-black border-2 ${
                sortOrder === "low" && `bg-black text-white`
              } p-1 px-2 rounded-xl text-sm select-none cursor-pointer`}
            >
              Rating Low
            </button>
          </div>
        </div>
      </div>
      <ul className="flex gap-2 md:gap-10 md:w-[50em] md:max-w-[50em] justify-center flex-wrap border-2 border-black">
        {sortedRecipes.map((recipe) => (
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
