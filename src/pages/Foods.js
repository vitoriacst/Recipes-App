import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import Card from '../components/Card';
import MenuInferior from '../components/MenuInferior';

export default function Foods() {
  const { recipes, setRecipes, setApi, setRecipeType } = useContext(AppContext);
  const [cards, setCards] = useState([]);
  async function requisicao() {
    const endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(endPoint);
    const data = await response.json();
    const number = 12;
    setRecipes(data.meals.filter((meal, index) => index < number));
  }

  const renderCard = () => {
    const newCards = recipes.map((recipe, index) => (
      <Card
        key={ recipe.strMeal }
        thumb={ recipe.strMealThumb }
        index={ index }
        name={ recipe.strMeal }
      />
    ));
    setCards(newCards);
  };

  useEffect(() => {
    setApi('themealdb');
    setRecipeType('meals');
    requisicao();
  }, []);

  useEffect(() => {
    renderCard();
  }, [recipes]);
  return (
    <div className="main-foods">
      <Header />
      <h1 data-testid="page-title">Foods</h1>
      {cards}
      <MenuInferior />
    </div>
  );
}
