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

function Rotas() {
  return (
    <Switch>
      <Route path="/profile" component={ Profile } />
      <Route path="/foods" component={ Foods } />
      <Route path="/foods/:idMeal" component={ Foods } />
      <Route path="/drinks" component={ Drinks } />
      <Route path="/drinks/:idDrink" component={ Drinks } />
      <Route path="/teste" component={ BarraDeBusca } />
      <Route exact path="/" component={ Login } />
      <Route exact path="/done-recipes" component={ DoneRecipes } />
      <Route exact path="/favorite-recipes" component={ FavoritesRecipes } />
      <Route exact path="/explore" component={ ScreenExplore } />
      <Route exact path="/explore/foods" component={ ExploreFoods } />
      <Route exact path="/explore/drinks" component={ ExploreDrinks } />
    </Switch>
  );
}

export default Rotas;
// nesse componente estao armazenadas todas as rotas da apliacacao;
