import PropTypes from 'prop-types';
import './Noticia.css'

const Noticia = (props) => {
    return (
        <div id='noticia'>
            <img src={props.imagemSrc} />
            <div id='noticiaDesc'>
                <h3>{props.titulo}</h3>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}

Noticia.propTypes = {
    imagemSrc: PropTypes.string,
    titulo: PropTypes.string,
    descricao: PropTypes.string
  };

export default Noticia