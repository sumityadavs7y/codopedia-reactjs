import React, { Component } from 'react';

import Aux from '../Auxilliary/Auxilliary';
import Nav from '../../components/Navigation/Nav/Nav';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Nav></Nav>
                <div>hello</div>
            </Aux>
        );
    }
}

export default Layout;