import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/context';

function ProductCard({ data }) {
  const { setFinalPrice } = useContext(Context);
  const { id, name, price, urlImage } = data;
  const [quantity, setQuantity] = useState(0);

  const updateQuantityAndPrice = (isAdding) => {
    if (isAdding) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      return setFinalPrice(quantity * price);
    }
    const newValue = quantity - 1;
    setQuantity(newValue);
    setFinalPrice(quantity * price);
  };

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
        onClick={ updateQuantityAndPrice(true) }
      >
        +
      </button>
      <input
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ quantity }
        min="0"
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ updateQuantityAndPrice(false) }
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
