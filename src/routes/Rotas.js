import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import BarraDeBusca from '../components/BarraDeBusca';
import Drinks from '../pages/Drinks';
import DoneRecipes from '../pages/DoneRecipes';
import FavoritesRecipes from '../pages/FavoritesRecipes';
import ScreenExplore from '../pages/ScreenExplore';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import RecipeDetails from '../pages/RecipeDetails';
import FoodsIngredients from '../pages/FoodsIngredients';
import DrinksIngredients from '../pages/DrinksIngredients';
import RecipesNationality from '../pages/RecipesNationality';

function Rotas() {
  return (
    <Switch>
      <Route path="/profile" component={ Profile } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/foods/:idMeal" component={ RecipeDetails } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route path="/drinks/:idDrink" component={ RecipeDetails } />
      <Route path="/teste" component={ BarraDeBusca } />
      <Route exact path="/" component={ Login } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoritesRecipes } />
      <Route exact path="/explore" component={ ScreenExplore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
      <Route exact path="/explore/foods/ingredients" component={ FoodsIngredients } />
      <Route exact path="/explore/drinks/ingredients" component={ DrinksIngredients } />
      <Route exact path="/explore/foods/nationalities" component={ RecipesNationality } />
    </Switch>
  );
}

export default Rotas;
// nesse componente estao armazenadas todas as rotas da apliacacao;
