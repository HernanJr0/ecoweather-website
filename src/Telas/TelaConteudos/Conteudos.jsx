import React from 'react'
import './Conteudos.css'
import AtalhoDicas from '../../Components/AtalhoDicasCont/AtalhoDicas'

function Conteudos() {
    return (
        <div id='infoContPage'>
            <div id='infoContCont'>
                <AtalhoDicas
                    titulo={'As dez dicas'}
                    descricao={'Veja 10 dicas simples para cuidar do meio ambiente que podem fazer diferença se aplicadas no seu dia a dia'}
                    link={'/home/conteudos/as-dez-dicas'}
                    bg={'https://tinyurl.com/2p8pzy8z'}
                />
            </div>
        </div>
    )
}

export default Conteudos