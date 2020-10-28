import React from 'react';

import CodoPediaLogo from '../../assets/images/Logo.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <span className={classes.Logo}>
            <img src={CodoPediaLogo} alt="CodoPedia" />
        </span>
    )
}

export default logo;