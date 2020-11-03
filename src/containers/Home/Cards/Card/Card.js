import React from 'react';

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import { createStyles, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => createStyles({
    cardIcon: {
        backgroundColor: theme.palette.action.active,
        color: theme.palette.background.default,
        verticalAlign: 'middle',
        borderRadius: '50%',
        padding: '0.3rem',
        paddingLeft: '0.35rem',
        marginBottom: '0.3rem',
        marginRight: '0.5rem',
    },
    card: {
        height: '100%',
        width: '100%',
        '&:hover': {
            backgroundColor: theme.palette.type === 'dark' ? 'rgba(33,33,33)' : '#f4fcf6',
            boxShadow: theme.palette.type === 'dark' ? '0 0.5rem 0.5rem rgba(255,255,255,0.075)' : '0 0.5rem 0.5rem rgba(0,0,0,0.075)',
            cursor: 'pointer',
        },
        '&hover .card-icon': {
            backgroundColor: 'white'
        }
    },
    cardContent: {
        color: theme.palette.text.secondary,
        marginTop: '0.7rem'
    }
}));
const HomeCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} >
            <CardContent>
                <Typography variant='h5' component='h2'>
                    <CodeIcon className={classes.cardIcon} />{props.title}
                </Typography>
                <Typography variant="body2" component="p" className={classes.cardContent}>
                    {props.content}
                </Typography>
            </CardContent>
        </Card >
    )
}

export default HomeCard;