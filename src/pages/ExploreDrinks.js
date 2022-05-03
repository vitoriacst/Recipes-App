import React from 'react';
import MenuInferior from '../components/MenuInferior';
import Header from '../components/Header';
import Card from '../components/Card';
import ExploreDrinksFoods from '../components/ExploreDrinksFoods';

function ExploreDrinks() {
  return (
    <div>
      <h1 data-testid="page-title">Explore Drinks</h1>
      <ExploreDrinksFoods />
      <MenuInferior />
      <Card />
      <Header />
    </div>
  );
}

export default ExploreDrinks;
