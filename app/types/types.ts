export interface DetailsType {
  title?: string;
  name?: string;
  release_date: string;
  runtime: number;
  overview: string;
  tagline?: string;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  spoken_languages: [{ english_name: string }];
  genres: [{ name: string }];
  images: {
    backdrops: [{ file_path: string; width: number; height: number }];
  };
  videos: { results: [{ name: string; key: string }] };
}
