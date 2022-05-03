import { useHistory } from 'react-router-dom';
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function BarraDeBusca() {
  const {
    setSearchEl,
    setSearchValue,
    searchEl,
    api,
    searchValue,
    setRecipes,
    recipeType,
    setRecipesFiltered,
  } = useContext(AppContext);

  const history = useHistory();

  const handleClick = ({ target }) => {
    const { id } = target;
    setSearchEl(id);
  };

  async function handleSearch() {
    if (searchEl === 'first-letter' && searchValue.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    let URL = '';
    if (searchEl === 'ingredient') {
      URL = `https://www.${api}.com/api/json/v1/1/filter.php?i=${searchValue}`;
    } else if (searchEl === 'name') {
      URL = `https://www.${api}.com/api/json/v1/1/search.php?s=${searchValue}`;
    } else if (searchEl === 'first-letter') {
      URL = `https://www.${api}.com/api/json/v1/1/search.php?f=${searchValue}`;
    }
    const data = await fetch(URL);
    const results = await data.json()
      .then((res) => res)
      .catch(() => ({ message: 'JSON inválido' }));

    // if () {
    //   global.alert('Sorry, we haven\'t found any recipes for these filters.');
    //   return;
    // }

    if (results.message) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }

    const idKey = recipeType === 'drinks' ? 'idDrink' : 'idMeal';
    const UrlKey = recipeType === 'drinks' ? 'drinks' : 'foods';
    if (!results[recipeType]) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else if (results[recipeType].length === 1) {
      console.log(results[recipeType][0][idKey]);
      history.replace(`/${UrlKey}/${results[recipeType][0][idKey]}`);
    } else if (results[recipeType].length > 1) {
      const number = 12;
      setRecipesFiltered(results[recipeType].filter((drink, index) => index < number));
      setRecipes(results[recipeType].filter((drink, index) => index < number));
    }
  }

  return (
    <div className="searchBar">
      <label htmlFor="ingredient">
        Ingrediente
        <input
          type="radio"
          name="search-radio"
          data-testid="ingredient-search-radio"
          id="ingredient"
          onClick={ handleClick }
        />
      </label>

      <label htmlFor="name">
        Nome
        <input
          type="radio"
          name="search-radio"
          data-testid="name-search-radio"
          id="name"
          onClick={ handleClick }
        />
      </label>

      <label htmlFor="first-letter">
        Primeira Letra
        <input
          type="radio"
          name="search-radio"
          data-testid="first-letter-search-radio"
          id="first-letter"
          onClick={ handleClick }
        />
      </label>

      <input
        type="text"
        data-testid="search-input"
        onChange={ (e) => setSearchValue(e.target.value) }
      />

      <button
        type="button"
        className="search-btn"
        data-testid="exec-search-btn"
        onClick={ handleSearch }
      >
        Buscar
      </button>
    </div>
  );
}

export default BarraDeBusca;
