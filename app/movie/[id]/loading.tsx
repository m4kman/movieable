import { Skeleton } from "@/app/ui/skeleton";
import range from "@/app/lib/range";

function Loading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-[85px] w-[350px]" />
      <div className="flex space-x-3">
        <div className="mt-1">
          <Skeleton className="h-[30px] w-[225px]" />
        </div>
      </div>
      <div
        className="grid justify-items-start gap-6 md:grid-cols-2 md:grid-rows-2
          lg:grid-cols-[1fr_1.1fr_1fr] xl:grid-cols-3"
      >
        <div className="info space-y-8">
          <Skeleton className="w-[120px] md:h-[40px] md:w-[200] xl:h-[25px]" />
          <div className="max-w-[13ch] border-b border-b-border" />
          <Skeleton className="h-[120px] w-[350px] lg:w-[280px] xl:w-[360px]" />
          <div className="space-y-8">
            <Skeleton className="md:h-[120px] lg:w-[220px] xl:w-[360px]" />
          </div>
        </div>
        <div
          className="relative order-first row-span-2 h-[400px] max-h-[575px] w-full max-w-[300px]
            rounded-lg border border-border md:order-none md:h-full md:max-w-full
            md:justify-self-center"
        >
          <Skeleton className="h-full w-full" />
        </div>
        <div className="gallery">
          <Skeleton className="h-[40px] w-[120px]" />
          <div className="space-y-9">
            <h3 className="text-lg">Images</h3>
            <div className="grid grid-cols-3 gap-3 grayscale-[25%]">
              {range(6).map((idx: number) => (
                <Skeleton key={idx} className="h-[60px] w-[110px]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
