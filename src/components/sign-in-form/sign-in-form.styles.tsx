import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 23.75rem;

  h2 {
    color: hsl(33.1, 89.5%, 44.9%);
    margin: 0.625rem 0;
  }

  span {
    color: hsl(33.1, 89.5%, 44.9%);
  }

  @media screen and (max-width: 50em) {
    h2 {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 34.375em) {
    margin: 0 auto;
  }

  @media screen and (max-width: 27.625em) {
    max-width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 50em) {
    display: flex;
    justify-content: start;
    gap: 0.625rem;

    button {
      display: grid;
      font-size: 0.75rem;
      padding: 0;
    }
  }
`;
