import { Skeleton } from "@/app/ui/skeleton";
import range from "@/app/lib/range";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/ui/carousel";

function Loading() {
  return (
    <div>
      <Skeleton className="w-full ~h-[20rem]/[30rem]" />

      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 font-semibold tracking-tight ~text-xl/3xl first:mt-0">
          Trending
        </h2>
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {range(5).map((idx: number) => (
              <CarouselItem
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5"
                key={idx}
              >
                <Skeleton className="h-[450px] w-[310px] md:h-[350px] md:w-[220px]" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 font-semibold tracking-tight ~text-xl/3xl first:mt-0">
          Top Rated
        </h2>
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {range(5).map((idx: number) => (
              <CarouselItem
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5"
                key={idx}
              >
                <Skeleton className="h-[450px] w-[310px] md:h-[350px] md:w-[220px]" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 font-semibold tracking-tight ~text-xl/3xl first:mt-0">
          Popular
        </h2>
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {range(5).map((idx: number) => (
              <CarouselItem
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5"
                key={idx}
              >
                <Skeleton className="h-[450px] w-[310px] md:h-[350px] md:w-[220px]" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
export default Loading;
