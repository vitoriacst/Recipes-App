import React, { useContext, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/RecipeDetails.css';
import Carousel from '../components/Carousel';

function RecipeDetails() {
  const {
    recipeDetails,
    setRecipeDetails,
  } = useContext(AppContext);

  const match = useRouteMatch();
  const endPointFoods = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.idMeal}`;
  const endPointDrinks = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.idDrink}`;

  let foodOrDrink = 'strDrink';
  if (match.path.includes('foods')) {
    foodOrDrink = 'strMeal';
  }

  function youtubeCode() {
    return recipeDetails.strYoutube.split('=')[1];
  }

  async function getDetails(endPoint, type) {
    const response = await fetch(endPoint);
    const data = await response.json();
    setRecipeDetails(...data[type]);
  }

  function selectDetails() {
    if (match.path.includes('foods')) {
      return getDetails(endPointFoods, 'meals');
    }
    if (match.path.includes('drinks')) {
      return getDetails(endPointDrinks, 'drinks');
    }
  }

  function organizeIngredients() {
    const ingredients = [];
    const limit = 16;
    for (let index = 1; index < limit; index += 1) {
      if (recipeDetails[`strIngredient${index}`]) {
        ingredients.push(
          recipeDetails[`strMeasure${index}`] + recipeDetails[`strIngredient${index}`],
        );
      }
    }
    return ingredients;
  }

  function isAlcoholic() {
    if (recipeDetails.strAlcoholic === 'Alcoholic') return 'Alcoholic';
  }

  useEffect(() => {
    selectDetails();
  }, []);

  return (
    <div>

      Tela de detalhes de uma receita
      <img
        className="recipe-photo"
        data-testid="recipe-photo"
        src={ recipeDetails[`${foodOrDrink}Thumb`] }
        alt={ recipeDetails[foodOrDrink] }
      />
      <h1
        className="recipe-title"
        data-testid="recipe-title"
      >
        {recipeDetails[foodOrDrink]}
      </h1>
      <h3
        className="recipe-category"
        data-testid="recipe-category"
      >
        {recipeDetails.strCategory}
        {' '}
        {isAlcoholic()}
      </h3>
      { organizeIngredients()
        .map((ingredient, index) => (
          <p
            className="ingredient-name"
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {ingredient}
          </p>))}
      <p data-testid="instructions">{recipeDetails.strInstructions}</p>
      {recipeDetails.strYoutube && (
        <iframe
          className="youtube-video"
          data-testid="video"
          src={ `https://www.youtube.com/embed/${youtubeCode()}?controls=0` }
          title="YouTube video player"
          frameBorder="0"
        />
      )}
      <button
        className="share-btn"
        type="button"
        data-testid="share-btn"
      >
        Compartilhar
      </button>
      <button
        className="favorite-btn"
        type="button"
        data-testid="favorite-btn"
      >
        Favoritar
      </button>
      <Carousel type={ foodOrDrink } />
      <button
        className="start-recipe-btn"
        type="button"
        data-testid="start-recipe-btn"
      >
        Iniciar receita
      </button>
    </div>
  );
}

export default RecipeDetails;
