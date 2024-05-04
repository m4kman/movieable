import getAPIData from "@/app/lib/useAPI";
import HomepageMovieCard from "@/app/ui/HomepageMovieCard";

export default async function Home({ params }: { params: { slug: string } }) {
  const { results: data } = await getAPIData(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${params.slug}`,
  );

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {data.map((movie: any) => {
        return <HomepageMovieCard key={movie.id} data={movie} />;
      })}
    </div>
  );
}
