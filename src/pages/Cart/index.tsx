import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from 'store';
import {
  removeFromCart,
  updateAmountRequest,
} from 'store/modules/cart/actions';
import { IProduct } from 'store/modules/cart/types';
import { formatPrice } from 'util/format';

export default function Cart() {
  const { products, total } = useSelector((state: IAppState) => {
    const products = state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }));

    const total = formatPrice(
      products.reduce(
        (total, product) => total + product.price * product.amount,
        0
      )
    );

    return { products, total };
  });
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (product: IProduct) => {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  };

  const handleDecrement = (product: IProduct) => {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  };

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>Produtos</th>
            <th>QTD</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button>
                    <MdRemoveCircleOutline
                      size={20}
                      color="#7159c1"
                      onClick={() => handleDecrement(product)}
                    />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button>
                    <MdAddCircleOutline
                      size={20}
                      color="#7159c1"
                      onClick={() => handleIncrement(product)}
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button onClick={() => handleRemoveFromCart(product.id)}>
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button>Finalizar Pedido</button>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
