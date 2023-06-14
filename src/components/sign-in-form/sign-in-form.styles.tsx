import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
    color: #d97d0c;
  }

  span {
    color: #d97d0c;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: start;
    gap: 10px;

    button {
      display: grid;
      font-size: 12px;
      padding: 0;
    }
  }
`;
