"use client";

import { useEffect, useState } from "react";
import { fetchRecipes } from "@/lib/recipes";
import Image from "next/image";

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
      <Image src="/images/forkfull_1.jpg" width={500} height={500} alt="meal" />
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}
