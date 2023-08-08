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
        this.noticia = this.state.Noticia
    }

    render() {
        return (
            <div className='noticiaCont'>
                <div className='noticia'>
                    <div className='noticiaImgCont'>
                        <img className='noticiaImg' src={this.noticia.imagemSrc} />
                    </div>
                    <a className='link' href={this.noticia.linkNoticia} target='_blank' rel='noreferrer'>
                        <div className='noticiaDesc'>
                            <p className='noticiaCreditos'>Fonte: {this.noticia.creditos}</p>
                            <h2 className='noticiaTitulo'>{this.noticia.titulo}</h2>
                            <p className='noticiaDescricao'>{this.noticia.descricao}</p>
                        </div>
                    </a>
                </div>
                <hr />
            </div>
        )
    }
}
export default Noticia