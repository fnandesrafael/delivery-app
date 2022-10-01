import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function OrderCard({ value }) {
  const { id, saleDate, status, totalPrice } = value;

  const formatDate = (date) => {
    const formatedDate = new Date(date).toLocaleString('pt-br');
    return formatedDate.split(' ')[0];
  };

  return (
    <Link to={ `/customer/orders/${id}` }>
      <div>
        <label htmlFor="orderNumber">
          Pedido:
          {' '}
          <p data-testid={ `customer_orders__element-order-id-${id}` }>{ id }</p>
        </label>
        <h2 data-testid={ `customer_orders__element-delivery-status-${id}` }>
          { status }
        </h2>
        <p data-testid={ `customer_orders__element-order-date-${id}` }>
          { formatDate(saleDate) }
        </p>
        <p data-testid={ `customer_orders__element-card-price-${id}` }>
          { totalPrice.replace('.', ',') }
        </p>
      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  value: PropTypes.shape({
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
};
