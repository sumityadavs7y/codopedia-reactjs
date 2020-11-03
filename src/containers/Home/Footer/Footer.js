import React from "react";

import { NavLink } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  upperFooter: {
    backgroundColor: '#5756c7',
    height: '20px'
  },
  mainFooter: {
    backgroundColor: '#424194',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerLink: {
    textDecoration: 'none',
    color: 'white'
  },
  copyrightText: {
    color: 'grey'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.upperFooter} />
      <div className={classes.mainFooter}>
        <div>
          <span className={classes.copyrightText}>&copy; {new Date().getFullYear()} Copyright: </span><NavLink className={classes.footerLink} to='/'> CodoPedia</NavLink>
        </div>
      </div >
    </React.Fragment>
  );
}

export default Footer;