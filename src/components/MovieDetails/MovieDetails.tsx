import React from 'react';

import Stars from '../Stars';
import MovieImage from '../MovieImage';
import { DetailsType } from '../../types/types';
import MovieInfo from '../MovieInfo';

interface PropTypes {
  details: DetailsType;
}

function MovieDetails({ details }: PropTypes) {
  const allImages = details.images.backdrops;

  const backdropsList = [];
  for (let i = 5; i <= 10; i++) {
    backdropsList.push(allImages[i].file_path);
  }

  const trailer = details.videos.results.find(
    (video) => video.name === 'Official Trailer'
  );

  return (
    <div className="text-slate-11 px-8">
      <h1 className="text-6xl text-slate-12">{details.title}</h1>
      <div className="flex gap-3 mt-3">
        <div className="mt-1">
          <Stars rating={details.vote_average} />
        </div>
        <p className="mt-[6px]">{details.vote_count} Ratings</p>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-5 justify-items-start">
        <div className="info">
          <p className="text-balance mb-5">{details.tagline}</p>
          <div className="max-w-[13ch] border-b border-b-slate-11"></div>
          <div className="text-balance mt-5 max-w-[55ch]">
            {details.overview}
          </div>
          <div className="mt-8">
            <MovieInfo
              genres={details.genres}
              release_date={details.release_date}
              runtime={details.runtime}
              spoken_languages={details.spoken_languages}
            />
          </div>
        </div>
        <div className="poster max-h-[600px] justify-self-center">
          <img
            className="rounded-2xl h-full"
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt="Movie Poster"
          />
        </div>
        <div className="gallery">
          <div className="mt-3">
            <a
              href={`https://youtube.com/watch?v=${trailer?.key}`}
              className="border border-indigo-6 rounded-xl px-5 py-3"
            >
              Watch Trailer
            </a>
          </div>
          <div className="mt-9">
            <h3 className="text-lg">Images</h3>
            <div className="grid grid-cols-3 gap-3 grayscale-[25%] mt-4">
              {backdropsList.map((imgSrc) => (
                <MovieImage key={imgSrc} imgSrc={imgSrc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
