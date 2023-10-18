import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.75rem;

  h2 {
    margin: 0.625rem 0;
    color: hsl(33.1, 89.5%, 44.9%);
  }

  span {
    color: hsl(33.1, 89.5%, 44.9%);
  }

  @media screen and (max-width: 50em) {
    align-self: center;
    /* width: 100%;
    min-height: 100%;
    padding: 1rem calc((80vw - 6rem) / 2);
    margin: 0 auto; */

    h2 {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 27.625em) {
    margin-right: 32rem;
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
