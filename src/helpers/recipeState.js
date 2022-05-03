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
