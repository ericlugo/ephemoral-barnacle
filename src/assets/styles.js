import createGlobalStyle from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    *, *:before, *:after {
      box-sizing: inherit;
      transition: inherit;
    }
  }

  body {
    background: #efefef;
    font: 100% 'Roboto', sans-serif;
    color: rgba(0, 0, 0, 0.87);
  }
  
  /* other global styles go here */
`;

export const theme = {
  // look at mat ui default theme for guide points
};
