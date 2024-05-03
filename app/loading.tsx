import { Skeleton } from "@/app/ui/skeleton";
import range from "@/app/lib/range";

function Loading() {
  return (
    <div>
      <Skeleton className="h-[30rem] w-full" />
      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Trending
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {range(5).map((idx: number) => (
            <Skeleton key={idx} className="h-[350px] w-[240px]" />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Top Rated
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {range(5).map((idx: number) => (
            <Skeleton key={idx} className="h-[350px] w-[240px]" />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h2 className="mb-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Popular
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {range(5).map((idx: number) => (
            <Skeleton key={idx} className="h-[350px] w-[240px]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loading;
