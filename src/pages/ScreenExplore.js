import React from 'react';
import { Link } from 'react-router-dom';

const ScreenExplore = () => (
  <div className="main-explore">
    <Link to="/explore/foods">
      <button data-testid="explore-foods" type="button">Explore Foods</button>
    </Link>
    <Link to="/explore/drinks">
      <button data-testid="explore-drinks" type="button">Explore Drinks</button>
    </Link>
  </div>
);

export default ScreenExplore;
