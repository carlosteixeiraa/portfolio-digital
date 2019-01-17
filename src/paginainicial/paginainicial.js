import React, { Component } from 'react';
import './paginainicial.css';
import Barra from '../componentes/barra/barra';

class paginaInicial extends Component {
  render() {
    return (
      <div className="paginaInicial">
          <Barra/>
      </div>
    );
  }
}

export default paginaInicial;
