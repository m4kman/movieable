import React from "react";

import Hero from "@/app/ui/Hero";
import HomepageMovies from "@/app/ui/HomepageMovies";

import getAPIData from "@/app/lib/useAPI";

async function Homepage() {
  const { results: trendingMovies } = await getAPIData("/trending/all/week");
  const { results: popularMovies } = await getAPIData("/movie/popular");
  const { results: topRatedMovies } = await getAPIData("/movie/top_rated");

  function filterByPopularity(
    data: {
      poster_path: string;
      popularity: number;
      id: number;
      vote_average: number;
      media_type: string;
    }[],
    type: string,
  ) {
    if (type === "popularity") {
      const sortedData = data.sort((a, b) => b.popularity - a.popularity);
      const filteredData = sortedData.slice(0, 5).map((item) => {
        return { poster: item.poster_path, id: item.id, type: item.media_type };
      });
      return filteredData;
    }
    const sortedData = data.sort((a, b) => b.vote_average - a.vote_average);
    const filteredData = sortedData.slice(0, 5).map((item) => {
      return { poster: item.poster_path, id: item.id, type: item.media_type };
    });
    return filteredData;
  }

  const trending = filterByPopularity(trendingMovies, "popularity");
  const popular = filterByPopularity(popularMovies, "popularity");
  const topRated = filterByPopularity(topRatedMovies, "rating");

  return (
    <>
      <Hero />
      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Trending
        </h2>
        <HomepageMovies data={trending} />
      </div>

      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Top Rated
        </h2>
        <HomepageMovies data={topRated} />
      </div>

      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Popular
        </h2>
        <HomepageMovies data={popular} />
      </div>
    </>
  );
}

export default Homepage;
