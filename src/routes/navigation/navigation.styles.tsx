import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5625rem;
  width: 100%;
  height: 4.375rem;

  @media screen and (max-width: 50em) {
    margin-bottom: 1.25rem;
    padding: 0.625rem 1.25rem;
    height: 3.75rem;
  }
`;
export const LogoContainer = styled(Link)`
  width: 4.375rem;
  height: 100%;
  position: relative;
  bottom: 1rem;

  @media screen and (max-width: 50em) {
    width: 3.125rem;
    position: relative;
    bottom: 2rem;
  }

  @media screen and (max-width: 30em) {
    width: 2rem;
    position: relative;
    right: 1.25rem;
    bottom: 2rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 50em) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 0.625rem 0.9375rem;
  cursor: pointer;
`;
