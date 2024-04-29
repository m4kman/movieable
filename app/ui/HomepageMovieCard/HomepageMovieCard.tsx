"use client";
import React from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

function HomepageMovieCard({
  data,
}: {
  data: {
    poster_path: string;
    id: number;
    type: string;
    title?: string;
    name?: string;
    vote_average: number;
  };
}) {
  const variants = {
    initial: { opacity: 0, scale: 0, y: 50 },
    hover: {
      opacity: 1,
      scale: 1.01,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 20,
        stiffness: 150,
      },
    },
  };

  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="h-full w-full rounded-lg"
    >
      <Link
        href={`/movie/${data.id}?type=${data.type ? data.type : "movie"}`}
        className="relative z-50 flex h-full min-h-full w-full flex-col rounded-lg
          transition-transform duration-500 hover:scale-[1.05]"
      >
        <Image
          className="h-full w-full overflow-hidden rounded-lg object-cover shadow-sm shadow-border"
          src={`https://image.tmdb.org/t/p/w780${data.poster_path}`}
          alt="Movie Poster"
          width={300}
          height={400}
        />
        <motion.div
          variants={variants}
          className="absolute -bottom-0 flex w-full justify-between gap-3 bg-background/90 px-3 py-8
            font-semibold backdrop-blur-sm"
        >
          <div className="flex h-full flex-col justify-evenly gap-[2px] rounded-lg px-3">
            <span className="text-xl">
              {data.title ? data.title : data.name}
            </span>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#5a57fa"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#5a57fa"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              <span className="font-semibold tracking-widest">
                <span>{data.vote_average.toFixed(1)}</span>
              </span>
            </div>
          </div>
          <div className="mr-2 flex items-center self-center rounded-lg bg-primary p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default HomepageMovieCard;
