import styled from "styled-components";

interface ContainerProps {
  $showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 60px;
  right: ${props => props.$showCart ? '0' : '-300px'};
  width: 300px;
  height: 100vH;
  background-color: white;
  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  transition: right 1s;
`

export const Title = styled.h3``

export const CartProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  list-style: none;
`

export const CartProductListItem = styled.li`
  font-size: 1rem;
`

export const CartTotal = styled.strong`
  font-size: 1.1rem;
`

export const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  color: red;
  margin-left: 1rem;
  
  svg {
    font-size: 1rem;
  }
`
