import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { Context } from '../context/context';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const { totalProducts, setCartProducts } = useContext(Context);

  const getProducts = async () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const { token } = userData;

    const response = await axios.get('http://localhost:3001/products', { headers: { Authorization: token } });
    setProducts(response.data);
    setCartProducts(response.data.map((product) => ({
      ...product,
      totalPrice: 0,
      quantity: 0,
    })));
  };

  useEffect(() => {
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const calculateFinalPrice = () => {
      const productValues = Object.values(totalProducts);
      const finalPrice = productValues.reduce((acc, cur) => acc + cur, 0);
      return setTotalPrice(Number(finalPrice));
    };
    calculateFinalPrice();

    const verifyCart = () => {
      if (totalPrice > 0) {
        return setIsCartEmpty(false);
      } return setIsCartEmpty(true);
    };
    verifyCart();
  }, [totalPrice, totalProducts]);

  return (
    <section>
      <Navbar />
      {products.map((product) => (
        <ProductCard key={ product.id } data={ product } />
      ))}
      <Link to="/customer/checkout">
        <button
          type="button"
          data-testid="customer_products__button-cart"
          disabled={ isCartEmpty }
        >
          Ver Carrinho
          <h3 type="button" data-testid="customer_products__checkout-bottom-value">
            {(totalPrice.toFixed(2)).replace('.', ',')}
          </h3>
        </button>
      </Link>
    </section>
  );
}
