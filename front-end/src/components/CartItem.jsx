import React from 'react';
import PropTypes from 'prop-types';

export default function CartItem({ value }) {
  const { index, name, price, quantity, totalPrice } = value;

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
      >
        Remover
      </th>
    </tr>
  );
}

CartItem.propTypes = {
  value: PropTypes.shape({
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};
