import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi'
import * as S from './styles'
import { useState } from 'react';
import { Cart } from '../Cart/Cart';

export const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>
        <S.ButtonsWrapper>
          <S.AuthButton onClick={() => setIsLogged(!isLogged)} isLogged={isLogged}>
            {isLogged ? 'Logout' : 'Login'}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} />
    </S.StyledHeader>
  )
}
