import React from 'react';

import Grid from '@material-ui/core/Grid';

import Card from './Card/Card';

const cardsContent = [{
    title: 'Syllabus',
    content: 'Set of Topics to get placed in top MNC.'
}, {
    title: 'Geek Sheet',
    content: 'Curated list of coding questions which are commanly asked in interviews'
}, {
    title: 'Competitive Coding',
    content: 'Starting with Competative coding? This Section is for you'
}, {
    title: 'Projects',
    content: 'List of various project ideas which can make you stand out of crowd.'
}, {
    title: 'Interview Experiences',
    content: 'Some Interview Experiences of geeks which are already placed at top MNC.'
}, {
    title: 'Resources',
    content: 'List of Resources used by multiple geeks to get placed.'
}];


const Cards = props => {
    const topics = cardsContent.map(cardContent => {
        return (
            <Grid item xs={12} sm={6} md={4}>
                <Card title={cardContent.title} content={cardContent.content} />
            </Grid>
        )
    });
    return (
        <div>
            <Grid style={{ alignItems: 'stretch' }} container spacing={3}>
                {topics}
            </Grid>
        </div>
    );
}

export default Cards;