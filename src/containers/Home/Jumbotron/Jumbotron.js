import React from 'react';

const Jumbotron = (props) => {
    const jumbotronStyle = {
        margin: '0px',
        height: '200px',
        backgroundColor: '#022d8a',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style={jumbotronStyle}>
            <div style={{ paddingLeft: '30px', paddingTop: '20px', alignContent: 'center' }}>
                <h1 style={{ marginTop: 0, alignContent: 'center', fontSize: '4em', marginBottom: '0' }}>CodoPedia</h1>
                <p style={{ fontSize: '20px', textAlign: 'center' }}>A Geek in need is a geek indeed.</p>
            </div>
        </div>
    );
}

export default Jumbotron;