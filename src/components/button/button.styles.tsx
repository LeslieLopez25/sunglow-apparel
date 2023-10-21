import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner.styles";

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0.5, 100%, 21.8%);
  color: hsl(41.8, 99%, 60.2%);
  font-family: "Open Sans Condensed";
  font-size: 0.9375rem;
  font-weight: bolder;
  padding: 0 2.1875rem 0 2.1875rem;
  min-width: 10.3125rem;
  width: auto;
  height: 3.125rem;
  letter-spacing: 0.5px;
  line-height: 50px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: hsl(41.8, 99%, 60.2%);
    color: hsl(0.5, 100%, 21.8%);
    border: 1px solid hsl(0.5, 100%, 21.8%);
  }

  @media screen and (max-width: 50em) {
    width: 6.25rem;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: hsl(217.4, 89%, 60.8%);
  color: hsl(0, 0%, 100%);

  &:hover {
    background-color: hsl(216.9, 79.6%, 55.9%);
    color: hsl(0, 0%, 0%);
    border: none;
  }

  @media screen and (max-width: 50em) {
    width: 6.25rem;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: hsl(41.8, 99%, 60.2%);
  color: hsl(0.5, 100%, 21.8%);
  border: 1px solid hsl(0.5, 100%, 21.8%);

  &:hover {
    background-color: hsl(0.5, 100%, 21.8%);
    color: hsl(41.8, 99%, 60.2%);
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 1.875rem;
  height: 1.875rem;
`;
