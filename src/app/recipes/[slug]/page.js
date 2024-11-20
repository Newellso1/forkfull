import { fetchRecipes } from "@/lib/recipes";
import Image from "next/image";
import { sankofa } from "@/app/components/Header";
import recipeDescriptions from "@/lib/descriptions";

export default async function IndividualRecipe({ params }) {
  const { slug } = params;
  const recipeSlug = await parseInt(slug);
  const data = await fetchRecipes();
  const recipeInfo = data.recipes.find((recipe) => recipe.id === recipeSlug);

  const description = recipeDescriptions.find(
    (description) => description.id === recipeSlug
  );

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
      <div>
        {description.description.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
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
