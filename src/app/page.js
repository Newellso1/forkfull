"use client";

import { useEffect, useState } from "react";
import { fetchRecipes } from "@/lib/recipes";
import Image from "next/image";
import { sankofa } from "./components/Header";

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
      <section>
        <div>
          <Image
            src="/images/forkfull_1.jpg"
            width={500}
            height={500}
            alt="meal"
          />
        </div>
        <div className=" border-y-2 my-4 border-black flex flex-col gap-4 p-4">
          <div className="flex justify-center gap-4 items-center">
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
                I am Thor, a Viking food explorer, and if you've made it this
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
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}
