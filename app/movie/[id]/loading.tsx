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
      <div className="grid grid-cols-3 justify-items-start space-x-6 space-y-5">
        <div className="info space-y-8">
          <Skeleton className="h-[25px] w-[250px]" />
          <div className="max-w-[13ch] border-b border-b-border" />
          <Skeleton className="h-[100px] w-[360px]" />
          <div className="space-y-8">
            <Skeleton className="h-[70px] w-[360px]" />
          </div>
        </div>
        <div
          className="relative h-full max-h-[600px] min-h-[500px] w-full max-w-full
            justify-self-center rounded-lg border border-border"
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
