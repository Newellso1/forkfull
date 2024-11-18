"use client";

import { fetchRecipes } from "@/lib/recipes";
import { useEffect, useState } from "react";
import RecipeCard from "../components/recipes/recipe-card";

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
  });

  return (
    <div className="">
      <h1>Recipes</h1>
      <ul className="flex gap-2 md:gap-10 md:w-[50em] md:max-w-[50em] justify-center flex-wrap">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <RecipeCard
              image={recipe.image}
              name={recipe.name}
              rating={recipe.rating}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
