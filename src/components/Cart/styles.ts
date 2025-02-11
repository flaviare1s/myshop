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

export const Title = styled.h3`
  
`