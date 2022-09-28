import { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function ContextProvider({ children }) {
  const [totalProducts, setTotalProducts] = useState({});

  const value = useMemo(() => ({
    totalProducts,
    setTotalProducts,
  }), [totalProducts]);

  return (
    <Context.Provider
      value={ value }
    >
      { children }
    </Context.Provider>
  );
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
