import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import {
  removeFavorite,
  thisRecipeIsFavorite } from '../helpers/recipeState';
import AppContext from '../context/AppContext';

function FavoriteCard(props) {
  const [linkCopied, setLinkCopied] = useState(false);
  const [recipeFavorite, setRecipeFavorite] = useState(false);

  const { setFavoriteRecipes } = useContext(AppContext);

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
    removeFavorite(id);
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes'));
    return favorites ? setFavoriteRecipes(favorites) : setFavoriteRecipes([]);
  }

  useEffect(() => {
    setRecipeFavorite(thisRecipeIsFavorite(id));
  }, []);

  return (
    <div>
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
    </div>
  );
}

FavoriteCard.propTypes = {
  recipeDone: PropTypes.object,
}.isRequired;

export default FavoriteCard;
