import React from "react";

import Hero from "@/app/ui/Hero";
import HomepageMovies from "@/app/ui/HomepageMovies";

import getAPIData from "@/app/lib/useAPI";

async function Homepage() {
  const { results: trendingMovies } = await getAPIData("/trending/all/week");
  const { results: popularMovies } = await getAPIData("/movie/popular");
  const { results: topRatedMovies } = await getAPIData("/movie/top_rated");

  return (
    <>
      <Hero />
      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Trending
        </h2>
        <HomepageMovies data={trendingMovies} />
      </div>

      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Top Rated
        </h2>
        <HomepageMovies data={topRatedMovies} />
      </div>

      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Popular
        </h2>
        <HomepageMovies data={popularMovies} />
      </div>
    </>
  );
}

export default Homepage;
