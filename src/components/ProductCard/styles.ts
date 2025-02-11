import styled from "styled-components";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
`

export const ProductImage = styled.img`
  width: 250px;
  height: 400px;

  object-fit: contain;
`

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 1rem;
  min-height: 4rem;
`

export const ReviewPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`

export const Review = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.7rem;

  svg {
    font-size: 1rem;
  }
`

export const Price = styled.strong`
`

export const AddToCartButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  font-size: 0.75rem;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  background-color: blue;
  color: white;

  svg {
    font-size: .7rem;
  }
`;

export const RemoveToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  font-size: 0.75rem;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  background-color: violet;
  color: black;

  svg {
    font-size: 0.7rem;
  }
`;
