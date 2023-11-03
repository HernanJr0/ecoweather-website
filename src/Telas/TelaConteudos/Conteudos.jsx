import React from 'react'
import './Conteudos.css'
import AtalhoDicas from '../../Components/AtalhoDicasCont/AtalhoDicas'
import conteudosData from './conteudosData.json';
import { Link } from 'react-router-dom';

function Conteudos() {

    return (
        <div id='infoContPage'>
            <div id='infoContCont'>
                <ul>
                    {conteudosData.map(topico => (
                        <AtalhoDicas
                            titulo={topico.titulo}
                            descricao={topico.descricao}
                            link={`/home/conteudos/${topico.id}`}
                            bg={topico.imagem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Conteudos