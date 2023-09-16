import styled from "styled-components";

export const SpinnerOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(356.7, 100%, 7.1%);
  width: 100vw;
  height: 100vw;
  margin: 0 auto;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 3.125rem;
  height: 3.125rem;
  border: 3px solid rgba(165, 48, 5, 0.6);
  border-radius: 50%;
  border-top-color: hsl(16.1, 94.1%, 33.3%);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
