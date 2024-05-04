import { Skeleton } from "@/app/ui/skeleton";
import range from "@/app/lib/range";

function Loading() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {range(15).map((idx: number) => (
        <Skeleton
          key={idx}
          className="h-[450px] w-[310px] md:h-[350px] md:w-[220px]"
        />
      ))}
    </div>
  );
}

export default Loading;
