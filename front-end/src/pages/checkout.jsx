import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Context } from '../context/context';
import CartItem from '../components/CartItem';

const HTTP_CREATED = 201;

export default function Checkout() {
  const [customerAddress, setCustomerAdderess] = useState({
    address: '',
    number: '',
  });
  const [orderId, setOrderId] = useState(0);

  const [isSaleCreated, setIsSaleCreated] = useState(false);

  const { products, cartItems, setCartItems, totalPrice } = useContext(Context);

  const filterCartProducts = () => {
    const filteredCartProducts = products.filter((product) => product.quantity !== 0);
    return setCartItems(filteredCartProducts);
  };

  const postSale = async () => {
    const { id, token } = JSON.parse(localStorage.getItem('user'));
    const body = {
      requests: cartItems.map((item) => (
        { ...item, userId: id, sellerId: 1, productId: item.id }
      )),
      totalPrice,
      customerAddress,
    };

    const response = await axios.post('http://localhost:3001/sales', body, { headers: { Authorization: token } });

    if (response.status === HTTP_CREATED) {
      setOrderId(response.data.id);
      setIsSaleCreated(true);
    } setIsSaleCreated(false);
  };

  useEffect(() => {
    filterCartProducts();
  }, [products]);

  return (
    isSaleCreated ? (
      <Navigate to={ `/customer/orders/${orderId}` } />
    ) : (
      <>
        <Navbar />
        <h2>Finalizar Pedido</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
              <th>Remover Item</th>
            </tr>
          </thead>
          {
            cartItems.length === 0 ? (
              <tbody />
            ) : (
              <tbody>
                {
                  cartItems.map((item, index) => (
                    <CartItem key={ index } value={ { ...item, index } } />
                  ))
                }
              </tbody>
            )
          }
        </table>
        <div>
          <h2>Total: R$</h2>
          <h2 data-testid="customer_checkout__element-order-total-price">
            {((cartItems.reduce((acc, cur) => acc + cur.totalPrice, 0))
              .toFixed(2)).replace('.', ',')}
          </h2>
        </div>
        <div>
          <h2>Detalhes e Endereço para Entrega</h2>
          <label htmlFor="seller">
            P. Vendedora Responsavel
            <select data-testid="customer_checkout__select-seller">
              <option>fulana</option>
            </select>
          </label>
          <label htmlFor="adderess">
            <input
              data-testid="customer_checkout__input-address"
              type="text"
              onChange={
                ({ target }) => setCustomerAdderess((prevState) => (
                  { ...prevState, address: target.value }
                ))
              }
            />
          </label>
          <label htmlFor="number">
            <input
              data-testid="customer_checkout__input-address-number"
              type="text"
              onChange={
                ({ target }) => setCustomerAdderess((prevState) => (
                  { ...prevState, number: target.value }
                ))
              }
            />
          </label>
        </div>
        <button
          id="submit-button"
          data-testid="customer_checkout__button-submit-order"
          type="button"
          aria-label="submit-button"
          onClick={ postSale }
        >
          Finalizar Pedido
        </button>
      </>
    )
  );
}
