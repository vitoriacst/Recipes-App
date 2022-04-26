import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Profile from '../pages/Profile';
import Login from '../pages/Login';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={ <Login /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
// nesse componente estao armazenadas todas as rotas da apliacacao;
