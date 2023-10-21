import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 1.5rem;
  height: 1.5rem;
`;

export const CartIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.8125rem;
  height: 2.8125rem;
  position: relative;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  color: hsl(41.8, 99%, 60.2%);
  font-size: 0.625rem;
  font-weight: bold;
  position: absolute;
  bottom: 0.75rem;
`;
