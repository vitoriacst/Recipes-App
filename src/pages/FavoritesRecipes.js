import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import FavoriteCard from '../components/FavoriteCard';
import AppContext from '../context/AppContext';

const FavoritesRecipes = () => {
  const recipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState('All');

  const { favoriteRecipes,
    setFavoriteRecipes } = useContext(AppContext);

  function filterDoneRecipes() {
    if (favoriteRecipes) {
      const newArray = favoriteRecipes.filter((recipe) => filter === recipe.type);
      return filter === 'All' ? setFiltered(favoriteRecipes) : setFiltered(newArray);
    }
  }

  useEffect(() => {
    setFavoriteRecipes(recipes);
  }, []);

  useEffect(() => {
    filterDoneRecipes();
  }, [favoriteRecipes, filter]);

  return (
    <>
      <Header />
      <h1 data-testid="page-title">Favorite Recipes</h1>
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
        <FavoriteCard
          recipeDone={ recipe }
          link={ `/${recipe.type}s/${recipe.id}` }
          index={ index }
          key={ index }
        />
      ))}
    </>
  );
};

export default FavoritesRecipes;
