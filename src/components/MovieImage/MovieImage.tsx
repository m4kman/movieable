import * as React from 'react';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function MovieImage({ imgSrc }: { imgSrc: string }) {
  return (
    <Zoom key={imgSrc} classDialog="zoom-background">
      <img
        className="rounded-lg object-cover"
        src={`https://image.tmdb.org/t/p/w1280${imgSrc}`}
        alt="Movie stills"
      />
    </Zoom>
  );
}

export default MovieImage;
