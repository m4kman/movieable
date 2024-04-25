import React from "react";

import Image from "next/image";

interface MovieData {
  movieData: {
    id: number;
    title: string;
    name?: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    vote_average: number;
  };
}

function MovieCard({ movieData }: MovieData) {
  return (
    <div className="flex max-h-fit flex-col items-center rounded-lg bg-card shadow shadow-border">
      <div className="relative">
        <Image
          width={300}
          height={300}
          className="clip-movie-image h-full w-full rounded-t-lg object-cover"
          src={`https://image.tmdb.org/t/p/w780/${movieData.backdrop_path}`}
          alt="Movie Backdrop Image"
        />
        <p
          className="absolute bottom-[-5px] left-0 right-0 mx-auto max-w-fit rounded-full bg-primary
            p-4 font-medium"
        >
          {movieData.vote_average.toFixed(1)}
        </p>
      </div>
      <div
        className="mb-8 mt-8 flex h-full flex-col content-center justify-between gap-6
          overflow-clip px-6 text-center"
      >
        <h2
          className="my-auto line-clamp-2 scroll-m-20 text-balance text-2xl font-semibold
            tracking-tight"
        >
          {movieData.title ? movieData.title : movieData.name}
        </h2>
        <p className="line-clamp-3 overflow-clip text-balance text-base">
          {movieData.overview}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
