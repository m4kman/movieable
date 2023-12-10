import React from 'react';

import MovieCard from '../MovieCard';
import MovieDetails from '../MovieDetails';
import { DetailsType } from '../../types/types';

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

  function handleClick() {
    setIsShowingCards(false);
    setSearchResults([]);
  }

  return (
    <>
      {isShowingDetails ? (
        <MovieDetails details={movieDetails} />
      ) : (
        <>
          <button
            className="flex gap-2 px-8 mb-10 cursor-pointer"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <span>Go Back</span>
          </button>

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
