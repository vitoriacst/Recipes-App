import React from 'react';
import MenuInferior from '../components/MenuInferior';
import Header from '../components/Header';

function RecipesNationality() {
  return (
    <div>
      <Header />
      <h1 data-testid="page-title">
        Explore Nationalities

      </h1>
      <MenuInferior />
    </div>
  );
}

export default RecipesNationality;
