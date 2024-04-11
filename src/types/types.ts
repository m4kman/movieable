export interface DetailsType {
  title: string;
  release_date: string;
  runtime: number;
  overview: string;
  tagline?: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
<<<<<<< HEAD
  spoken_languages: [{ english_name: string }];
  genres: [{ name: string }];
  images: { backdrops: [{ file_path: string }] };
  videos: { results: [{ name: string; key: string }] };
=======
  images: { backdrops: [{ file_path: string }] };
>>>>>>> main
}
