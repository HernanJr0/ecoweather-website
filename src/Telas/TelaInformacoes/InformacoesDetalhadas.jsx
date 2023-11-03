import React from 'react'
import { useParams } from 'react-router-dom';
import '../TelaConteudos/ConteudoDetalhado.css'
import informacoesData from './informacoesData.json'

function InformacoesDetalhadas() {
    const { id } = useParams();

    const topicoSelecionado = informacoesData.find((topico) => topico.id === parseInt(id));

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
        </div>
    )
}

export default InformacoesDetalhadas