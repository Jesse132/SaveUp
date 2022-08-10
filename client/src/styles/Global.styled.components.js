import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    line-height: 1.5;
    background: ${({ theme }) => theme.colors.body};
  }

  header {
    background: ${({ theme }) => theme.colors.header};
  }

  img{
    width: 100%
    height: 100px;
    display: block;
  }
`;

export default GlobalStyles;