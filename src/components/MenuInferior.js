import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import drinkIncon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';

function MenuInferior() {
  const match = useRouteMatch();
  console.log(match.path);
  return (
    <div data-testid="footer" className="main-footer">
      <footer>
        <Link to="/drinks">
          <button
            type="button"
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
          >
            <img src={ mealIcon } alt=" meal icon" data-testid="food-bottom-btn" />
          </button>

        </Link>

      </footer>
    </div>
  );
}

export default MenuInferior;
