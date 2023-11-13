import React from 'react'
import './Conteudos.css'
import AtalhoDicas from '../../Components/AtalhoDicasCont/AtalhoDicas'
import conteudosData from './conteudosData.json';

function Conteudos() {

    return (
        <div id='infoContPage'>
            <div id='infoContCont'>
                {conteudosData.map(topico => (
                    <AtalhoDicas
                        titulo={topico.titulo}
                        descricao={topico.descricao}
                        link={`/conteudos/${topico.id}`}
                        bg={topico.imagem}
                    />
                ))}
            </div>
        </div>
    )
}

export default Conteudos
