import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    position: relative;
    bottom: 390px;
    left: 420px;
  }

  h2 {
    margin: 10px 0;
    color: #d97d0c;
  }

  span {
    color: #d97d0c;
  }
`;
