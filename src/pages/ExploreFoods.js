import React from 'react';
import MenuInferior from '../components/MenuInferior';
import Header from '../components/Header';
import '../styles/ExploreButtons.css';
import ExploreDrinksFoods from '../components/ExploreDrinksFoods';

function ExploreFoods() {
  return (
    <div className="explore-main">
      <Header />
      <h1 data-testid="page-title" className="title-explore">Explore Foods</h1>
      <div className="main-buttons">
        <ExploreDrinksFoods />
      </div>
      <MenuInferior />
    </div>
  );
}

export default ExploreFoods;
