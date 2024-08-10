import React from 'react';
import './Navbar.css';
class Navbar extends React.Component {
    render() {
      return(
          <header>
            <a href="/#" className="logo" >Man Kei Po</a>
            <ul>
              <li><a href="https://github.com/mankeipo">Github</a></li>
              <li><a href="#projects" onClick={this.props.onProjectsClick}>Projects</a></li>
            </ul>
          </header>
      )
    }
}
export default Navbar;