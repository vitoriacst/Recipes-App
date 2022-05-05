import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

function DoneCard(props) {
  const [linkCopied, setLinkCopied] = useState(false);

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
    const foodOrDrink = type === 'bebida' ? 'drinks' : 'foods';
    const url = `http://localhost:3000/${foodOrDrink}/${id}`;
    navigator.clipboard.writeText(url);
    setLinkCopied(true);
  }

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
      {tags.map((tag) => (
        <p key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>
          {tag}
        </p>
      ))}
    </div>
  );
}

DoneCard.propTypes = {
  recipeDone: PropTypes.object,
}.isRequired;

export default DoneCard;
