import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Profile() {
  return (
    <div className="main-perfil">
      <h1 data-testid="page-title">Profile</h1>
      <p data-testid="profile-email">email</p>
      <Link to="/done-recipes">
        <button
          type="button"
          data-testid="profile-done-btn"
          className="button-profile"
        >
          Done Recipes

        </button>
      </Link>
      <Link to="/favorite-recipes">
        <button
          type="button"
          data-testid="profile-favorite-btn"
          className="button-profile"
        >
          Favorite Recipes

        </button>
      </Link>
      <button type="button" data-testid="profile-logout-btn">Logout</button>
    </div>
  );
}

export default Profile;
