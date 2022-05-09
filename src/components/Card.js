import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ thumb, divTestid, hTestid, imgTestid, name, id, recipe }) => (
  <Link
    to={ `/${recipe}${id}` }
    className={
      (divTestid && divTestid[0].includes(0))
        ? 'card-link' : 'card-link first'
    }
  >
    <div data-testid={ divTestid } className="card-container">
      <h1 data-testid={ hTestid } className="card-title">{ name }</h1>
      <img src={ thumb } data-testid={ imgTestid } alt={ name } className="card-image" />
    </div>
  </Link>
);

Card.propTypes = {
  thumb: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
export default Card;
