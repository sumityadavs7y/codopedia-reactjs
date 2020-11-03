import React, { Component } from 'react';

import Aux from '../Auxilliary/Auxilliary';
import Nav from '../../components/Navigation/Nav/Nav';
// import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Nav darkMode={this.props.darkMode} switchThemeMode={this.props.switchThemeMode} />
                <div>{this.props.children}</div>
            </Aux>
        );
    }
}

export default Layout;