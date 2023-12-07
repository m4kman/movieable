import * as React from 'react';

function MovieCard() {
  return (
    <>
      <h1>lol</h1>
      <div className="flex flex-col max-w-[350px] bg-indigo-3 rounded-lg mx-auto mt-4">
        <div className="w-full h-[125px] max-h-[auto]">
          <img
            className="w-full rounded-t-lg clip-movie-image object-cover"
            src="https://image.tmdb.org/t/p/w500/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg"
            alt="Movie Backdrop Image"
          />
        </div>
        <div className="text-center px-8 pb-8 z-50">
          <p className="text-xl bg-indigo-9 max-w-fit mx-auto p-6 rounded-full">
            8.5
          </p>
          <h2 className="text-2xl my-5">Pulp Fiction</h2>
          <p className="text-base line-clamp-3">
            A burger-loving hit man, his philosophical partner, a drug-addled
            gangster's moll and a washed-up boxer converge in this sprawling,
            comedic crime caper. Their adventures unfurl in three stories that
            ingeniously trip back and forth in time.
          </p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
