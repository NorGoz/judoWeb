import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* body {
    font-family: "Inter", sans-serif;
    background-color: #f9f9f9;
    color: #222;
    line-height: 1.5;
  } */
     body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: #111;
    background: linear-gradient(135deg, #001845 0%, #004aad 40%, #00b4d8 100%);
    background-attachment: fixed;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
