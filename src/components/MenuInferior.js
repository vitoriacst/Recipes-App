import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import drinkIncon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';
import AppContext from '../context/AppContext';

function MenuInferior() {
  const { recipes, setRecipesFiltered } = useContext(AppContext);

  return (
    <div data-testid="footer" className="main-footer">
      <footer className="footer">
        <Link to="/drinks">
          <button
            type="button"
            className="footer-icon"
            onClick={ () => setRecipesFiltered(recipes) }
          >
            <img
              src={ drinkIncon }
              alt="drink icon"
              data-testid="drinks-bottom-btn"
            />
          </button>
        </Link>
        <Link to="/explore">
          <button
            type="button"
            className="footer-icon"
          >
            <img
              src={ exploreIcon }
              alt=" search icon"
              data-testid="explore-bottom-btn"
            />
          </button>
        </Link>
        <Link to="/foods">
          <button
            type="button"
            className="footer-icon"
            onClick={ () => setRecipesFiltered(recipes) }
          >
            <img
              src={ mealIcon }
              alt=" meal icon"
              data-testid="food-bottom-btn"
            />
          </button>

        </Link>

      </footer>
    </div>
  );
}

export default MenuInferior;
