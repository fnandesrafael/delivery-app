import { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function ContextProvider({ children }) {
  const [totalProducts, setTotalProducts] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const value = useMemo(() => ({
    totalProducts,
    setTotalProducts,
    cartProducts,
    setCartProducts,
    cartItems,
    setCartItems,
  }), [totalProducts, cartProducts, cartItems]);

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
