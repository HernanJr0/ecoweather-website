import './Atalho.css'
import PropTypes from 'prop-types'

const Atalho = (props) => {
    return (
        <div id='Atalho'>
            <div id='atalhoCont'>
                <h2 id='atalhoTitulo'>{props.titulo}</h2>
                <hr />
                <div id='atalhoDesc'>
                    <p>{props.descricao}</p>
                    <img src={props.imagem} id='atalhoImg'/>
                </div>
                <a id='atalhoLink' href={props.link}>Ver mais...</a>
            </div>
        </div>
    )
}

Atalho.propTypes = {
    titulo: PropTypes.string,
    descricao: PropTypes.string,
    imagem: PropTypes.string,
    link: PropTypes.link
}

export default Atalho