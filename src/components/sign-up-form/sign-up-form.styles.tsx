import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.75rem;

  @media screen and (max-width: 50em) {
    position: relative;
    bottom: 24.375rem;
    left: 26.25rem;
  }

  h2 {
    margin: 0.625rem 0;
    color: hsl(33.1, 89.5%, 44.9%);
  }

  span {
    color: hsl(33.1, 89.5%, 44.9%);
  }
`;
