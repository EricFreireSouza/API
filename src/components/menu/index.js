import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

export default class Menu extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/hot" className="itemMenu" activeClassName="active">Hot</NavLink>
          </li>
          <li>
            <NavLink to="/new" className="itemMenu" activeClassName="active">New</NavLink>
          </li>
          <li>
            <NavLink to="/rising" className="itemMenu" activeClassName="active">Rising</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
