import React from "react";

import Link from "next/link";
import Image from "next/image";

import MovieRating from "@/app/ui/Rating";
import MovieImage from "@/app/ui/MovieImage";
import MovieInfo from "@/app/ui/MovieInfo";
import { Button } from "@/app/ui/button";

import { DetailsType } from "@/app/types/types";

interface PropTypes {
  details: DetailsType;
}

function MovieDetails({ details }: PropTypes) {
  const allBackdrops = details.images.backdrops;

  const backdropsList = [];
  for (let i = 0; i < 6; i++) {
    backdropsList.push(allBackdrops[i]);
  }

  const trailer = details.videos.results.find(
    (video) => video.name === "Official Trailer",
  );

  return (
    <div className="mt-6 tracking-wide text-foreground">
      <h1 className="text-6xl font-semibold">
        {details.title ? details.title : details.name}
      </h1>
      <div className="mt-5 flex gap-3">
        <div className="mt-1">
          <MovieRating rating={details.vote_average} />
        </div>
        <p className="mt-[6px]">{details.vote_count} Ratings</p>
      </div>
      <div className="mt-5 grid grid-cols-3 justify-items-start gap-6">
        <div className="info">
          <p
            className={
              details.tagline
                ? "mb-5 text-balance"
                : "mb-5 text-balance text-muted-foreground"
            }
          >
            {details.tagline ? details.tagline : "No tagline present."}
          </p>
          <div className="max-w-[13ch] border-b border-b-border" />
          <p className="mt-5 max-w-[55ch] text-balance">{details.overview}</p>
          <div className="mt-8">
            <MovieInfo
              genres={details.genres}
              release_date={details.release_date}
              runtime={details.runtime}
              spoken_languages={details.spoken_languages}
            />
          </div>
        </div>
        <div
          className="relative h-full max-h-[600px] min-h-[500px] w-full max-w-full
            justify-self-center rounded-lg border border-border"
        >
          <Image
            fill
            sizes="100%"
            className="h-full w-full rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt="Movie Poster"
            priority={true}
          />
        </div>
        <div className="gallery">
          <Button asChild className="py-5">
            <Link href={`https://youtube.com/watch?v=${trailer?.key}`}>
              Watch Trailer
            </Link>
          </Button>
          <div className="mt-9">
            <h3 className="text-lg">Images</h3>
            <div className="mt-4 grid grid-cols-3 gap-3 grayscale-[25%]">
              {backdropsList.map((image, idx) => (
                <MovieImage
                  key={idx}
                  imgSrc={image.file_path}
                  width={image.width}
                  height={image.height}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
