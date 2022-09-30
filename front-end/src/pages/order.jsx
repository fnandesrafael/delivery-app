import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HTTP_OK = 200;
const D_STATUS = 'customer_order_details__element-order-details-label-delivery-status';

export default function Order() {
  const [saleDetails, setSaleDetails] = useState({});
  const [hasRecoveredData, setHasRecoveredData] = useState(false);

  const { id } = useParams();

  const getSaleDetails = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    const sales = await axios.get('http://localhost:3001/sales', { headers: { Authorization: token } });

    const filteredSale = sales.data.find((sale) => (
      sale.id === Number(id)
    ));

    // const saleDetailsResponse = await axios.get(
    //   `http://localhost:3001/sales/details/${id}`,
    //   { headers: { Authorization: token } },
    // );

    const sellersResponse = await axios.get(
      'http://localhost:3001/sales/sellers',
      { headers: { Authorization: token } },
    );

    if (sales.status === HTTP_OK && sellersResponse.status === HTTP_OK) {
      const sellerData = sellersResponse.data.find((seller) => (
        seller.id === filteredSale.sellerId
      ));

      setSaleDetails({ ...filteredSale, sellerData });
      setHasRecoveredData(true);
    }
  };

  const formatDate = (date) => {
    const formatedDate = new Date(date).toLocaleString('pt-br');
    return formatedDate.split(' ')[0];
  };

  useEffect(() => {
    getSaleDetails();
  }, []);

  return (
    hasRecoveredData ? (
      <div>
        <Navbar />
        <h1>Detalhes do Pedido</h1>
        <div>
          <p
            name="id-order"
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            { `PEDIDO 000${saleDetails.id}` }
          </p>
          <p
            name="seller-name"
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P. Vend:
            {' '}
            { saleDetails.sellerData.name }
          </p>
          <p
            name="date-order"
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { formatDate(saleDetails.saleDate) }
          </p>
          <h3
            data-testid={ D_STATUS }
          >
            { saleDetails.status }
          </h3>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            disabled
          >
            Entregue
          </button>
        </div>
        {/* <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
            </tr>
          </thead>
          <tbody>
            {
              saleDetails.products.map((product, index) => (
                <tr key={ index + 1 }>
                  <th
                    data-testid={
                      `customer_order_details__element-order-table-item-number-${index}`
                    }
                  >
                    { index + 1 }
                  </th>
                  <th
                    data-testid={
                      `customer_order_details__element-order-table-name-${index}`
                    }
                  >
                    { product.name }
                  </th>
                  <th
                    data-testid={
                      `customer_order_details__element-order-table-quantity${index}`
                    }
                  >
                    { product.quantity }
                  </th>
                  <th
                    data-testid={
                      `customer_order_details__element-order-table-unit-price-${index}`
                    }
                  >
                    { `R$${(product.price).replace('.', ',')}` }
                  </th>
                  <th
                    data-testid={
                      `customer_order_details__element-order-table-sub-total-${index}`
                    }
                  >
                    { `R$${product.subTotal.toFixed(2).replace('.', ',')}` }
                  </th>
                </tr>
              ))
            }
          </tbody>
        </table> */}
        {/* <h3
          data-testid="customer_order_details__element-order-total-price"
        >
          {
            saleDetails.products.reduce((acc, cur) => acc + cur.subTotal, 0)
              .toFixed(2).replace('.', ',')
          }
        </h3> */}
      </div>
    ) : (<p>Carregando...</p>)
  );
}
