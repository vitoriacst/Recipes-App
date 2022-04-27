import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import BarraDeBusca from '../components/BarraDeBusca';

function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile" component={ Profile } />
        <Route path="/teste" component={ BarraDeBusca } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;
// nesse componente estao armazenadas todas as rotas da apliacacao;
