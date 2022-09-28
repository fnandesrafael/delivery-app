import React, { useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Context } from '../context/context';
import CartItem from '../components/CartItem';

export default function Checkout() {
  const { cartProducts, cartItems, setCartItems } = useContext(Context);

  const filterCartProducts = () => {
    const filteredCartProducts = cartProducts.filter((product) => product.quantity !== 0);
    return setCartItems(filteredCartProducts);
  };

  useEffect(() => {
    filterCartProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts]);

  return (
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
          <input data-testid="customer_checkout__input-address" type="text" />
        </label>
        <label htmlFor="number">
          <input data-testid="customer_checkout__input-address-number" type="number" />
        </label>
      </div>
      <button
        id="submit-button"
        data-testid="customer_checkout__button-submit-order"
        type="button"
        aria-label="submit-button"
        // onClick={ createOrder }
      >
        Finalizar Pedido
      </button>
    </>
  );
}
