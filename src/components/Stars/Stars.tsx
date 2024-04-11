import * as React from 'react';

import { Rating, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

function Stars({ rating }: { rating: number }) {
  return (
    <Rating
      style={{ maxWidth: '120px' }}
      value={rating / 2}
      readOnly={true}
      itemStyles={{
        itemShapes: RoundedStar,
        activeFillColor: '#d19f51',
        inactiveFillColor: 'gray',
      }}
    />
  );
}

export default Stars;
