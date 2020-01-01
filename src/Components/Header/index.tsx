import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, Cart } from './styles';

import logo from 'assets/logo.svg';
import { IAppState } from 'store';

export default function Header() {
  const cartSize = useSelector((state: IAppState) => state.cart.length);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="rocketShoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
