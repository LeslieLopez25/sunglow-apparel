import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 18.75rem;

  @media screen and (max-width: 27.625em) {
    min-width: 22.5rem;
  }
`;

export const FormContainer = styled.form`
  color: hsl(33.1, 89.5%, 44.9%);
  min-width: 31.25rem;
  height: 6.25rem;

  @media screen and (max-width: 27.625em) {
    min-width: 100%;
  }
`;

export const PaymentButton = styled(Button)`
  margin-top: 1.875rem;
  margin-left: auto;
`;
