"use client";

import { useEffect, useState } from "react";
import { fetchRecipes } from "@/lib/recipes";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      if (data) setRecipes(data.recipes);
    };
    getRecipes();
  }, []);

  return (
    <div>
      <h1 className=" text-blue-500">Recipe Website</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}
