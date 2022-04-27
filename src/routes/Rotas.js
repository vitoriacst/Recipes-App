import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import BarraDeBusca from '../components/BarraDeBusca';

function Rotas() {
  return (
    <Switch>
      <Route path="/profile" component={ Profile } />
      <Route path="/foods" component={ Foods } />
      <Route path="/teste" component={ BarraDeBusca } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default Rotas;
// nesse componente estao armazenadas todas as rotas da apliacacao;
