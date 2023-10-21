import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: hsl(356.7,100%,7.1%);
    font-family: "Fira Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    margin: 0;
  padding: 1.25rem 2.5rem;

  @media screen and (max-width: 50em) {
    padding: 0.625rem;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  color: hsl(41.8,99%,60.2%);
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;
