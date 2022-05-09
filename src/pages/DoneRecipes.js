import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import DoneCard from '../components/DoneCard';
import '../styles/DoneRecipes.css';

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
    <div className="done-recipes">
      <Header />
      <div className="done-container">
        <h1 data-testid="page-title" className="done-title">Done Recipes</h1>
        <div className="done-buttons">
          <button
            className="filter-button"
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ () => filterDoneRecipes('All') }
          >
            All
          </button>
          <button
            className="filter-button"
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ () => filterDoneRecipes('food') }
          >
            Food
          </button>
          <button
            className="filter-button"
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ () => filterDoneRecipes('drink') }
          >
            Drinks
          </button>
        </div>
        <div className="cards-container">
          {filtered.map((recipe, index) => (
            <div key={ index } className="cards">
              <DoneCard
                recipeDone={ recipe }
                link={ `/${recipe.type}s/${recipe.id}` }
                index={ index }
                key={ index }

              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoneRecipes;
