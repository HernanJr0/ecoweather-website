import React from 'react';
import { useParams } from 'react-router-dom';
import conteudosData from './conteudosData.json';
import './ConteudoDetalhado.css'

const ConteudoDetalhado = () => {
    const { id } = useParams();

    const topicoSelecionado = conteudosData.find((topico) => topico.id === parseInt(id));

    if (!topicoSelecionado) {
        return <div>Tópico não encontrado.</div>;
    }

    const paragrafos = topicoSelecionado.conteudo.split('\n');

    return (
        <div id='ConteudoDetalhadoCont'>
            <h1>{topicoSelecionado.descricao}</h1>
            <img src={topicoSelecionado.imagem}></img>
            {paragrafos.map((paragrafo, index) => (
                <p key={index}>{paragrafo}</p>
            ))}
            <iframe width="560" height="315" src={topicoSelecionado.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
};

export default ConteudoDetalhado;
