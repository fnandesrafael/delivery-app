import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { Context } from '../context/context';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { finalPrice } = useContext(Context);

  const getProducts = async () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const { token } = userData;

    const response = await axios.get('http://localhost:3001/products', { headers: { Authorization: token } });
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section>
      <Navbar />
      {products.map((product) => (
        <ProductCard key={ product.id } data={ product } />
      ))}
      <button type="button" data-testid="customer_products__checkout-bottom-value">
        {`ver carrinho R$${finalPrice}`}
      </button>
    </section>
  );
}
