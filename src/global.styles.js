import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  padding: 1.25rem 2.5rem;
  font-family: "Fira Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: hsl(356.7,100%,7.1%);

  @media screen and (max-width: 50em) {
    padding: 0.625rem;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  text-decoration: none;
  color: hsl(41.8,99%,60.2%);
}

* {
  box-sizing: border-box;
}
`;
