export function thisRecipeIsDone(idRecipe) {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (doneRecipes) {
    const idDoneRecipe = doneRecipes[0].id;
    return idDoneRecipe.includes(idRecipe);
  }
}

export function recipesInProgress(idRecipe, type) {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgressRecipes) {
    const recipesProgress = Object.keys(inProgressRecipes[type]);
    if (recipesProgress.includes(idRecipe)) {
      return inProgressRecipes[type][idRecipe];
    }
  }
}

export function thisRecipeIsFavorite(idRecipe) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoriteRecipes) {
    const idfavoriteRecipes = favoriteRecipes[0].id;
    return idfavoriteRecipes.includes(idRecipe);
  }
}

export function addFavoriteRecipe(recipeDetails, type) {
  const recipe = {
    id: type === 'drink' ? recipeDetails.idDrink : recipeDetails.idMeal,
    type,
    nationality: recipeDetails.strArea ? recipeDetails.strArea : '',
    category: recipeDetails.strCategory,
    alcoholicOrNot: recipeDetails.strAlcoholic ? recipeDetails.strAlcoholic : '',
    name: type === 'drink' ? recipeDetails.strDrink : recipeDetails.strMeal,
    image: type === 'drink' ? recipeDetails.strDrinkThumb : recipeDetails.strMealThumb,
  };
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoriteRecipes) {
    const newFavorites = JSON.stringify([...favoriteRecipes, recipe]);
    localStorage.setItem('favoriteRecipes', newFavorites);
  } else {
    const newFavorites = JSON.stringify([recipe]);
    localStorage.setItem('favoriteRecipes', newFavorites);
  }
}

export function removeFavorite(idRecipe) {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const filter = favoriteRecipes.filter((recipe) => recipe.id !== idRecipe);
  const newFavorites = JSON.stringify(filter);
  console.log(newFavorites);
  localStorage.setItem('favoriteRecipes', newFavorites);
}
