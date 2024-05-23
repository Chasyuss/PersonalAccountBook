import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    background-color : #f6f3f1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyle;
