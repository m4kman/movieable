import * as React from "react";

import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

function MovieRating({ rating }: { rating: number }) {
  return (
    <Rating
      style={{ maxWidth: "120px" }}
      value={rating / 2}
      halfFillMode="svg"
      readOnly={true}
      itemStyles={{
        itemShapes: RoundedStar,
        activeFillColor: "hsl(241, 94%, 66%)",
        inactiveFillColor: "hsl(211, 15%, 14%)",
      }}
    />
  );
}

export default MovieRating;
