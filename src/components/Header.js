import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import AppContext from '../context/AppContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/Header.css';
import BarraDeBusca from './BarraDeBusca';

export default function Header() {
  const { setSearchBar, searchBar } = useContext(AppContext);
  const notRender = ['/profile',
    '/explore',
    '/explore/drinks',
    '/explore/foods',
    '/details',
    '/explore/drinks/ingredients',
    '/explore/foods/ingredients',
    '/done-recipes',
    '/favorite-recipes',

  ];

  const match = useRouteMatch();

  return (
    <div className="main-header">
      <header
        data-testid="page-title"
      >
        <Link to="/profile">
          <button
            type="button"

          >
            <img src={ profileIcon } alt="profile icon" data-testid="profile-top-btn" />
          </button>
        </Link>
        {
          !notRender.includes(match.path)
        && (
          <button
            type="button"
            onClick={ () => setSearchBar(!searchBar) }
          >
            <img src={ searchIcon } alt=" search icon" data-testid="search-top-btn" />
          </button>
        )
        }
      </header>
      {
        searchBar && (
          <BarraDeBusca />
        )
      }
    </div>
  );
}
