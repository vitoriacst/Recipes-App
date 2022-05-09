import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import FavoriteCard from '../components/FavoriteCard';
import AppContext from '../context/AppContext';
import '../styles/Favorites.css';

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
    <div className="favorite-recipes">
      <Header />
      <h1 data-testid="page-title" className="favorites-title">Favorite Recipes</h1>
      <div className="favorites-buttons">
        <button
          className="filter-button"
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilter('All') }
        >
          All
        </button>
        <button
          className="filter-button"
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilter('food') }
        >
          Food
        </button>
        <button
          className="filter-button"
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilter('drink') }
        >
          Drinks
        </button>
      </div>
      {filtered.map((recipe, index) => (
        <div className="cards" key={ index }>
          <FavoriteCard
            recipeDone={ recipe }
            link={ `/${recipe.type}s/${recipe.id}` }
            index={ index }
            key={ index }
          />
        </div>
      ))}
    </div>
  );
};

export default FavoritesRecipes;
