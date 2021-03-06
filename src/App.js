import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes/Rotas';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
