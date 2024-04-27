import MovieDetails from "@/app/ui/MovieDetails";
import getAPIData from "@/app/lib/useAPI";

async function Home({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  let endpoint = `/movie/${params.id}`;

  if (searchParams.type === "tv") {
    endpoint = `/tv/${params.id}`;
  }

  const movieDetails = await getAPIData(
    `${endpoint}?append_to_response=videos,images&include_image_language=null`,
  );

  return <MovieDetails details={movieDetails} />;
}

export default Home;
