import React from 'react';
import './Grid.css';
class Grid extends React.Component {
    render() {
      return(
          <div id="grid">
            <h1>{this.props.title}</h1>
            <p>{this.props.desc}</p>
          </div>
      )
    }
}
export default Grid;