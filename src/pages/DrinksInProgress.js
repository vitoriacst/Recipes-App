import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import AppContext from '../context/AppContext';
import shareIcon from '../images/shareIcon.svg';
import {
  addFavoriteRecipe,
  removeFavorite,
  // recipesInProgress,
  // thisRecipeIsDone,
  // thisRecipeIsFavorite
} from '../helpers/recipeState';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function DrinksInProgress() {
  const { setRecipeDetails, recipeDetails } = useContext(AppContext);
  const [ingredients, setIngredients] = useState([]);
  const [linkCopied, setLinkCopied] = useState(false);
  const [recipeFavorite, setRecipeFavorite] = useState(false);

  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strInstructions,
  } = recipeDetails;

  const match = useRouteMatch();
  const { params } = match;
  const values = Object.values(params)[0];

  const endPoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${values}`;
  async function getRecipe() {
    console.log(endPoint);
    const response = await fetch(endPoint);
    console.log(response);
    const data = await response.json()
      .then((res) => res)
      .catch(() => ({ message: 'JSON inválido' }));
    if (data?.drinks) {
      setRecipeDetails(...data.drinks);
    }
  }

  useEffect(() => {
    getRecipe();
  }, []);

  function copyToClipBoard() {
    const url = `http://localhost:3000${match.url}`;
    navigator.clipboard.writeText(url);
    setLinkCopied(true);
  }

  function handleFavorite() {
    setRecipeFavorite(!recipeFavorite);
    return recipeFavorite
      ? removeFavorite(values) : addFavoriteRecipe(recipeDetails, 'drink');
  }

  function organizeIngredients() {
    const ingredientsArray = [];
    const limit = 16;
    for (let index = 1; index < limit; index += 1) {
      if (recipeDetails[`strIngredient${index}`]) {
        ingredientsArray.push(
          recipeDetails[`strMeasure${index}`] + recipeDetails[`strIngredient${index}`],
        );
      }
    }
    setIngredients(ingredientsArray);
  }
  useEffect(() => {
    organizeIngredients();
  }, [recipeDetails]);

  console.log(values);
  return (
    <div>
      <img data-testid="recipe-photo" src={ strDrinkThumb } alt="drink Thumb" />
      <h1 data-testid="recipe-title">{strDrink}</h1>
      <input
        className="share-btn"
        type="image"
        data-testid="share-btn"
        onClick={ copyToClipBoard }
        src={ shareIcon }
        alt="share icon"
      />
      {linkCopied && <span>Link copied!</span>}

      <input
        className="favorite-btn"
        type="image"
        onClick={ handleFavorite }
        data-testid="favorite-btn"
        src={ recipeFavorite ? blackHeartIcon : whiteHeartIcon }
        alt="favorite icon"
      />
      <p data-testid="recipe-category">{strCategory}</p>
      { ingredients
        .map((ingredient, index) => (
          <div
            className="ingredient-name"
            key={ index }
            data-testid={ `${index}-ingredient-step` }
          >
            <label htmlFor={ index }>

              <input type="checkbox" id={ index } />
              {ingredient}
            </label>
          </div>))}
      <p data-testid="instructions">{strInstructions}</p>
      <input type="button" data-testid="finish-recipe-btn" value="Done" />
    </div>
  );
}

export default DrinksInProgress;
