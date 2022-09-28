import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/context';

function ProductCard({ data }) {
  const [quantity, setQuantity] = useState(0);
  const [isLessBtnDisabled, setIsLessBtnDisabled] = useState(true);

  const { setTotalProducts } = useContext(Context);

  const { id, name, price, urlImage } = data;

  const updateQuantity = (isAdding) => {
    if (isAdding) {
      return setQuantity((prevState) => prevState + 1);
    } return setQuantity((prevState) => prevState - 1);
  };

  useEffect(() => {
    const updateFinalPrice = () => {
      const productPrice = quantity * Number(price);
      setTotalProducts((prevState) => ({ ...prevState, [`procut${id}`]: productPrice }));
    };
    updateFinalPrice();

    const verifyQuantity = () => {
      if (quantity === 0) {
        return setIsLessBtnDisabled(true);
      } return setIsLessBtnDisabled(false);
    };
    verifyQuantity();
  }, [quantity, price, id, setTotalProducts]);

  return (
    <div>
      <h3
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </h3>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price.replace('.', ',') }
      </p>
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ () => updateQuantity(true) }
      >
        +
      </button>
      <input
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ quantity }
        onChange={ ({ target }) => { setQuantity(Number(target.value)); } }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ () => updateQuantity(false) }
        disabled={ isLessBtnDisabled }
      >
        -
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
