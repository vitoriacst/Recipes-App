import React from 'react';
import MenuInferior from '../components/MenuInferior';
import Header from '../components/Header';
import ExploreDrinksFoods from '../components/ExploreDrinksFoods';

function ExploreFoods() {
  return (
    <div>
      <ExploreDrinksFoods />
      <h1 data-testid="page-title">Explore Foods</h1>
      <Header />
      <MenuInferior />
    </div>
  );
}

export default ExploreFoods;
