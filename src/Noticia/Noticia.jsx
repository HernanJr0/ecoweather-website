import PropTypes from 'prop-types';
import './Noticia.css'

const Noticia = (props) => {
    return (
        <div id='noticiaCont'>
            <div id='noticia'>
                <div id='noticiaImgCont'>
                    <img src={props.imagemSrc} id='noticiaImg' />
                </div>
                <a href={props.linkNoticia} target='_blank' rel='noreferrer'>
                    <div id='noticiaDesc'>
                        <p id='noticiaCreditos'>Fonte: {props.creditos}</p>
                        <h2 id='noticiaTitulo'>{props.titulo}</h2>
                        <p id='noticiaDescricao'>{props.descricao}</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

Noticia.propTypes = {
    linkNoticia: PropTypes.string,
    imagemSrc: PropTypes.string,
    titulo: PropTypes.string,
    descricao: PropTypes.string,
    creditos: PropTypes.string
};

export default Noticia