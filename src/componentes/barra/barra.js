import React, { Component } from 'react';
import './barra.css';

class Barra extends Component {
  render() {
    return (
      <div className="barra">
        <div className="b-topo">
            <img src="%PUBLIC_URL%/media/logo.svg"/>
        </div>
        <div className="b-baixo">
            <img src="%PUBLIC_URL%/media/boneco.svg"/>
        </div>
      </div>
    );
  }
}

export default Barra;
