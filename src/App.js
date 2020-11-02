import React, { Suspense } from 'react';

import { Route, Switch } from 'react-router-dom';
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

<<<<<<< HEAD
const AsyncSyllabus = React.lazy(() => import('./containers/Syllabus/Syllabus'));
=======
>>>>>>> 80b4eea... added login modal

function App() {
  let routes = (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/syllabus' render={() => <Suspense fallback={<div>Loading...</div>}><AsyncSyllabus /></Suspense>} />
    </Switch>
  );
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
