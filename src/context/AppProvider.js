import PropTypes from 'prop-types';
import React from 'react';
import AppContext from './AppContext';

function AppProvider(props) {
  const { children } = props;
  const providerValue = {
    nomesAqui,
  };
  return (
    <AppContext.Provider value={ providerValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
