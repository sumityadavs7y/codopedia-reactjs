import React from 'react';

import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';

import Card from './Card/Card';

const cardsContent = [{
    title: 'Syllabus',
    to: '/syllabus',
    content: 'Set of Topics to get placed in top MNC.'
}, {
    title: 'Geek Sheet',
    to: '/',
    content: 'Curated list of coding questions which are commanly asked in interviews'
}, {
    title: 'Competitive Coding',
    to: '/',
    content: 'Starting with Competative coding? This Section is for you'
}, {
    title: 'Projects',
    to: '/',
    content: 'List of various project ideas which can make you stand out of crowd.'
}, {
    title: 'Interview Experiences',
    to: '/',
    content: 'Some Interview Experiences of geeks which are already placed at top MNC.'
}, {
    title: 'Resources',
    to: '/',
    content: 'List of Resources used by multiple geeks to get placed.'
}];


const Cards = props => {
    const topics = cardsContent.map(cardContent => {
        return (
            // <NavLink to="/syllabus">
            <Grid item xs={12} sm={6} md={4}>
                <NavLink style={{ textDecoration: 'none' }} to={cardContent.to}>
                    <Card title={cardContent.title} content={cardContent.content} />
                </NavLink>
            </Grid>
        )
    });
    return (
        <div>
<<<<<<< HEAD
            <Grid style={{ alignItems: 'stretch', marginTop: '20px' }} container spacing={3}>
=======
            <Grid style={{ alignItems: 'stretch',paddingTop:'30px',paddingBottom:'35px'}} container spacing={3}>
>>>>>>> 80b4eea... added login modal
                {topics}
            </Grid>
        </div>
    );
}

export default Cards;