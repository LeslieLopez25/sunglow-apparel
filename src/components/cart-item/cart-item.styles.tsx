import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  margin-bottom: 0.9375rem;
  width: 100%;
  height: 5rem;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0.625rem 1.25rem;
  width: 70%;

  span {
    font-size: 1rem;
  }
`;
