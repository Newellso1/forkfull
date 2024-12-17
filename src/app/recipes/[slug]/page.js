import { fetchRecipes } from "@/lib/recipes";
import Image from "next/image";
import { sankofa } from "@/app/components/Header";
import recipeDescriptions from "@/lib/descriptions";
import RatingStar from "@/app/components/recipes/rating-star";
import RecipeTag from "@/app/components/individual-recipe/recipe-tag";
import ScrollButton from "@/app/components/individual-recipe/scroll-button";

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
    <div className="md:px-60">
      <ScrollButton section="recipe" />
      <div className="relative ">
        <Image
          src={recipeInfo.image}
          height={500}
          width={500}
          alt="recipe image"
          className="md:w-full md:"
        ></Image>
      </div>
      <section className="mt-2 flex flex-col gap-2 p-2">
        <h1 className={`${sankofa.className} text-3xl font-bold`}>
          {recipeInfo.name}
        </h1>
        <article className="flex flex-col gap-2 text-lg">
          {description.description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </article>
      </section>
      <section className="m-4 border-2 relative border-black">
        <div id="recipe" className="absolute -top-24"></div>
        <div className="relative">
          <Image
            src={recipeInfo.image}
            height={500}
            width={500}
            alt="recipe image"
            className="w-full"
          ></Image>
          <div className="absolute bottom-5 left-5 flex flex-col gap-2 drop-shadow-md shadow-black ">
            <h3 className="bg-white text-2xl w-fit p-1 px-2  rounded-sm">
              {recipeInfo.name}
            </h3>
            <div className="bg-white w-fit p-1 px-2 rounded-sm">
              <RatingStar rating={recipeInfo.rating} />
            </div>
            <div className="flex gap-2">
              <ul className="flex flex-wrap gap-2">
                {recipeInfo.tags.map((tag, index) => (
                  <li key={index}>
                    <RecipeTag tag={tag} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col [&>*]:text-center [&>*]:p-2 [&>*]:border-b-2 [&>*]:border-black [&>*]:text-sm [&>*]:tracking-wide">
          <p className="border-t-2">
            Prep Time:
            <br />
            {recipeInfo.prepTimeMinutes} minutes
          </p>
          <p>
            Cook Time:
            <br />
            {recipeInfo.cookTimeMinutes} minutes
          </p>
          <p>
            Total Time:
            <br />
            {recipeInfo.prepTimeMinutes + recipeInfo.cookTimeMinutes} minutes
          </p>
        </div>
        <div className="flex [&>*]:w-1/2 [&>*]:text-sm [&>*]:text-center [&>*]:p-2 border-b-2  border-black">
          <div className="border-r-2 border-black">
            Servings: {recipeInfo.servings}
          </div>

          <div>{recipeInfo.caloriesPerServing}kl per serving</div>
        </div>
        <div className="p-2">
          <ul className="flex flex-col m-2 gap-2">
            <h4 className="text-xl underline">Ingredients</h4>
            {recipeInfo.ingredients.map((ingr, index) => (
              <li key={index} className="flex gap-2 items-center">
                <div className="size-1 bg-black rounded-full"></div>
                {ingr}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col m-2 gap-2">
            <h4 className="text-xl underline">Instructions</h4>
            {recipeInfo.instructions.map((step, index) => (
              <li key={index} className="flex gap-1">
                <div className="">{`${index + 1}.`}</div>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
