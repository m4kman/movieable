import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/ui/carousel";
import HeroNew from "./HeroNew";

import getAPIData from "@/app/lib/useAPI";

async function HeroCarousel() {
  const { results: data } = await getAPIData(
    "/trending/all/week?language=en-US",
  );
  const heroMovies = data.slice(0, 7);

  return (
    <Carousel>
      <CarouselContent>
        {heroMovies.map(
          (
            movie: {
              title?: string;
              name?: string;
              backdrop_path: string;
              vote_average: number;
              overview: string;
              id: number;
              media_type?: string;
              type?: string;
            },
            idx: number,
          ) => (
            <CarouselItem key={idx}>
              <HeroNew data={movie} />
            </CarouselItem>
          ),
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default HeroCarousel;
