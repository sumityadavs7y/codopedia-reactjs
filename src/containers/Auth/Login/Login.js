import React from 'react';

import Card from '@material-ui/core/Card';
import { NavLink } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => createStyles({
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        width: '100%'
    },
    heading: {
        textAlign: 'center',
        marginBottom: '1rem',
        fontSize: '2rem'
    },
    textField: {
        width: '100%',
        marginTop: '1rem'
    },
    formButton: {
        marginTop: '1rem'
    }
}));


const Login = (props) => {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
        emailError: false,
        passwordError: false,
        emailHelperText: '',
        passwordHelperText: ''
    });

    // React.useEffect(() => {
    //     console.log(values);
    // })

    const handleChange = (prop) => (event) => {
        let newValues = {};
        newValues[prop + 'HelperText'] = '';
        newValues[prop + 'Error'] = false;
        setValues({ ...values, [prop]: event.target.value, ...newValues });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = (event) => {
        console.log(values);
        let newValues = {};
        let isValid = true;
        if (values.email.length === 0 || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
            isValid = false;
            newValues = { ...newValues, emailError: true, emailHelperText: 'Not a valid E-mail' }
        }
        if (values.password.length === 0) {
            isValid = false;
            newValues = { ...newValues, passwordError: true, passwordHelperText: 'Empty field' };
        }
        if (isValid) {
            // SEND HTTP REQUEST
            alert('submitted');
        } else {
            setValues({ ...values, ...newValues });
        }
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.heading} variant='h5' component='h2'>LOGIN</Typography>
                <FormControl error={values.emailError} className={classes.textField} variant="outlined">
                    <InputLabel htmlFor="email">E-Mail</InputLabel>
                    <OutlinedInput id="email" type='text' onChange={handleChange('email')} labelWidth={45} />
                    <FormHelperText id="email-error-text">{values.emailHelperText}</FormHelperText>
                </FormControl>
                <FormControl error={values.passwordError} className={classes.textField} variant="outlined">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                    <FormHelperText id="password-error-text">{values.passwordHelperText}</FormHelperText>
                </FormControl>
                <div className={classes.container}>
                    <Button className={classes.formButton} onClick={onSubmit} size="large" variant="contained" color="primary">Login</Button>
                </div>
                <div className={classes.container} style={{ marginTop: '2rem', alignItems: 'center', display: 'flex' }}>
                    <span>Not a member?</span><NavLink to='/auth/register' style={{ textDecoration: 'none' }}><Button color="primary">Register here!</Button></NavLink>
                </div>
            </CardContent>
        </Card>
    );
}

export default Login;