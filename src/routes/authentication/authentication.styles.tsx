import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 56.25rem;
  justify-content: space-between;
  margin: 1.875rem auto;

  @media screen and (max-width: 50em) {
    display: flex;
    flex-direction: column;
    grid-row-gap: 3.125rem;
    width: 30rem;
  }

  @media screen and (max-width: 27.625em) {
    width: 5rem;
  }
`;
