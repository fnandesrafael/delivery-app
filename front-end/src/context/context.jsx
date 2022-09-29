import { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function ContextProvider({ children }) {
  const [productsTotalPrice, setProductsTotalPrice] = useState({});
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const value = useMemo(() => ({
    productsTotalPrice,
    setProductsTotalPrice,
    products,
    setProducts,
    cartItems,
    setCartItems,
    totalPrice,
    setTotalPrice,
  }), [productsTotalPrice, products, cartItems, totalPrice]);

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
