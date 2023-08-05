import PropTypes from 'prop-types';
import './Noticia.css'

const Noticia = (props) => {
    return (
        <>
            <div id='noticia'>
                <div id='imgCont'>
                    <img src={props.imagemSrc}/>
                </div>
                <a href={props.linkNoticia} target='_blank' rel='noreferrer'>
                    <div id='noticiaDesc'>
                        <p id='creditos'>Fonte: {props.creditos}</p>
                        <h2 id='titulo'>{props.titulo}</h2>
                        <p id='descricao'>{props.descricao}</p>
                    </div>
                </a>
            </div>
            <hr/>
        </>
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