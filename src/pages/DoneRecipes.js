import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import DoneCard from '../components/DoneCard';

const DoneRecipes = () => {
  const recipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const [filtered, setFiltered] = useState(recipes);
  const [filter, setFilter] = useState('All');

  function filterDoneRecipes() {
    const newArray = recipes.filter((recipe) => filter === recipe.type);
    return filter === 'All' ? setFiltered(recipes) : setFiltered(newArray);
  }

  useEffect(() => {
    filterDoneRecipes();
  }, [filter]);

  return (
    <div>
      <Header />
      <h1 data-testid="page-title">Done Recipes</h1>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setFilter('All') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => setFilter('food') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilter('drink') }
      >
        Drinks
      </button>
      {filtered.map((recipe, index) => (
        <DoneCard
          recipeDone={ recipe }
          link={ `/${recipe.type}s/${recipe.id}` }
          index={ index }
          key={ index }
        />
      ))}
    </div>
  );
};

export default DoneRecipes;
