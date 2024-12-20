import Image from "next/image";

export default function RatingStar({ rating = 4.5 }) {
  const starNumber = Math.floor(rating);
  const remainder =
    rating.toString().length > 1 && Number(rating.toString().slice(2));
  const emptyStarNumber = 5 - starNumber;

  const emptyStar = (
    <svg
      fill="none"
      height="20"
      width="20"
      stroke="black"
      opacity=""
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
      {remainder ? (
        <>
          {Array.from({ length: starNumber }).map((_, index) => (
            <span key={index}>{emptyStar}</span>
          ))}
          <span className=" relative overflow-hidden ">
            <div className="">{emptyStar}</div>
            <div
              className={`size-full absolute top-0 left-${
                remainder >= 8
                  ? `3/4`
                  : remainder >= 6
                  ? `2/4`
                  : remainder >= 4
                  ? `[px]`
                  : ``
              }  bg-white opacity-60`}
            ></div>
          </span>
          <div className="flex">
            {Array.from({ length: emptyStarNumber }).map((_, index) => (
              <span key={index} className={`opacity-50`}>
                {emptyStar}
              </span>
            ))}
          </div>
        </>
      ) : (
        <>
          {Array.from({ length: starNumber }).map((_, index) => (
            <span key={index}>{emptyStar}</span>
          ))}
        </>
      )}
      <span className="ml-1">({rating})</span>
    </div>
  );
}

{
  /* <div className="flex">
{Array.from({ length: starNumber }).map((_, index) => (
  <span className="" key={index}>
    {emptyStar}
  </span>
))}
<div className="bg-gray-300 relative overflow-hidden ">
  <div>{emptyStar}</div>
  <div className="size-full absolute top-0 left-2/4  bg-black"></div>
</div>
<div>{rating}</div>
</div> */
}
