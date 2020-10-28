import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import Cards from './Cards/Cards';
import Jumbotron from './Jumbotron/Jumbotron';

const useStyles = makeStyles((theme) => createStyles({
    container: {
        marginTop: theme.spacing(2)
    }
}));

const Home = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Jumbotron />
            <Container className={classes.container}>
                <Cards />
            </Container>
        </React.Fragment>
    );
}

export default Home;