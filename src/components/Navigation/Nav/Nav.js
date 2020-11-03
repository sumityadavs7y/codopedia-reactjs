import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Logo from '../../Logo/Logo';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles((theme) => createStyles({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.background.paper,
    },
    logoIcon: {
        textDecoration: 'none',
        color: theme.palette.type === 'dark' ? 'white' : theme.main,
    },
    menuButton: {
        marginRight: theme.spacing(0),
        color: theme.palette.type === 'dark' ? 'white' : theme.main,
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
    const [values, setValues] = React.useState({
        darkMode: props.darkMode
    });

    const handleChange = (event) => {
        setValues({ darkMode: event.target.checked });
        props.switchThemeMode(event.target.checked);
    }

    const modeIcon = values.darkMode ? <BrightnessHighIcon /> : <Brightness4Icon style={{ color: 'black' }} />;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Typography variant="h6" className={classes.title}>
                            <NavLink className={classes.logoIcon} to='/'>
                                <Logo /><strong>Codo</strong><span>Pedia</span>
                            </NavLink>
                        </Typography>
                        <Switch
                            checked={values.darkMode}
                            onChange={handleChange}
                            color="primary"
                            name="darkMode"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        {modeIcon}
                        <NavLink to='/auth/login' className={classes.logoIcon}>
                            <Button color="inherit"><AccountCircleIcon className={classes.accountIcon} />Login</Button>
                        </NavLink>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />

        </div>
    )
}

export default Nav;