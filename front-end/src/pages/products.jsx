import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { Context } from '../context/context';

export default function Products() {
  const [productCards, setProductCards] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const {
    setProducts, totalPrice, setTotalPrice, productsTotalPrice,
  } = useContext(Context);

  const getProductsData = async () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const { token } = userData;

    const response = await axios.get('http://localhost:3001/products', { headers: { Authorization: token } });
    setProductCards(response.data);
    setProducts(response.data.map((product) => ({
      ...product,
      totalPrice: 0,
      quantity: 0,
    })));
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    const calculateFinalPrice = () => {
      const productValues = Object.values(productsTotalPrice);
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
  }, [totalPrice, setTotalPrice, productsTotalPrice]);

  return (
    <section>
      <Navbar />
      {productCards.map((product) => (
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
