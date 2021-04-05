import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/customize-image">Customize Image</NavLink>
                <NavLink to="/temperature">Temperature</NavLink>
            </div>
        )
    }
}

export default Navbar
