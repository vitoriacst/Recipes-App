import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  return (
    <header
      data-testid=""
      className="main-header"
    >
      <Link to="/profile">
        <button
          type="button"
          data-testid="profile-top-btn"
        >
          {profileIcon}
        </button>
      </Link>
      <button
        type="button"
        data-testid="search-top-btn"
      >
        {searchIcon}
      </button>
    </header>
  );
}
