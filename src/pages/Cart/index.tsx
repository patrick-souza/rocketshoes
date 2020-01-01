import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from 'store';
import { removeFromCart } from 'store/modules/cart/actions';

export default function Cart() {
  const products = useSelector((state: IAppState) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
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
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$360,00</strong>
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
          <strong>R$1920,22</strong>
        </Total>
      </footer>
    </Container>
  );
}
