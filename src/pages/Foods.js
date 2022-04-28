import React, { useCallback, useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

export default function Foods() {
  const { recipes, setRecipes, setApi, setRecipeType } = useContext(AppContext);
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);

  async function requisicao() {
    const endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(endPoint);
    const data = await response.json();
    const number = 12;
    // coloquei o underline antes do parametro meal para nao deixar parametro 'solto';
    setRecipes(data.meals.filter((_meal, index) => index < number));
  }

  const fetchCategories = async () => {
    const endPoint = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
    const response = await fetch(endPoint);
    const data = await response.json();
    const numberCtgry = 5;
    // underline antes da category para nao deixar o parametro 'solto';
    const dataFiltered = data.meals.filter((_category, index) => index < numberCtgry);
    setCategories(dataFiltered.map((category) => category.strCategory));
  };

  // comentar com galera o useCallback();
  const renderCard = useCallback(() => {
    const newCards = recipes.map((recipe, index) => (
      <Card
        key={ recipe.strMeal }
        thumb={ recipe.strMealThumb }
        index={ index }
        name={ recipe.strMeal }
      />
    ));
    setCards(newCards);
  }, [recipes]);

  const filterByCategory = async ({ target }) => {
    const { value } = target;
    // regex para modificar a categoria Ordinary Drink e conseguir o endpoint necessario;
    const category = value.replace(/\s+/g, '_');
    const endPoint = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    console.log(endPoint);
    const response = await fetch(endPoint);
    const data = await response.json();
    const number = 12;
    const dataFiltered = data.meals.filter((_category, index) => index < number);
    console.log(dataFiltered);
    setRecipes(dataFiltered);
  };

  useEffect(() => {
    setApi('themealdb');
    setRecipeType('meals');
    fetchCategories();
    requisicao();
  }, []);

  useEffect(() => {
    renderCard();
  }, [recipes, renderCard]);

  return (
    <div className="main-foods">
      <Header />
      <h1 data-testid="page-title">Foods</h1>
      {
        categories.map((categoryName) => (
          <button
            key={ categoryName }
            type="button"
            data-testid={ `${categoryName}-category-filter` }
            onClick={ (event) => filterByCategory(event) }
            value={ categoryName }
          >
            {categoryName}
          </button>))
      }
      {cards}
    </div>
  );
}
