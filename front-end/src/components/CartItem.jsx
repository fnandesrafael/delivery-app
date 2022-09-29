import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/context';

export default function CartItem({ value }) {
  const { products, setProducts } = useContext(Context);

  const { index, id, name, price, quantity, totalPrice } = value;

  const removeProduct = () => {
    const newCartItems = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: 0 };
      }
      return product;
    });
    setProducts(newCartItems);
  };

  return (
    <tr>
      <th
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </th>
      <th
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
      >
        {name}
      </th>
      <th
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {quantity}
      </th>
      <th
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {`R$${price.replace('.', ',')}`}
      </th>
      <th
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {`R$${(totalPrice.toFixed(2)).replace('.', ',')}`}
      </th>
      <th
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        onClick={ removeProduct }
      >
        Remover
      </th>
    </tr>
  );
}

CartItem.propTypes = {
  value: PropTypes.shape({
    index: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};
