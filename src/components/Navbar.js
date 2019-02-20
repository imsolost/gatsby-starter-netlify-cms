import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/semmle-light.svg'

export default class Navbar extends React.Component {
 
 render() {
   return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Semmle" style={{ width: '88px' }} />
          </Link>
        </div>
        <div id="navMenu" className="navbar-menu">
        <div className="navbar-start has-text-centered">
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
          {/* <Link className="navbar-item" to="/contact/examples">
            Form Examples
          </Link> */}
        </div>
        <div className="navbar-end has-text-centered">
          <a
            className="navbar-item"
            href="https://github.com/imsolost/gatsby-starter-netlify-cms"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={github} alt="Github" />
            </span>
          </a>
        </div>
        </div>
      </div>
    </nav>
  )}
}