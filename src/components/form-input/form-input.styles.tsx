import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "hsl(0.5, 100%, 21.8%)";

const shrinkLabelStyles = css`
  top: -0.875rem;
  font-size: 0.75rem;
  color: ${mainColor};
`;

type FormInputLabelProps = {
  shrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${subColor};
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.3125em;
  top: 0.625rem;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: hsl(0, 0%, 100%);
  color: ${subColor};
  font-size: 1.125rem;
  padding: 0.625rem 0.625rem 0.625rem 0.3125rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 1.5625rem 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }

  @media screen and (max-width: 50em) {
    width: 21.875rem;
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 2.8125rem 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
