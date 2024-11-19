import { fetchRecipes } from "@/lib/recipes";
import Image from "next/image";
import { sankofa } from "@/app/components/Header";

export default async function IndividualRecipe({ params }) {
  const { slug } = params;
  const recipeSlug = parseInt(slug);
  const data = await fetchRecipes();
  const recipeInfo = data.recipes.find((recipe) => recipe.id === recipeSlug);

  if (!recipeInfo) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <Image
        src={recipeInfo.image}
        height={500}
        width={500}
        alt="recipe image"
      ></Image>
      <h1 className={`${sankofa.className}`}>{recipeInfo.name}</h1>
      <p>{recipeInfo.description}</p>
      <ul className="flex flex-col gap-2">
        {recipeInfo.instructions.map((step, index) => (
          <li key={index} className="flex gap-1">
            <div className="">{`${index + 1}.`}</div>
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}
