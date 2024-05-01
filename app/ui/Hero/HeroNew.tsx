import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/app/ui/button";

function HeroNew({
  data,
}: {
  data: {
    title?: string;
    name?: string;
    backdrop_path: string;
    vote_average: number;
    overview: string;
    id: number;
    media_type?: string;
    type?: string;
  };
}) {
  return (
    <div className="mt-14 grid h-full min-h-[30rem] grid-cols-[1.5fr_2fr]">
      <div className="z-[999999] flex flex-col justify-center pl-4 shadow-[15px_1px_4px_6px_#06060e]">
        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0">
          {data.title ? data.title : data.name}
        </h1>
        <div className="mt-2 flex items-start gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="hsl(var(--primary))"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="hsl(var(--primary))"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <span className="font-medium text-foreground/80">
            {data.vote_average.toFixed(1)} Rating
          </span>
        </div>
        <p
          className="line-clamp-3 max-w-[80%] text-balance leading-7 text-foreground/90
            [&:not(:first-child)]:mt-6"
        >
          {data.overview}
        </p>
        <Link
          href={`/movie/${data.id}?type=${data.media_type ? data.media_type : data.type}`}
          className="mt-6"
        >
          <Button type="button" className="p-6 text-base">
            View Details
          </Button>
        </Link>
      </div>
      <div
        className="relative h-full w-full rounded-lg bg-gradient-to-r from-background from-[10%]
          to-transparent to-30%"
      >
        <Image
          priority
          className="z-[-50] h-full w-full rounded-lg object-cover"
          src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
          alt={`${data.title} Backdrop`}
          fill
        />
      </div>
    </div>
  );
}

export default HeroNew;
