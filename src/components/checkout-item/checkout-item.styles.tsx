import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 6.25rem;
  border-bottom: 1px solid hsl(41.8, 99%, 60.2%);
  padding: 0.9375rem 0;
  font-size: 1.25rem;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 0.9375rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
  color: hsl(33.1, 89.5%, 44.9%);
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
  padding-left: 0.75rem;
  color: hsl(33.1, 89.5%, 44.9%);
  cursor: pointer;
`;
