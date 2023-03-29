import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color:${({ theme }) => theme.colors.gray.default};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;
