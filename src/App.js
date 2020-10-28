import React from 'react';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  fontFamily: [
    '"Open Sans"',
    'sans-serif',
  ].join(','),
  typography: {
    fontFamily: [
      '"Open Sans"',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>

      <div>
        <Layout>
          <Home />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
