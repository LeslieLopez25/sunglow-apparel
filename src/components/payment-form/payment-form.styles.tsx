import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 18.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 6.25rem;
  min-width: 31.25rem;
  color: hsl(33.1, 89.5%, 44.9%);
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 1.875rem;
`;
