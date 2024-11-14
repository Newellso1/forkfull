import Image from "next/image";

export default function RecipeCard({
  name = "Name",
  image = "https://cdn.dummyjson.com/recipe-images/1.webp",
  rating = 0,
}) {
  return (
    <article className="flex flex-col border-2 border-black w-44 p-2">
      <Image
        src={image}
        height={100}
        width={100}
        alt="recipe image"
        className="size-44 object-contain"
      />
      <h3>{name}</h3>
      <p>{rating}</p>
    </article>
  );
}
