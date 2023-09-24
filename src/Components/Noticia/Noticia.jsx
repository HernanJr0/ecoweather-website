import React, { Component } from 'react';
import './Noticia.css'

 class Noticia extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            titulo: this.props.item.title,
            descricao: this.props.item.description,
            creditos: this.props.item.creditos,
            linkNoticia: this.props.item.source.name,
            imagemSrc: this.props.item.urlToImage
        }
    }

    render() {
        return (
            <div>
                <hr />
                <div className='noticiaCont'>
                    <a className='link' href={this.props.item.url} target='_blank' rel='noreferrer'>
                        <div className='noticia'>

                            <img className='noticiaImg' src={this.props.item.urlToImage} alt={this.props.item.title}/>

                            <div className='noticiaDesc'>
                                <p className='noticiaCreditos'>
                                    Fonte: {this.props.item.source.name}
                                </p>

                                <h2 className='noticiaTitulo'>
                                    {this.props.item.title}
                                </h2>

                                <p className='noticiaDescricao'>
                                    {this.props.item.description}
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