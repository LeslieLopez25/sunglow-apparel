import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3.125rem auto 0;
  width: 55%;
  min-height: 90vh;

  @media screen and (max-width: 50em) {
    width: 90%;
  }
`;

export const CheckoutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.625rem 0;
  width: 100%;
  border-bottom: 1px solid hsl(41.8, 99%, 60.2%);
`;

export const HeaderBlock = styled.div`
  width: 23%;
  text-transform: capitalize;
  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 50em) {
    width: 22%;
    &:last-child {
      width: 12%;
    }
  }

  span {
    color: hsl(33.1, 89.5%, 44.9%);
  }

  @media screen and (max-width: 27.625em) {
    font-size: 0.75rem;
    width: 50%;
  }
`;

export const Total = styled.span`
  color: hsl(33.1, 89.5%, 44.9%);
  font-size: 2.25rem;
  margin-top: 1.875rem;
  margin-left: auto;
`;
