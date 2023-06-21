import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.25rem;
  row-gap: 3.125rem;

  @media screen and (max-width: 50em) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.9375rem;
    grid-row-gap: 1.5625rem;
  }
`;

export const Title = styled.h2`
  color: hsl(41.8, 99%, 60.2%);
  font-size: 2.375rem;
  margin-bottom: 1.5625rem;
  text-align: center;
`;
