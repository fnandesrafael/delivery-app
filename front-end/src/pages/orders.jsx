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

  return (
    <>
      <Navbar />
      {orders.map((order) => (
        <OrderCard key={ order.id } value={ order } />
      ))}
    </>
  );
}
