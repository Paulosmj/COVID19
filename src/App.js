import React from 'react';
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core';
import GlobalStyle from './commons/styles/global-style';
import Main from './containers/Main';

function App() {
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
    .then(() => console.log('Request ok'))
    .catch(() => console.log('ERROR'))

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
