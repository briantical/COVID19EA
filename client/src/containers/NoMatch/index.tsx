import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const NoMatch: FC<{}> = () => {
  return (
    <div>
      No Matching Route<Link to="/">Home</Link>
    </div>
  );
};

export default NoMatch;
