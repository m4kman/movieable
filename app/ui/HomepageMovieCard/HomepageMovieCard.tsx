import React from "react";

import Link from "next/link";
import Image from "next/image";

function HomepageMovieCard({
  data,
}: {
  data: { poster_path: string; id: number; type: string };
}) {
  return (
    <Link href={`/movie/${data.id}?type=${data.type ? data.type : "movie"}`}>
      <Image
        className="h-full rounded-lg shadow-sm shadow-border"
        src={`https://image.tmdb.org/t/p/w780${data.poster_path}`}
        alt="Movie Poster"
        width={200}
        height={300}
      />
    </Link>
  );
}

export default HomepageMovieCard;
