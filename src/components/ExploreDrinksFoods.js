import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../styles/ExploreButtons.css';

function ExploreDrinksFoods() {
  const [randomUrl, setUrlRandom] = useState();
  const match = useRouteMatch();
  const notRender = ['/explore/drinks'];
  const foodRender = ['/explore/foods'];

  async function getIdFood() {
    const endPoint = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(endPoint);
    const data = await response.json();
    const values = Object.values(data);
    const id = Object.values(values[0]);
    const idReturn = Object.values(id[0]);
    setUrlRandom(`/foods/${idReturn[0]}`);
  }

  async function getIdDrink() {
    const endPoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(endPoint);
    const data = await response.json();
    const values = Object.values(data);
    const id = Object.values(values[0]);
    const idReturn = Object.values(id[0]);
    setUrlRandom(`/drinks/${idReturn[0]}`);
  }
  function getId() {
    const { path } = match;
    return path.includes('foods')
      ? getIdFood()
      : getIdDrink();
  }

  useEffect(() => {
    getId();
  }, []);

  return (
    <>
      {
        foodRender.includes(match.path) && (
          <Link to="/explore/foods/ingredients">
            <button
              type="button"
              data-testid="explore-by-ingredient"
              className="button-filter"
            >
              By Ingredient

            </button>
          </Link>
        )
      }

      {
        notRender.includes(match.path) && (
          <Link to="/explore/drinks/ingredients">
            <button
              type="button"
              data-testid="explore-by-ingredient"
              className="button-filter"
            >
              By Ingredient
            </button>
          </Link>
        )
      }
      {
        !notRender.includes(match.path)
        && (
          <Link to="/explore/foods/nationalities">
            <button
              type="button"
              data-testid="explore-by-nationality"
              className="button-filter"
            >
              By Nationality
            </button>
          </Link>
        )
      }

      <Link to={ randomUrl }>
        <button
          type="button"
          data-testid="explore-surprise"
          className="button-filter"

        >
          Surprise me!
        </button>
      </Link>

    </>
  );
}

export default ExploreDrinksFoods;
