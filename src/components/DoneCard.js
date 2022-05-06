import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import {
  addFavoriteRecipe,
  removeFavorite,
  thisRecipeIsFavorite } from '../helpers/recipeState';

function DoneCard(props) {
  const [linkCopied, setLinkCopied] = useState(false);
  const [recipeFavorite, setRecipeFavorite] = useState(false);

  const { recipeDone, index, link } = props;
  const {
    id,
    image,
    category,
    name,
    doneDate,
    tags,
    nationality,
    alcoholicOrNot,
    type,
  } = recipeDone;

  function copyToClipBoard() {
    const url = `http://localhost:3000/${type}s/${id}`;
    navigator.clipboard.writeText(url);
    setLinkCopied(true);
  }

  function handleFavorite() {
    setRecipeFavorite(!recipeFavorite);
    const mealOrDrink = type === 'food' ? 'Meal' : 'Drink';
    const object = {
      [`id${mealOrDrink}`]: id,
      strArea: nationality,
      strCategory: category,
      strAlcoholic: alcoholicOrNot,
      [`str${mealOrDrink}`]: name,
      [`str${mealOrDrink}Thumb`]: image,
    };
    return recipeFavorite
      ? removeFavorite(id) : addFavoriteRecipe(object, type);
  }

  useEffect(() => {
    setRecipeFavorite(thisRecipeIsFavorite(id));
  }, []);

  return (
    <div>
      <Link to={ link }>
        <input
          type="image"
          width="200px"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ index }
        />
        <h1 data-testid={ `${index}-horizontal-name` }>
          {name}
        </h1>
      </Link>
      <p data-testid={ `${index}-horizontal-top-text` }>
        {nationality}
        {' - '}
        {category}
        {alcoholicOrNot}
      </p>
      <p data-testid={ `${index}-horizontal-done-date` }>
        {doneDate}
      </p>
      <input
        className="share-btn"
        type="image"
        data-testid={ `${index}-horizontal-share-btn` }
        onClick={ copyToClipBoard }
        src={ shareIcon }
        alt={ `${index}share icon` }
      />
      {linkCopied && <span>Link copied!</span>}
      {tags && tags.map((tag) => (
        <p key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>
          {tag}
        </p>
      ))}
      <input
        className="favorite-btn"
        type="image"
        onClick={ handleFavorite }
        data-testid={ `${index}-horizontal-favorite-btn` }
        src={ recipeFavorite ? blackHeartIcon : whiteHeartIcon }
        alt={ `${index}favorite icon` }
      />
    </div>
  );
}

DoneCard.propTypes = {
  recipeDone: PropTypes.object,
}.isRequired;

export default DoneCard;
