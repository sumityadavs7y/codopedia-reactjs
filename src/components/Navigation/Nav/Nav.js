import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Logo from '../../Logo/Logo';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: 'white',
        color: '#022d8a'
    },
    menuButton: {
        marginRight: theme.spacing(0),
    },
    accountIcon: {
        marginRight: theme.spacing(1),
    },
    title: {
        color: 'black',
        flexGrow: 1,
    }
}));
const Nav = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static" color="secondary">
                <Toolbar>
                    <Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="h6" className={classes.title}>
                        <Logo /><strong>Codo</strong><span>Pedia</span>
                    </Typography>
                    <Button color="inherit"><AccountCircleIcon className={classes.accountIcon} />Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav;