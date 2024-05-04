import React from "react";
import Link from "next/link";

import HomepageMovieCard from "@/app/ui/HomepageMovieCard";
import getAPIData from "@/app/lib/useAPI";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams.q;
  const { results: searchData } = await getAPIData(
    `/search/multi?query=${query}`,
  );

  const filteredData = searchData.filter(
    (movie: {
      backdrop_path: string;
      vote_average: number;
      overview: string;
    }) =>
      movie.backdrop_path !== null &&
      movie.vote_average !== 0 &&
      movie.overview,
  );

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {filteredData.map(
        (movieData: {
          id: number;
          title: string;
          name?: string;
          media_type: string;
          backdrop_path: string;
          poster_path: string;
          overview: string;
          vote_average: number;
        }) => (
          <Link
            href={`/movie/${movieData.id}?type=${movieData.media_type ? movieData.media_type : "movie"}`}
            key={movieData.id}
          >
            <HomepageMovieCard data={movieData} />
          </Link>
        ),
      )}
    </div>
  );
}
