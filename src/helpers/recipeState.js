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
    return favoriteRecipes.some((recipe) => recipe.id === idRecipe);
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
  const newFavorites = favoriteRecipes.filter((recipe) => recipe.id !== idRecipe);
  return newFavorites.length > 0
    ? localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites))
    : localStorage.removeItem('favoriteRecipes');
}

export function saveDoneRecipes(object) {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (doneRecipes) {
    console.log('olá');
    localStorage.setItem('doneRecipes', JSON.stringify([...doneRecipes, object]));
  } else {
    localStorage.setItem('doneRecipes', JSON.stringify([object]));
  }
}

export function getData() {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

export function objectDrink(recipeDetails, values) {
  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strTags,
  } = recipeDetails;

  return {
    id: values,
    type: 'drink',
    nationality: '',
    category: strCategory,
    alcoholicOrNot: strAlcoholic,
    name: strDrink,
    image: strDrinkThumb,
    doneDate: getData(),
    tags: strTags ? strTags.split(',') : [],
  };
}

export function objectFood(recipeDetails, values) {
  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strTags,
  } = recipeDetails;

  return {
    id: values,
    type: 'food',
    nationality: strArea,
    category: strCategory,
    alcoholicOrNot: '',
    name: strMeal,
    image: strMealThumb,
    doneDate: getData(),
    tags: strTags ? strTags.split(',') : [],
  };
}
