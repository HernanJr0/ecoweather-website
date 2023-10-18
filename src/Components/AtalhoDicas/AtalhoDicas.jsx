import { Button } from '@mui/material'
import './AtalhoDicas.css'
import { Component } from 'react'
import { Link } from 'react-router-dom';

class AtalhoDicas extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            titulo: this.props.titulo,
            descricao: this.props.descricao,
            bg: this.props.bg,
            link: this.props.link,
        };
    }

    render() {
        return (
            <div id='AtalhoDicasCont' style={{ background: `url(${this.props.bg})`}}>
                <h2 id='AtDiTi'>{this.state.titulo}</h2>
                <p id='AtDiDe'>{this.state.descricao}</p>
                <Link id='AtDiLi' to={this.state.link}>
                    <Button id='AtDiBu' variant='outlined'>Acessar</Button>
                </Link>
            </div>
        )
    }
}

export default AtalhoDicas