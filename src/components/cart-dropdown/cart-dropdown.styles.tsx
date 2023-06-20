import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 15rem;
  height: 21.25rem;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border: 1px solid hsl(0.5, 100%, 21.8%);
  background-color: hsl(356.7, 100%, 7.1%);
  top: 5.625rem;
  right: 2.5rem;
  z-index: 5;

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin-top: auto;
    font-size: 0.75rem;

    @media screen and (max-width: 50em) {
      font-size: 0.5625rem;
    }
  }
`;

export const EmptyMessage = styled.span`
  font-size: 1.125rem;
  margin: 3.125rem auto;
  color: hsl(41.8, 99%, 60.2%);
`;

export const CartItems = styled.div`
  height: 15rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  color: hsl(41.8, 99%, 60.2%);
`;
