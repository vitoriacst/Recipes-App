import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ thumb, divTestid, hTestid, imgTestid, name, id, recipe }) => (
  <Link to={ `/${recipe}${id}` }>
    <div data-testid={ divTestid }>
      <h1 data-testid={ hTestid }>{ name }</h1>
      <img src={ thumb } data-testid={ imgTestid } alt={ name } />
    </div>
  </Link>
);

Card.propTypes = {
  thumb: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
export default Card;
