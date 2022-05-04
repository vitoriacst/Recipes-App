import React, { useContext, useEffect, useState } from 'react';
import MenuInferior from '../components/MenuInferior';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import Card from '../components/Card';

function RecipesNationality() {
  const { nationalities,
    recipes,
    setRecipes,
    recipesFiltered,
    setRecipesFiltered,
    setNationalities } = useContext(AppContext);
  const [cards, setCards] = useState([]);
  async function requisicao() {
    const endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(endPoint);
    const data = await response.json();

    const number = 12;
    // coloquei o underline antes do parametro meal para nao deixar parametro 'solto';
    setRecipes(data.meals.filter((_meal, index) => index < number));
    setRecipesFiltered(data.meals.filter((_meal, index) => index < number));
  }

  async function getAllNationalities() {
    const endPoint = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
    const response = await fetch(endPoint);
    const data = await response.json();
    const nationalitiesData = data.meals.map((meal) => meal.strArea);
    setNationalities(['All', ...nationalitiesData]);
  }

  useEffect(() => {
    requisicao();
    getAllNationalities();
  }, []);

  const renderCard = (array) => {
    const newCards = array.map((recipe, index) => (
      <Card
        key={ recipe.strMeal }
        thumb={ recipe.strMealThumb }
        index={ index }
        name={ recipe.strMeal }
        id={ recipe.idMeal }
        recipe="foods"
      />
    ));
    setCards(newCards);
  };

  useEffect(() => {
    renderCard(recipesFiltered);
  }, [recipes, recipesFiltered]);

  const handleChange = async ({ target }) => {
    const endPoint = target.value === 'All'
      ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
      : `https://www.themealdb.com/api/json/v1/1/filter.php?a=${target.value}`;
    const response = await fetch(endPoint);
    const data = await response.json();
    const number = 12;
    // coloquei o underline antes do parametro meal para nao deixar parametro 'solto';
    setRecipesFiltered(data.meals.filter((_meal, index) => index < number));
  };

  return (
    <div>
      <Header />
      <h1 data-testid="page-title">
        Explore Nationalities
      </h1>
      <select
        data-testid="explore-by-nationality-dropdown"
        onChange={ handleChange }
      >
        {
          nationalities.map((nat, index) => (
            <option
              key={ index }
              value={ nat }
              data-testid={ `${nat}-option` }
            >
              { nat }
            </option>
          ))
        }
      </select>
      {cards}
      <MenuInferior />
    </div>
  );
}

export default RecipesNationality;
