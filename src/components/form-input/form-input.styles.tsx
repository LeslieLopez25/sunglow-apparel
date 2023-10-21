import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "hsl(0.5, 100%, 21.8%)";

const shrinkLabelStyles = css`
  color: ${mainColor};
  font-size: 0.75rem;
  top: -0.875rem;
`;

type FormInputLabelProps = {
  shrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${subColor};
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  left: 0.3125em;
  top: 0.625rem;
  transition: 300ms ease all;
  pointer-events: none;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  display: block;
  background: none;
  background-color: hsl(0, 0%, 100%);
  color: ${subColor};
  font-size: 1.125rem;
  margin: 1.5625rem 0;
  padding: 0.625rem 0.625rem 0.625rem 0.3125rem;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }

  @media screen and (max-width: 50em) {
    width: 21.875rem;
  }

  @media screen and (max-width: 27.625em) {
    width: 21rem;
  }
`;

export const Group = styled.div`
  margin: 2.8125rem 0;
  position: relative;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
