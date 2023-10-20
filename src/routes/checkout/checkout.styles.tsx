import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3.125rem auto 0;

  @media screen and (max-width: 50em) {
    width: 90%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 0.625rem 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid hsl(41.8, 99%, 60.2%);
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
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
  margin-top: 1.875rem;
  margin-left: auto;
  font-size: 2.25rem;
  color: hsl(33.1, 89.5%, 44.9%);
`;
