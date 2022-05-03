import React from 'react';
import { Link } from 'react-router-dom';
import MenuInferior from '../components/MenuInferior';
import Header from '../components/Header';

const ScreenExplore = () => (
  <>
    <Header />
    <div className="main-explore">
      <Link to="/explore/foods">
        <button data-testid="explore-foods" type="button">Explore Foods</button>
      </Link>
      <Link to="/explore/drinks">
        <button data-testid="explore-drinks" type="button">Explore Drinks</button>
      </Link>
      <h1 data-testid="page-title">Explore</h1>
      <MenuInferior />
    </div>
  </>
);

export default ScreenExplore;
