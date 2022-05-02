import React, { useContext, useEffect } from 'react';
import '../styles/Carousel.css';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

function Carousel(props) {
  const {
    setRecommendation,
    recommendations,
    sugestPosition,
    setSugestPosition,
  } = useContext(AppContext);

  const { type } = props;

  function handleNext() {
    const max = 5;
    if (sugestPosition[1] < max) {
      setSugestPosition([sugestPosition[0] + 2, sugestPosition[1] + 2]);
    }
  }

  function handlePrevious() {
    const min = 0;
    if (sugestPosition[0] > min) {
      setSugestPosition([sugestPosition[0] - 2, sugestPosition[1] - 2]);
    }
  }

  const sugest = type === 'strDrink' ? 'strMeal' : 'strDrink';

  async function getDrinks() {
    const max = 6;
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const { drinks } = await response.json();
    const sixDrinks = drinks.filter((recipe, index) => index < max);
    setRecommendation(sixDrinks);
  }

  async function getFoods() {
    const max = 6;
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const { meals } = await response.json();
    const sixMeals = meals.filter((recipe, index) => index < max);
    setRecommendation(sixMeals);
  }

  function getRecipes() {
    return type === 'strMeal' ? getDrinks() : getFoods();
  }

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="carousel">
      {recommendations && (
        <div className="carousel-container">
          <button
            type="button"
            onClick={ handlePrevious }
            className="previous-btn"
          >
            VOLTAR
          </button>
          <div className="items-wrapper">
            <div className="items">
              {recommendations.map((recipe, index) => (
                <div
                  key={ recipe[sugest] }
                  data-testid={ `${index}-recomendation-card` }
                  className={ sugestPosition.includes(index) ? 'item' : 'item-hidden' }
                >
                  <h3 data-testid={ `${index}-recomendation-title` }>{recipe[sugest]}</h3>
                  <img
                    className="card"
                    src={ recipe[`${sugest}Thumb`] }
                    alt="pro"
                  />
                </div>

              ))}

            </div>
          </div>
          <button
            type="button"
            onClick={ handleNext }
            className="next-btn"
          >
            PRÓXIMO
          </button>
        </div>
      )}
    </div>
  );
}

Carousel.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default Carousel;
