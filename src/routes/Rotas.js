import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile" component={ Profile } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;
// nesse componente estao armazenadas todas as rotas da apliacacao;
