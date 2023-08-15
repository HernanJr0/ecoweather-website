import React, { Component } from 'react';
import './Atalho.css'

class Atalho extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titulo: this.props.titulo,
            descricao: this.props.descricao,
            imagem: this.props.imagem,
            link: this.props.link
        }
    }
    render() {
        return (
            <div id='Atalho' >
                <div id='atalhoCont'>
                    <h2 id='atalhoTitulo'>{this.state.titulo}</h2>
                    <hr />
                    <div id='atalhoDesc'>
                        <p>{this.state.descricao}</p>
                        <img src={this.state.imagem} id='atalhoImg' />
                    </div>
                    <a id='atalhoLink' href={this.state.link}>Ver mais...</a>
                </div>
            </div>
        )
    }
}

export default Atalho