import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/ui/carousel";

import HomepageMovieCard from "../HomepageMovieCard";

interface HomepageMoviesProps {
  data: { poster_path: string; id: number; type: string }[];
}

function HomepageMovies({ data }: HomepageMoviesProps) {
  return (
    <Carousel opts={{ align: "start" }} className="w-full">
      <CarouselContent>
        {data.map((movie, idx) => (
          <CarouselItem className="basis-1/5" key={idx}>
            <HomepageMovieCard data={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default HomepageMovies;
