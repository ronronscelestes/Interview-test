import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink exact to="/" className='link' activeClassName="active-link">Home</NavLink>

                <NavLink to="/customize-image" className='link' activeClassName="active-link">Customize Image</NavLink>

                <NavLink to="/temperature" className='link' activeClassName="active-link">Temperature</NavLink>
            </div>
        )
    }
}

export default Navbar
