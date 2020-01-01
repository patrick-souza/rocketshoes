import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from 'services/api';
import { formatPrice } from 'util/format';

type IProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  priceFormatted: string;
};

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

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

  return (
    <ProductList>
      {products.map(({ id, image, priceFormatted, title }) => (
        <li key={id}>
          <img src={image} alt={title} />
          <strong>{title}</strong>
          <span>{priceFormatted}</span>

          <button>
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
