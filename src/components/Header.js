import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/Header.css';
import BarraDeBusca from './BarraDeBusca';

export default function Header() {
  const { setSearchBar, searchBar } = useContext(AppContext);

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
        <button
          type="button"
          onClick={ setSearchBar }
        >
          <img src={ searchIcon } alt=" search icon" data-testid="search-top-btn" />
        </button>
      </header>
      {
        searchBar && (
          <BarraDeBusca />
        )
      }
    </div>
  );
}
