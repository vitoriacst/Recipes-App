import React from 'react';
import MenuInferior from '../components/MenuInferior';
import Header from '../components/Header';

function DrinksIngredients() {
  return (
    <div>
      <Header />
      <h1 data-testid="page-title">
        Explore Ingredients

      </h1>
      <MenuInferior />
    </div>
  );
}

export default DrinksIngredients;
