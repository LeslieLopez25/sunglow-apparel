import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 23.75rem;

  @media screen and (max-width: 50em) {
    display: flex;
  }

  h2 {
    color: hsl(33.1, 89.5%, 44.9%);
    margin: 0.625rem 0;
  }

  span {
    color: hsl(33.1, 89.5%, 44.9%);
  }

  @media screen and (max-width: 34.375em) {
    margin: 0 auto;
  }

  @media screen and (max-width: 27.625em) {
    max-width: 100%;
  }
`;
