import PropTypes from 'prop-types';
import './Noticia.css'

const Noticia = (props) => {
    return (
        <>
            <div id='noticia'>
                <div id='imgCont'>
                    <img src={props.imagemSrc} />
                </div>
                <a href=''>
                    <div id='noticiaDesc'>
                        <h2 id='titulo'>{props.titulo}</h2>
                        <p id='descricao'>{props.descricao}</p>
                        <p id='creditos'>Fonte: {props.creditos}</p>
                    </div>
                </a>
            </div>
        </>
    )
}

Noticia.propTypes = {
    imagemSrc: PropTypes.string,
    titulo: PropTypes.string,
    descricao: PropTypes.string,
    creditos: PropTypes.string
};

export default Noticia