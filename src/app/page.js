"use client";

import { useEffect, useState } from "react";
import { fetchRecipes } from "@/lib/recipes";
import Image from "next/image";
import { sankofa } from "./components/Header";
import RecipeCard from "./components/recipes/recipe-card";

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
      <div
        className={`${sankofa.className} text-3xl flex justify-center items-center p-10 tracking-wider md:text-5xl`}
      >
        <p>Cook - Divide - Conquer</p>
      </div>
      <section className="flex flex-col w-full md:max-h-[36em] md:flex-row md:border-y-2 border-black md:py-6">
        <div className="md:w-1/2 bg-gray-300 flex justify-center">
          <Image
            src="/images/forkfull_1.jpg"
            width={500}
            height={500}
            alt="meal"
            className="md:size-full md:object-cover"
          />
        </div>
        <div className=" border-y-2 my-4 md:my-0 border-black md:border-none flex flex-col justify-center items-center md:p-10 lg:p-20 md:w-1/2  gap-4 md:gap-10 p-4">
          <div className=" flex justify-center gap-4 md:gap-8 items-center">
            <div className=" size-44">
              <Image
                src="/images/profile-picture.jpg"
                width={500}
                height={500}
                alt="Thor in a Kitchen"
                className="rounded-full"
              />
            </div>
            <div>
              <p className="w-48 italic">
                I am Thor, a Viking food explorer, and if you’ve made it this
                far, it means you’re likely as passionate about feasting and
                flavors as I am!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              In a nutshell, VikingFoodSaga is about me, my life in the
              longhouse kitchen, my fierce love for food, and how it fuels my
              Viking spirit. It’s about what I’m cooking now, where I’ve
              feasted, and how each meal has inspired tales of adventure and
              flavor.
            </p>
            <p>Read More...</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 items-center border-b-2 border-black p-4">
        <div className="flex flex-col gap-4 px-4">
          <h2 className={`${sankofa.className} text-5xl text-center `}>
            Recipes
          </h2>
          <p className=" md:w-[40em] md:text-center">
            Welcome to the recipe hoard, where you’ll find dishes inspired by
            Viking traditions, flavors of the far North, and hearty feasts that
            fuel a warrior’s spirit. From simple stews to mighty roasts, these
            recipes bring the taste of adventure and ancient lore right to your
            table. Ready your ingredients, and let’s cook like true Norsemen!
          </p>
        </div>
        <ul>
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
      </section>
    </div>
  );
}
