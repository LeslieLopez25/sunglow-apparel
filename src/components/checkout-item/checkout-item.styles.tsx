import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  padding: 0.9375rem 0;
  min-height: 6.25rem;
  width: 100%;
  border-bottom: 1px solid hsl(41.8, 99%, 60.2%);
`;

export const ImageContainer = styled.div`
  padding-right: 0.9375rem;
  width: 23%;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  color: hsl(33.1, 89.5%, 44.9%);
  width: 23%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 0.625rem;
`;

export const RemoveButton = styled.div`
  color: hsl(33.1, 89.5%, 44.9%);
  padding-left: 0.75rem;
  cursor: pointer;
`;
