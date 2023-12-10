export interface DetailsType {
  title: string;
  release_date: string;
  runtime: number;
  overview: string;
  tagline?: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  images: { backdrops: [{ file_path: string }] };
}
