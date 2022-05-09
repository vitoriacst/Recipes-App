import React from 'react';
import { Link } from 'react-router-dom';
import MenuInferior from '../components/MenuInferior';
import Header from '../components/Header';
import '../styles/ScreenExplore.css';

const ScreenExplore = () => (
  <div className="main-explore">
    <Header />
    <div className="content-explore">
      <h1 data-testid="page-title">Explore</h1>
      <Link to="/explore/foods">
        <button
          data-testid="explore-foods"
          type="button"
          className="explore-button"
        >
          Explore Foods
        </button>
      </Link>
      <Link to="/explore/drinks">
        <button
          data-testid="explore-drinks"
          type="button"
          className="explore-button"
        >
          Explore Drinks
        </button>
      </Link>
      <MenuInferior />
    </div>
  </div>
);

export default ScreenExplore;
