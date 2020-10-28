import React from 'react';

const Jumbotron = (props) => {
    const jumbotronStyle = {
        margin: '0px',
        height: '200px',
        // paddingBottom: '150px',
        // boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
        backgroundColor: '#022d8a',
        color: 'white'
    }
    return (
        <div style={jumbotronStyle}>
            <div style={{ paddingLeft: '30px', paddingTop: '60px' }}>
                <h1 style={{ marginTop: 0 }}>CodoPedia</h1>
                <p>A Computer Science Portal to help Geeks.</p>
            </div>
        </div>
    );
}

export default Jumbotron;