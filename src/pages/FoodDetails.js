import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/RecipeDetails.css';
import Carousel from '../components/Carousel';
import { recipesInProgress, thisRecipeIsDone } from '../helpers/recipeState';

function FoodDetails() {
  const {
    recipeDetails,
    setRecipeDetails,
  } = useContext(AppContext);

  const history = useHistory();

  const {
    strMeal,
    strMealThumb,
    strYoutube,
    strCategory,
    strInstructions,
  } = recipeDetails;

  const [ingredients, setIngredients] = useState([]);
  const [youtubeLink, setYoutubeLink] = useState('');
  const [recipeDone, setRecipeDone] = useState(false);
  const [recipeProgress, setRecipeProgress] = useState();
  const [linkCopied, setLinkCopied] = useState(false);

  const match = useRouteMatch();
  const idRecipe = Object.values(match.params)[0];

  const endPoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;

  async function getRecipe() {
    const response = await fetch(endPoint);
    const data = await response.json();
    setRecipeDetails(...data.meals);
  }

  function handleYoutubeLink() {
    if (strYoutube) {
      const code = strYoutube.split('=')[1];
      setYoutubeLink(`https://www.youtube.com/embed/${code}?controls=0`);
    }
  }

  function startRecipe() {
    history.push(`/foods/${idRecipe}/in-progress`);
  }

  function copyToClipBoard() {
    const url = `http://localhost:3000${match.url}`;
    navigator.clipboard.writeText(url);
    setLinkCopied(true);
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
    getRecipe();
    setRecipeDone(thisRecipeIsDone(idRecipe));
    setRecipeProgress(recipesInProgress(idRecipe, 'meals'));
  }, []);

  useEffect(() => {
    organizeIngredients();
    handleYoutubeLink();
  }, [recipeDetails]);

  return (
    <div>
      <img
        className="recipe-photo"
        data-testid="recipe-photo"
        src={ strMealThumb }
        alt={ strMeal }
      />
      <h1
        className="recipe-title"
        data-testid="recipe-title"
      >
        {strMeal}
      </h1>
      <h3
        className="recipe-category"
        data-testid="recipe-category"
      >
        {strCategory}
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
      {youtubeLink && (
        <iframe
          className="youtube-video"
          data-testid="video"
          src={ youtubeLink }
          title="YouTube video player"
          frameBorder="0"
        />
      )}
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
      <Carousel type="strDrink" />
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

export default FoodDetails;
