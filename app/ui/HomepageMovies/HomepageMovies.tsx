import React from "react";

import range from "@/app/lib/range";
import HomepageMovieCard from "../HomepageMovieCard";

interface HomepageMoviesProps {
  data: { poster_path: string; id: number; type: string }[];
}

function HomepageMovies({ data }: HomepageMoviesProps) {
  return (
    <div className="grid grid-cols-5 gap-8">
      {range(5).map((idx) => (
        <HomepageMovieCard data={data[idx]} key={idx} />
      ))}
    </div>
  );
}

export default HomepageMovies;
