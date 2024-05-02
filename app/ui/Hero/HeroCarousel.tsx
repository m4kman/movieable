"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/ui/carousel";
import Hero from "./Hero";

function HeroCarousel({ data }: { data: any[] }) {
  const heroMovies = data.slice(0, 7);
  return (
    <Carousel plugins={[Autoplay({ delay: 4000, stopOnMouseEnter: true })]}>
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
            <CarouselItem className="basis-full" key={idx}>
              <Hero data={movie} />
            </CarouselItem>
          ),
        )}
      </CarouselContent>
      <CarouselPrevious className="border-none" icon="ChevronLeft" />
      <CarouselNext className="border-none" icon="ChevronRight" />
    </Carousel>
  );
}

export default HeroCarousel;
