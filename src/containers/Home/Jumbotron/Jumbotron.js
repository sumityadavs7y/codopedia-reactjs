import { CenterFocusStrong, FormatAlignCenter } from '@material-ui/icons';
import React from 'react';

const Jumbotron = (props) => {
    const jumbotronStyle = {
        margin: '0px',
        height: '300px',
        backgroundColor: '#022d8a',
        color: 'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

        
    }
    return (
        <div style={jumbotronStyle}>
            <div style={{ paddingLeft: '30px', paddingTop: '60px', alignContent:'center'}}>
                <h1 style={{ marginTop: 0,alignContent:'center',fontSize:'4em'}}>CodoPedia</h1>
                <p style={{fontSize:'20px',paddingLeft:'53px'}}>The Coder's Encyclopedia</p>
            </div>
        </div>
    );
}

export default Jumbotron;