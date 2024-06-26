import React from "react";

import HeroCarousel from "@/app/ui/Hero/HeroCarousel";
import HomepageMovies from "@/app/ui/HomepageMovies";

import getAPIData from "@/app/lib/useAPI";

async function Homepage() {
  const { results: trendingMovies } = await getAPIData("/trending/all/week");
  const { results: popularMovies } = await getAPIData("/movie/popular");
  const { results: topRatedMovies } = await getAPIData("/movie/top_rated");

  return (
    <>
      <HeroCarousel data={trendingMovies} />
      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 font-semibold tracking-tight ~text-xl/3xl">
          Trending
        </h2>
        <HomepageMovies data={trendingMovies} />
      </div>

      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 font-semibold tracking-tight ~text-xl/3xl">
          Top Rated
        </h2>
        <HomepageMovies data={topRatedMovies} />
      </div>

      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 font-semibold tracking-tight ~text-xl/3xl">
          Popular
        </h2>
        <HomepageMovies data={popularMovies} />
      </div>
    </>
  );
}

export default Homepage;
