import { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function ContextProvider({ children }) {
  const [finalPrice, setFinalPrice] = useState(0);

  const value = useMemo(() => ({
    finalPrice,
    setFinalPrice,
  }), [finalPrice]);

  return <Context.Provider value={ value }>{ children }</Context.Provider>;
}

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
