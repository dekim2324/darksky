import React, { Component } from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);


    };

    render() {
        const style = {
            textAlign: 'center',
            margin: '40px'
        };

        return (
            <div style={style}>
                <h2>Welcome to Your Personal Weather App!</h2>
            </div>  
        )
    }
}

export default Nav;