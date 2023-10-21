import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 21.875rem;
  position: relative;

  img {
    margin-bottom: 0.3125rem;
    width: 100%;
    height: 95%;
    object-fit: cover;
  }

  button {
    display: none;
    width: 80%;
    position: absolute;
    top: 15.9375rem;
    opacity: 0.7;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      display: flex;
      opacity: 0.85;
    }
  }

  @media screen and (max-width: 50em) {
    button {
      display: block;
      padding: 0 0.625rem;
      min-width: unset;
      opacity: 0.9;
    }

    &:hover {
      img {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.125rem;
  width: 100%;
  height: 5%;
`;

export const Name = styled.span`
  color: hsl(33.1, 89.5%, 44.9%);
  margin-bottom: 0.9375rem;
  width: 90%;

  @media screen and (max-width: 50em) {
    font-size: 0.9375rem;
    width: 70%;
  }
`;

export const Price = styled.span`
  color: hsl(33.1, 89.5%, 44.9%);
  width: 10%;

  @media screen and (max-width: 50em) {
    font-size: 0.9375rem;
  }
`;
