"use client";
import * as React from "react";
import Image from "next/image";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function MovieImage({
  imgSrc,
  width,
  height,
}: {
  imgSrc: string;
  width: number;
  height: number;
}) {
  return (
    <Zoom key={imgSrc} classDialog="zoom-background">
      <Image
        width={width}
        height={height}
        className="rounded-lg object-cover"
        src={`https://image.tmdb.org/t/p/w1280${imgSrc}`}
        alt="Movie stills"
      />
    </Zoom>
  );
}

export default MovieImage;
