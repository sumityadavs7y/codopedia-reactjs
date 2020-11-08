import React, { Suspense } from 'react';

import Grid from '@material-ui/core/Grid';
import { Route, Switch } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import Logout from './Logout/Logout';

const useStyles = makeStyles((theme) => createStyles({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    cardContainer: {
        margin: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        height: '100%'
    }
}));
const AsyncLogin = React.lazy(() => import('./Login/Login'));
const AsyncRegister = React.lazy(() => import('./Register/Register'));

const Auth = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.container}>
                <Grid className={classes.cardContainer} item xs={12} sm={8} md={6} lg={4}>
                    <Switch>
                        {/* <Route path='/' exact render={() => <Suspense fallback={<div>Loading...</div>}><AsyncLogin /></Suspense>} /> */}
                        <Route path={`${props.match.path}/login`} render={() => <Suspense fallback={<div>Loading...</div>}><AsyncLogin /></Suspense>} />
                        <Route path={`${props.match.path}/register`} render={() => <Suspense fallback={<div>Loading...</div>}><AsyncRegister /></Suspense>} />
                        <Route path={`${props.match.path}/logout`} component={Logout} />
                    </Switch>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Auth);