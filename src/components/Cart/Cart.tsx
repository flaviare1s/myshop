import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles'
import { RootReducer } from '../../redux/root-reducer';
import { FiTrash2 } from 'react-icons/fi';

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({showCart}) => {
  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);

  const total = cart.reduce((acc, product) => acc + product.price, 0);
  const dispatch = useDispatch();

  return (
    <S.Container $showCart={showCart}>
      <S.Title>Carrinho</S.Title>
      <S.CartProductList>
        {cart.map(product => (
          <S.CartProductListItem key={product.id}><strong>{product.title} </strong> - ${product.price} 
          <S.RemoveButton onClick={() => dispatch({type: 'cart/remove-product', payload: product})}><FiTrash2 /></S.RemoveButton>
          </S.CartProductListItem>
        ))}
      </S.CartProductList>
      <S.CartTotal>
        Total: ${total}
      </S.CartTotal>
    </S.Container>  )
}
