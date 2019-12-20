import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

import App from './App';

const GlobalStyle = createGlobalStyle`
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

ReactDOM.render(<App />, document.getElementById('root'));
