import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/RecipeDetails.css';
import Carousel from '../components/Carousel';
import { recipesInProgress, thisRecipeIsDone } from '../helpers/recipeState';

function DrinkDetails() {
  const {
    recipeDetails,
    setRecipeDetails,
  } = useContext(AppContext);

  const history = useHistory();
  const match = useRouteMatch();

  const {
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strCategory,
    strInstructions,
  } = recipeDetails;

  const [alcoholic, setAlcoholic] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [recipeDone, setRecipeDone] = useState(false);
  const [recipeProgress, setRecipeProgress] = useState();
  const [linkCopied, setLinkCopied] = useState(false);

  const idRecipe = Object.values(match.params)[0];
  const endPoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;

  async function getRecipe() {
    const response = await fetch(endPoint);
    const data = await response.json();
    setRecipeDetails(...data.drinks);
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

  function isAlcoholic() {
    if (strAlcoholic === 'Alcoholic') setAlcoholic('Alcoholic');
  }

  function startRecipe() {
    history.push(`/drinks/${idRecipe}/in-progress`);
  }

  function copyToClipBoard() {
    const url = `http://localhost:3000${match.url}`;
    navigator.clipboard.writeText(url);
    setLinkCopied(true);
  }

  useEffect(() => {
    getRecipe();
    setRecipeDone(thisRecipeIsDone(idRecipe));
    setRecipeProgress(recipesInProgress(idRecipe, 'cocktails'));
  }, []);

  useEffect(() => {
    isAlcoholic();
    organizeIngredients();
  }, [recipeDetails]);

  return (
    <div>
      <img
        className="recipe-photo"
        data-testid="recipe-photo"
        src={ strDrinkThumb }
        alt={ strDrink }
      />
      <h1
        className="recipe-title"
        data-testid="recipe-title"
      >
        {strDrink}
      </h1>
      <h3
        className="recipe-category"
        data-testid="recipe-category"
      >
        {`${strCategory} ${alcoholic}`}
      </h3>
      { ingredients
        .map((ingredient, index) => (
          <p
            className="ingredient-name"
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {ingredient}
          </p>))}
      <p data-testid="instructions">{strInstructions}</p>
      <button
        className="share-btn"
        type="button"
        data-testid="share-btn"
        onClick={ copyToClipBoard }
      >
        Compartilhar
      </button>
      {linkCopied && <span>Link copied!</span>}
      <button
        className="favorite-btn"
        type="button"
        data-testid="favorite-btn"
      >
        Favoritar
      </button>
      <Carousel type="strMeal" />
      {!recipeDone && (
        <button
          className="start-recipe-btn"
          type="button"
          data-testid="start-recipe-btn"
          onClick={ startRecipe }
        >
          {recipeProgress ? 'Continue Recipe' : 'Iniciar receita' }
        </button>
      )}
    </div>
  );
}

export default DrinkDetails;
