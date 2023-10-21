import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: hsl(356.7, 100%, 7.1%);
  padding: 1.25rem;
  width: 15rem;
  height: 21.25rem;
  position: absolute;
  top: 5.625rem;
  right: 2.5rem;
  border: 1px solid hsl(0.5, 100%, 21.8%);
  z-index: 5;

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    font-size: 0.75rem;
    margin-top: auto;

    @media screen and (max-width: 50em) {
      font-size: 0.5625rem;
    }
  }
`;

export const EmptyMessage = styled.span`
  color: hsl(41.8, 99%, 60.2%);
  font-size: 1.125rem;
  margin: 3.125rem auto;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  color: hsl(41.8, 99%, 60.2%);
  height: 15rem;
  overflow: scroll;
`;
