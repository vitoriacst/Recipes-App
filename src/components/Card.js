import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ thumb, index, name }) => (
  <div data-testid={ `${index}-recipe-card` }>
    <h1 data-testid={ `${index}-card-name` }>{ name }</h1>
    <img src={ thumb } data-testid={ `${index}-card-img` } alt={ name } />
  </div>
);

Card.propTypes = {
  thumb: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
export default Card;
