import React from 'react';

import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
export default function Home() {
  return (
    <ProductList>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <li key={i}>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-caminhada-confortavel-detalhes-couro-masculino/04/E74-0413-304/E74-0413-304_detalhe2.jpg?ims=326x"
            alt="Tenis"
          />
          <strong>Tenis muito legal</strong>
          <span>R$ 190,90</span>

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
