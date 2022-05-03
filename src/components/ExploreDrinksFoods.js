import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function ExploreDrinksFoods() {
  const match = useRouteMatch();
  const notRender = ['/explore/drinks'];
  const foodRender = ['/explore/foods'];
  return (
    <>
      {
        foodRender.includes(match.path) && (
          <Link to="/explore/foods/ingredients">
            <button type="button" data-testid="explore-by-ingredient">
              By Ingredient
            </button>
          </Link>
        )
      }

      {
        notRender.includes(match.path) && (
          <Link to="/explore/drinks/ingredients">
            <button type="button" data-testid="explore-by-ingredient">
              By Ingredient
            </button>
          </Link>
        )
      }
      {
        !notRender.includes(match.path)
        && (
          <Link to="/explore/foods/nationalities">
            <button type="button" data-testid="explore-by-nationality">
              By Nationality
            </button>
          </Link>
        )
      }
      <Link to="/explore">
        <button type="button" data-testid="explore-surprise">
          Surprise me!
        </button>
      </Link>
    </>
  );
}

export default ExploreDrinksFoods;
