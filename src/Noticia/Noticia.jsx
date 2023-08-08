import React, { Component } from 'react';
import './Noticia.css'

class Noticia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Noticia: {
                titulo: this.props.titulo,
                descricao: this.props.descricao,
                creditos: this.props.creditos,
                linkNoticia: this.props.linkNoticia,
                imagemSrc: this.props.imagemSrc
            }
        }
        
    }

    render() {
        return (
            <>
                <div id='noticia'>
                    <div id='imgCont'>
                        <img src={this.state.Noticia.imagemSrc} />
                    </div>
                    <a href={this.state.Noticia.linkNoticia} target='_blank' rel='noreferrer'>
                        <div id='noticiaDesc'>
                            <p id='creditos'>Fonte: {this.state.Noticia.creditos}</p>
                            <h2 id='titulo'>{this.state.Noticia.titulo}</h2>
                            <p id='descricao'>{this.state.Noticia.descricao}</p>
                        </div>
                    </a>
                </div>
                <hr />
            </>
        )
    }
}

export default Noticia