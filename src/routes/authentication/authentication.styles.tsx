import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.875rem auto;
  width: 56.25rem;

  @media screen and (max-width: 50em) {
    display: flex;
    flex-direction: column;
    grid-row-gap: 3.125rem;
    width: 30rem;
  }

  @media screen and (max-width: 27.625em) {
    max-width: 100%;
  }
`;
