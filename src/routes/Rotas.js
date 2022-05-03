import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BarraDeBusca from '../components/BarraDeBusca';
import DoneRecipes from '../pages/DoneRecipes';
import DrinkDetails from '../pages/DrinkDetails';
import Drinks from '../pages/Drinks';
import DrinksIngredients from '../pages/DrinksIngredients';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreFoods from '../pages/ExploreFoods';
import FavoritesRecipes from '../pages/FavoritesRecipes';
import FoodDetails from '../pages/FoodDetails';
import Foods from '../pages/Foods';
import FoodsIngredients from '../pages/FoodsIngredients';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import RecipeInProgress from '../pages/RecipeInProgress';
import RecipesNationality from '../pages/RecipesNationality';
import ScreenExplore from '../pages/ScreenExplore';

function Rotas() {
  return (
    <Switch>
      <Route path="/profile" component={ Profile } />
      <Route exact path="/foods" component={ Foods } />
      <Route exact path="/foods/:idMeal" component={ FoodDetails } />
      <Route exact path="/foods/:idMeal/in-progress" component={ RecipeInProgress } />
      <Route exact path="/drinks" component={ Drinks } />
      <Route exact path="/drinks/:idDrink" component={ DrinkDetails } />
      <Route exact path="/drinks/:idDrink/in-progress" component={ RecipeInProgress } />
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
