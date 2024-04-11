import * as React from 'react';

import dayjs from 'dayjs';
import getDuration from '../../utils/getDuration';

interface PropTypes {
  genres: { name: string }[];
  spoken_languages: { english_name: string }[];
  release_date: string;
  runtime: number;
}

function MovieInfo({
  genres,
  spoken_languages,
  release_date,
  runtime,
}: PropTypes) {
  const date = dayjs(release_date).format('DD MMMM YYYY');
  const duration = getDuration(runtime);

  const languages = spoken_languages
    .map((lang) => ` ${lang.english_name}`)
    .toString();
  const allGenres = genres.map((genre) => ` ${genre.name}`).toString();
  return (
    <>
      <div className="grid grid-cols-[1fr_2fr] mb-2">
        <span>Genre</span>
        <span className="text-slate-12">{allGenres}</span>
      </div>
      <div className="grid grid-cols-[1fr_2fr] mb-2">
        <span>Language</span>
        <span className="text-slate-12">{languages}</span>
      </div>
      <div className="grid grid-cols-[1fr_2fr] mb-2">
        <span>Released</span>
        <span className="text-slate-12">{date}</span>
      </div>
      <div className="grid grid-cols-[1fr_2fr] mb-2">
        <span>Duration</span>
        <span className="text-slate-12">{duration}</span>
      </div>
    </>
  );
}

export default MovieInfo;