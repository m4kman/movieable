import React from 'react';
import PropTypes from 'prop-types';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Rating, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import dayjs from 'dayjs';
import getDuration from '../../utils/getDuration';

import { DetailsType } from '../../types/types';

interface PropTypes {
  details: DetailsType;
}

function MovieDetails({ details }: PropTypes) {
  const date = dayjs(details.release_date).format('DD MMMM YYYY');
  const duration = getDuration(details.runtime);
  const allImages = details.images.backdrops;
  console.log(allImages.length);
  console.log('render');
  const backdropsList = [];
  for (let i = 3; i <= 8; i++) {
    backdropsList.push(allImages[i].file_path);
  }

  return (
    <div className="text-slate-11 px-8">
      <h1 className="text-6xl text-slate-12">{details.title}</h1>
      <div className="flex gap-3 mt-2">
        <div className="mt-1">
          <Rating
            style={{ maxWidth: '120px' }}
            value={4}
            readOnly={true}
            itemStyles={{
              itemShapes: RoundedStar,
              activeFillColor: '#d19f51',
              inactiveFillColor: 'gray',
            }}
          />
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
            <div className="grid grid-cols-[1fr_2fr] mb-2">
              <span>Genre</span>
              <span className="text-slate-12">Action, Thriller</span>
            </div>
            <div className="grid grid-cols-[1fr_2fr] mb-2">
              <span>Language</span>
              <span className="text-slate-12">English</span>
            </div>
            <div className="grid grid-cols-[1fr_2fr] mb-2">
              <span>Released</span>
              <span className="text-slate-12">{date}</span>
            </div>
            <div className="grid grid-cols-[1fr_2fr] mb-2">
              <span>Duration</span>
              <span className="text-slate-12">{duration}</span>
            </div>
          </div>
        </div>
        <div className="poster max-h-[600px] justify-self-center">
          <img
            className="rounded-[1.75rem] h-full"
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt="Movie Poster"
          />
        </div>
        <div className="gallery">
          <button
            type="button"
            className="border border-indigo-6 py-2 px-5 rounded-lg"
          >
            Watch Trailer
          </button>

          <div className="mt-5">
            <h3 className="text-lg">Images</h3>
            <div className="grid grid-cols-3 gap-3 grayscale-[25%] mt-4">
              {backdropsList.map((imgSrc) => (
                <Zoom key={imgSrc} classDialog="zoom-background">
                  <img
                    className="rounded-lg object-cover"
                    src={`https://image.tmdb.org/t/p/w1280${imgSrc}`}
                    alt="Image stills"
                  />
                </Zoom>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
