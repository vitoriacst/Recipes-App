import React from 'react';
import MenuInferior from '../components/MenuInferior';
import Header from '../components/Header';
// import Card from '../components/Card';
import ExploreDrinksFoods from '../components/ExploreDrinksFoods';

function ExploreDrinks() {
  return (
    <div className="explore-main">
      <Header />
      <h1 data-testid="page-title" className="title-explore">Explore Drinks</h1>
      <div className="main-buttons">
        <ExploreDrinksFoods />
      </div>
      {/* <Card /> */}
      <MenuInferior />
    </div>
  );
}

export default ExploreDrinks;
