import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';
import AppContext from '../context/AppContext';

function DrinksIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const { recipesFiltered, setRecipesFiltered } = useContext(AppContext);

  const fetchIngredients = async () => {
    const endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
    const response = await fetch(endPoint);
    const data = await response.json();
    const numberIngdnt = 12;
    // underline antes da ingredient para nao deixar o parametro 'solto';
    const dataFiltered = data.drinks.filter((_ingredient, index) => index < numberIngdnt);
    setIngredients(dataFiltered);
  };

  const filterByIngredient = async (ingredient) => {
    console.log(ingredient);
    const endPoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(endPoint);
    const data = await response.json();
    const number = 12;
    // coloquei o underline antes do parametro drink para nao deixar parametro 'solto';
    setRecipesFiltered(data.drinks.filter((_drink, index) => index < number));
    console.log(recipesFiltered);
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <div>
      <Header />
      <h1 data-testid="page-title">
        Explore Ingredients
        {
          ingredients.map((ingredient, index) => (
            <div key={ index }>
              <Card
                divTestid={ `${index}-ingredient-card` }
                hTestid={ `${index}-card-name` }
                imgTestid={ `${index}-card-img` }
                thumb={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                recipe="drinks"
                id=""
                onClick={ () => filterByIngredient(ingredient.strIngredient1) }
              />
              <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</p>
            </div>
          ))
        }
      </h1>
      <MenuInferior />
    </div>
  );
}

export default DrinksIngredients;
