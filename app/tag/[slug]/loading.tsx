import { Skeleton } from "@/app/ui/skeleton";
import range from "@/app/lib/range";

function Loading() {
  return (
    <div className="grid grid-cols-5 justify-center gap-6">
      {range(15).map((idx: number) => (
        <Skeleton key={idx} className="h-[300px] w-[200px]" />
      ))}
    </div>
  );
}

export default Loading;
