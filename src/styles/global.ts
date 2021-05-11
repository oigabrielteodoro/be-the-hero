import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --red-400: #E02041;

    --white: #FFFFFF;

    --background: ##F0F0F5;

    --gray-50: ##DCDCE6;
    --gray-100: ##A8A8B3;
    --gray-400: ##737380;
    --gray-800: ##41414D;

    --black-800: ##13131A;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
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

  &::selection {
    color: var(--white);
    background: var(--red-400);
  }
`;
