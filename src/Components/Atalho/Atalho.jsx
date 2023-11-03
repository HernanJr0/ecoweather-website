import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Atalho.css";
import { Button } from "@mui/material";

class Atalho extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: this.props.titulo,
      descricao: this.props.descricao,
      imagem: this.props.imagem,
      link: this.props.link,
    };
  }

  render() {
    return (
      <div id="Atalho">
        <h2 id="atalhoTitulo">{this.state.titulo}</h2>
        <hr />
        <div id="atalhoDesc">
          <div>{this.state.descricao}</div>
          <img src={this.state.imagem} id="atalhoImg" />
        </div>
        <Link id="atalhoLink" to={this.state.link}>
          <Button variant="outlined" size="small">Ver mais...</Button>
        </Link>
      </div>
    );
  }
}

export default Atalho;
