import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 21.875rem;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 0.3125rem;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 15.9375rem;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 50em) {
    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 0.625rem;
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
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  font-size: 1.125rem;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 0.9375rem;
  color: hsl(33.1, 89.5%, 44.9%);

  @media screen and (max-width: 50em) {
    width: 70%;
    font-size: 0.9375rem;
  }
`;

export const Price = styled.span`
  width: 10%;
  color: hsl(33.1, 89.5%, 44.9%);

  @media screen and (max-width: 50em) {
    font-size: 0.9375rem;
  }
`;
