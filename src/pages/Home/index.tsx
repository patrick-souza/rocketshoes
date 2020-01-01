import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from 'services/api';
import { formatPrice } from 'util/format';
import { useDispatch } from 'react-redux';
import { IProduct } from 'store/modules/cart/types';
import { addToCart } from 'store/modules/cart/actions';

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const dispatch = useDispatch();

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

  const handleAddProduct = (product: IProduct) => {
    dispatch(addToCart(product));
  };

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>Adicionar ao Carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
