import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ thumb, index, name, id, recipe }) => (
  <Link to={ `/${recipe}/${id}` }>
    <div data-testid={ `${index}-recipe-card` }>
      <h1 data-testid={ `${index}-card-name` }>{ name }</h1>
      <img
        src={ thumb }
        data-testid={ `${index}-card-img` }
        alt={ name }
      />
    </div>
  </Link>
);

Card.propTypes = {
  thumb: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
export default Card;
