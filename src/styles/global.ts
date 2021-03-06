import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red-400: #E02041;

    --white: #FFFFFF;

    --shape: #F0F0F5;

    --gray-50: #DCDCE6;
    --gray-100: #A8A8B3;
    --gray-400: #737380;
    --gray-800: #41414D;

    --black-800: #13131A;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--shape);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--shape);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--red-400);
  }

  input:-webkit-autofill {
    box-shadow:0 0 0 50px white inset;
    -webkit-text-fill-color: #333;
  }

  input:-webkit-autofill:focus {
    box-shadow: 0 0 0 50px white inset;
    -webkit-text-fill-color: #333;
  }

  &::selection {
    color: #fff;
    background: var(--red-400);
  }
`;
