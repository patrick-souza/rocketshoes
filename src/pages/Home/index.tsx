import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from 'services/api';
import { formatPrice } from 'util/format';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from 'store/modules/cart/types';
import { addToCart } from 'store/modules/cart/actions';
import { IAppState } from 'store';

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const dispatch = useDispatch();

  const amount = useSelector((state: IAppState) => {
    const amount = state.cart.reduce((amount: any, product) => {
      amount[product.id] = product.amount;

      return amount;
    }, {});

    return amount;
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get('products');

      const data = response.data.map((product: IProduct) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleAddProduct = (id: number) => {
    dispatch(addToCart(id));
  };

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />{' '}
              {amount[product.id] || 0}
            </div>
            <span>Adicionar ao Carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
