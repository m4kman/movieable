import React from "react";

import MovieCard from "../MovieCard";
import MovieDetails from "../MovieDetails";
import { DetailsType } from "../../types/types";
import GoBack from "../GoBack";

interface PropTypes {
  movieData: MovieData[];
  setIsShowingCards: (b: boolean) => void;
  setSearchResults: (a: []) => void;
}

interface MovieData {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  vote_average: number;
}

function SearchResults({
  movieData,
  setIsShowingCards,
  setSearchResults,
}: PropTypes) {
  const [isShowingDetails, setIsShowingDetails] = React.useState(false);
  const [movieDetails, setMovieDetails] = React.useState({} as DetailsType);

  const filteredMovieData = movieData.filter(
    (movie) => movie.backdrop_path !== null
  );

  function goToHome() {
    setIsShowingCards(false);
    setSearchResults([]);
  }

  function goToCards() {
    setIsShowingDetails(false);
  }

  return (
    <>
      {isShowingDetails ? (
        <>
          <GoBack handler={goToCards} />
          <MovieDetails details={movieDetails} />
        </>
      ) : (
        <>
          <GoBack handler={goToHome} />
          <div className="flex gap-5 flex-wrap px-8 pb-12">
            {filteredMovieData.map(
              (movie: MovieData): JSX.Element => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  imgSrc={movie.backdrop_path}
                  movieTitle={movie.original_title}
                  movieDescription={movie.overview}
                  movieRating={movie.vote_average}
                  setMovieDetails={setMovieDetails}
                  setIsShowingDetails={setIsShowingDetails}
                />
              )
            )}
          </div>
        </>
      )}
    </>
  );
}

export default SearchResults;
