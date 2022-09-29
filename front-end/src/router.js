import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Products from './pages/products';
import Register from './pages/register';
import Checkout from './pages/checkout';
import Orders from './pages/orders';
import Order from './pages/order';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate replace to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route exact path="/customer/orders" element={ <Orders /> } />
        <Route path="/customer/orders/:id" element={ <Order /> } />
      </Routes>
    </BrowserRouter>
  );
}
