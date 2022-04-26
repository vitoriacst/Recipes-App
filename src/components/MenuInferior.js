import React from 'react';
import { Link } from 'react-router-dom';
import drinkIncon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const MenuInferior = () => (
  <div data-testid="footer" className="footer">

    <Link
      to="/drinks"
      data-testid="drinks-bottom-btn"
      type="button"
      onClick={ handleDrinkClick }
      src={ drinkIncon }
    />

    <Link
      to="/explore"
      eact-scripts
      start
      data-testid="explore-bottom-btn"
      type="button"
      src={ exploreIcon }
    />

    <Link
      to="/foods"
      data-testid="food-bottom-btn"
      type="button"
      onClick={ handleFoodClick }
      src={ mealIcon }
    />
  </div>
);

export default MenuInferior;
