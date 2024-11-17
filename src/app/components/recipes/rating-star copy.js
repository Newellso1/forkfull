import Image from "next/image";

export default function RatingStar({ rating = 4.5 }) {
  const starNumber = Math.floor(rating);
  const remainder =
    rating.toString().length > 1 && Number(rating.toString().slice(2));
  const emptyStar = (
    <svg
      fill="none"
      height="20"
      width="20"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
  return (
    <div className="flex">
      {Array.from({ length: starNumber }).map((_, index) => (
        <span className="" key={index}>
          {emptyStar}
        </span>
      ))}
      <div className="bg-gray-300 relative overflow-hidden ">
        <div>{emptyStar}</div>
        <div className="size-full absolute top-0 left-2/4  bg-black"></div>
      </div>
    </div>
  );
}
