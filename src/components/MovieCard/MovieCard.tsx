import React from 'react';
import getAPIData from '../../utils/useAPI';

import { DetailsType } from '../../types/types';

interface PropTypes {
  id: number;
  imgSrc: string;
  movieTitle: string;
  movieDescription: string;
  movieRating: number;
  setMovieDetails: (s: React.SetStateAction<DetailsType>) => void;
  setIsShowingDetails: (input: boolean) => void;
}

const DETAILS_ENDPOINT = import.meta.env.VAULT_DETAILS_ENDPOINT;

function MovieCard({
  id,
  imgSrc,
  movieTitle,
  movieDescription,
  movieRating,
  setMovieDetails,
  setIsShowingDetails,
}: PropTypes) {
  async function handleClick(movieID: number) {
    const movieDetails = await getAPIData(
      DETAILS_ENDPOINT,
<<<<<<< HEAD
      `/${movieID}?append_to_response=images,videos`
=======
      `/${movieID}?append_to_response=images`
>>>>>>> main
    );
    setMovieDetails(movieDetails);
    setIsShowingDetails(true);
  }

  return (
    <div
      onClick={() => handleClick(id)}
      className="flex flex-col max-w-[350px] bg-indigo-3 rounded-lg mt-4 cursor-pointer"
    >
      <div className="w-full h-[125px] max-h-[auto]">
        <img
          className="w-full rounded-t-lg clip-movie-image object-cover"
          src={`https://image.tmdb.org/t/p/w500${imgSrc}`}
          alt="Movie Backdrop Image"
        />
      </div>
      <div className="text-center px-8 pb-8 z-50">
        <p className="text-xl bg-indigo-9 max-w-fit mx-auto p-6 rounded-full">
          {movieRating.toFixed(1)}
        </p>
        <h2 className="text-2xl my-5">{movieTitle}</h2>
        <p className="text-base line-clamp-3 text-balance">
          {movieDescription}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
