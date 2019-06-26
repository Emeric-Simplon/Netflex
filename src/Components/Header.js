import React, { Component } from 'react';
import netflex from '../images/netflex.png'

class Header extends Component {
    render() {
        return (
            <header>
                <div><h1><img id="n" src={netflex}></img>ETFLEX</h1></div>
            </header>
        );
    }
}

export default Header;