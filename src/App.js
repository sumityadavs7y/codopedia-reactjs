import React, { Suspense } from 'react';

import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';

import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const AsyncSyllabus = React.lazy(() => import('./containers/Syllabus/Syllabus'));
const AsyncAuth = React.lazy(() => import('./containers/Auth/Auth'));

function App() {

  const [customTheme, setTheme] = React.useState({
    darkMode: localStorage.getItem('darkMode') === 'true' ? true : false
  });
  const theme = createMuiTheme({
    palette: {
      type: customTheme.darkMode ? 'dark' : 'light'
    },
    main: '#022d8a',
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

  const switchThemeMode = (darkMode) => {
    setTheme({ darkMode: darkMode });
    localStorage.setItem('darkMode', darkMode);
  }

  let routes = (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/syllabus' render={() => <Suspense fallback={<div>Loading...</div>}><AsyncSyllabus /></Suspense>} />
      <Route path='/auth' render={() => <Suspense fallback={<div>Loading...</div>}><AsyncAuth /></Suspense>} />
    </Switch>
  );
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Layout darkMode={customTheme.darkMode} switchThemeMode={switchThemeMode}>
          {routes}
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
