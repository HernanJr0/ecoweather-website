import React, { Component } from 'react';
import './Noticia.css'

 class Noticia extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            creditos: this.props.item.creditos,
            titulo: this.props.item.title,
            descricao: this.props.item.body,

            link: this.props.item.url,
            fonte: this.props.item.source.uri,
            imagemSrc: this.props.item.image
        }
    }

    render() {
        return (
            <div>
                <hr />
                <div className='noticiaCont'>
                    <a className='link' href={this.state.link} target='_blank' rel='noreferrer'>
                        <div className='noticia'>

                            <img className='noticiaImg' src={this.state.imagemSrc} alt={this.state.titulo}/>

                            <div className='noticiaDesc'>
                                <p className='noticiaCreditos'>
                                    Fonte: {this.state.fonte}
                                </p>

                                <h2 className='noticiaTitulo'>
                                    {this.state.titulo}
                                </h2>

                                <p className='noticiaDescricao'>
                                    {this.state.descricao}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}  
export default Noticia