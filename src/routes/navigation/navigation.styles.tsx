import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 4.375rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5625rem;

  @media screen and (max-width: 50em) {
    height: 3.75rem;
    padding: 0.625rem 1.25rem;
    margin-bottom: 1.25rem;
  }
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 4.375rem;
  position: relative;
  bottom: 0.9375rem;

  @media screen and (max-width: 50em) {
    width: 3.125rem;
    position: relative;
    bottom: 1.5625rem;
  }

  @media screen and (max-width: 30em) {
    width: 2rem;
    position: relative;
    bottom: 2rem;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 50em) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 0.625rem 0.9375rem;
  cursor: pointer;
`;
