import Image from "next/image";
import RatingStar from "./rating-star";

export default function RecipeCard({
  name = "Name",
  image = "https://cdn.dummyjson.com/recipe-images/1.webp",
  rating = 0,
}) {
  return (
    <div className="flex flex-col items-center border-2 border-black/10 rounded-md p-2 group hover:border-black transition-all">
      <article className="flex flex-col justify-around  h-64  w-44 p-2">
        <Image
          src={image}
          height={100}
          width={100}
          alt="recipe image"
          className="size-44 object-contain"
        />
        <h3>{name}</h3>

        <RatingStar rating={rating} />
      </article>
      <div className="bg-black/30 group-hover:bg-black h-[0.25em] w-10 rounded-sm "></div>
    </div>
  );
}
