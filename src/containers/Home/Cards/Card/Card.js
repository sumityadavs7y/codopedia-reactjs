import React from 'react';

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';

import classes from './Card.module.css';

const HomeCard = (props) => {

    return (
        <Card className={classes.Card} >
            <CardContent>
                <Typography variant='h5' component='h2'>
                    <CodeIcon className={classes.CardIcon} />{props.title}
                </Typography>
                <Typography variant="body2" component="p" style={{ color: '#5d6778' }}>
                    {props.content}
                </Typography>
            </CardContent>
        </Card >
    )
}

export default HomeCard;