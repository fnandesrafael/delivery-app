import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import OrderCard from '../components/OrderCard';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const HTTP_OK = 200;

  const getOrders = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const response = await axios.get('http://localhost:3001/sales', { headers: { Authorization: token } });

    if (response.status === HTTP_OK) {
      return setOrders(response.data);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  /*
  const test = '2022-09-29T23:24:36.000Z'
  const test2 = test.split("T")
  const test3 = test2[0].replaceAll('-', '/')
  */
  return (
    <>
      <Navbar />
      {orders.map((order) => (
        <OrderCard key={ order.id } value={ order } />
      ))}
    </>
  );
}

/*
- 33: customer_orders__element-order-id-<id>
- 34: customer_orders__element-delivery-status-<id>
- 35: customer_orders__element-order-date-<id>
- 36: customer_orders__element-card-price-<id>
*/
