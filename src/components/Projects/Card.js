import React from 'react';
import './Card.css';
class Card extends React.Component {
    render() {
      return(
          <div id="card">
            <a href={this.props.link}>
              <h1>{this.props.name}</h1>
              <p>{this.props.type}</p>
              <h2>{this.props.words}</h2>
            </a>
          </div>
      )
    }
}
export default Card;