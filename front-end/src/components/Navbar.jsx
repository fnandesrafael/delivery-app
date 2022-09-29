import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function Navbar() {
  const [hasLogouted, setHasLogouted] = useState(false);
  const [userName, setUserName] = useState('');

  const recoverUserData = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    return setUserName(userData.name);
  };

  const clearUserData = () => {
    localStorage.removeItem('user');
    return setHasLogouted(true);
  };

  useEffect(() => {
    recoverUserData();
  }, []);

  return (
    hasLogouted ? (
      <Navigate to="/login" />
    ) : (
      <nav>
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
        >
          <h5>Produtos</h5>
        </Link>
        <Link
          to="/customer/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          <h5>Meus Pedidos</h5>
        </Link>
        <Link
          to="/"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          <h5>{ userName }</h5>
        </Link>
        <Link
          to="/login"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ clearUserData }
        >
          <h5>Sair</h5>
        </Link>
      </nav>
    )
  );
}
