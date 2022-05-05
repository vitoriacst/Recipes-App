import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';
import AppContext from '../context/AppContext';

export default function Foods() {
  const { recipes,
    setRecipes,
    setApi,
    setRecipeType,
    recipesFiltered,
    setRecipesFiltered,
    ingredient,
  } = useContext(AppContext);

  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState('All');

  async function requisicao() {
    const endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    const response = await fetch(endPoint);
    const data = await response.json();
    const number = 12;
    // coloquei o underline antes do parametro meal para nao deixar parametro 'solto';
    setRecipes(data.meals.filter((_meal, index) => index < number));
    setRecipesFiltered(data.meals.filter((_meal, index) => index < number));
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

  const renderCard = (array) => {
    const newCards = array.map((recipe, index) => (
      <Card
        key={ recipe.strMeal }
        thumb={ recipe.strMealThumb }
        divTestid={ `${index}-recipe-card` }
        hTestid={ `${index}-card-name` }
        imgTestid={ `${index}-card-img` }
        name={ recipe.strMeal }
        id={ `/${recipe.idMeal}` }
        recipe="foods"
      />
    ));
    setCards(newCards);
  };

  const filterByCategory = async ({ target }) => {
    const { value } = target;
    if (value === selected) {
      setRecipesFiltered(recipes);
      setSelected('All');
    } else {
      const endPoint = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;
      const response = await fetch(endPoint);
      const data = await response.json();
      const number = 12;
      const dataFiltered = data.meals.filter((_category, index) => index < number);
      setRecipesFiltered(dataFiltered);
      setSelected(value);
    }
  };

  const removeFilter = () => {
    setRecipesFiltered(recipes);
    setSelected('All');
  };

  useEffect(() => {
    setApi('themealdb');
    setRecipeType('meals');
    fetchCategories();
    // condicional para nao re-renderizar caso for redirecionado from ingredients
    if (!ingredient) {
      requisicao();
    }
  }, []);

  useEffect(() => {
    renderCard(recipesFiltered);
  }, [recipesFiltered, recipes]);

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
      {
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ removeFilter }
          value="All"
        >
          All
        </button>
      }
      {cards}
      <MenuInferior />
    </div>
  );
}
