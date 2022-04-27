import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import AppContext from '../context/AppContext';

function Drinks() {
  const { recipes, setRecipes, setApi, setRecipeType } = useContext(AppContext);
  const [cards, setCards] = useState([]);
  async function requisicao() {
    const endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(endPoint);
    const data = await response.json();
    const number = 12;
    setRecipes(data.drinks.filter((drink, index) => index < number));
  }

  const renderCard = () => {
    const newCards = recipes.map((recipe, index) => (
      <Card
        key={ recipe.strDrink }
        thumb={ recipe.strDrinkThumb }
        index={ index }
        name={ recipe.strDrink }
      />
    ));
    setCards(newCards);
  };

  useEffect(() => {
    setApi('thecocktaildb');
    setRecipeType('drinks');
    requisicao();
  }, []);

  useEffect(() => {
    renderCard();
  }, [recipes]);

  return (
    <div className="main-foods">
      <Header />
      <h1 data-testid="page-title">Drinks</h1>
      {cards}
    </div>
  );
}

export default Drinks;
