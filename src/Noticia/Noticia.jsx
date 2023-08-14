import React, { Component } from 'react';
import './Noticia.css'

class Noticia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titulo: this.props.titulo,
            descricao: this.props.descricao,
            creditos: this.props.creditos,
            linkNoticia: this.props.linkNoticia,
            imagemSrc: this.props.imagemSrc
        }
    }

    render() {
        return (
            <div>
                <hr />
                <div className='noticiaCont'>
                    <a className='link' href={this.state.linkNoticia} target='_blank' rel='noreferrer'>

                        <div className='noticia'>
                            <img className='noticiaImg' src={this.state.imagemSrc} />
                            <div className='noticiaDesc'>
                                <p className='noticiaCreditos'>Fonte: {this.state.creditos}</p>
                                <h2 className='noticiaTitulo'>{this.state.titulo}</h2>
                                <p className='noticiaDescricao'>{this.state.descricao}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
export default Noticia
