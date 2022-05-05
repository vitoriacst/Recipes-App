import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import DoneCard from '../components/DoneCard';

const DoneRecipes = () => {
  const recipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const [filtered, setFiltered] = useState([]);

  function filterDoneRecipes(filter) {
    if (recipes) {
      const newArray = recipes.filter((recipe) => filter === recipe.type);
      return filter === 'All' ? setFiltered(recipes) : setFiltered(newArray);
    }
  }

  useEffect(() => {
    filterDoneRecipes('All');
  }, []);

  return (
    <>
      <Header />
      <h1 data-testid="page-title">Done Recipes</h1>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => filterDoneRecipes('All') }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => filterDoneRecipes('food') }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => filterDoneRecipes('drink') }
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
    </>
  );
};

export default DoneRecipes;
