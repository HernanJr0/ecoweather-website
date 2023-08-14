import './App.css'


//data
import Header from './Header/Header.jsx';
import Noticia from './Noticia/Noticia.jsx';
import Footer from './Footer/Footer.jsx';
import Clima from './Clima/Clima.jsx'

import './App.css';

function App() {
    return (
        <div>
            <div id="page">
                <Header />

                <Clima />

                <section id='body'>
                    <div id='conteudo'>
                        <div id='noticias'>
                            <Noticia
                                titulo={'Por que gado morre de frio? Os motivos para hipotermia dos animais no Pantanal'}
                                descricao={'Mais de 1 mil cabeças de gado morreram de frio em Mato Grosso do Sul nos últimos dias. De acordo com especialistas, as mortes dos animais estão atreladas a uma severa hipotermia e o gado pantaneiro pode sofrer ainda mais com o frio.'}
                                creditos={'g1.globo.com.br/'}
                                imagemSrc={'https://tinyurl.com/3p2sa6at'}
                                linkNoticia={'https://g1.globo.com/ms/mato-grosso-do-sul/noticia/2023/06/17/por-que-gado-morre-de-frio-entenda-os-motivos-para-hipotermia-dos-animais-no-pantanal.ghtml'}

                            />
                            <Noticia
                                titulo={'Um ano das chuvas em Recife: tragédia pode voltar a ocorrer se não houver ação do poder público'}
                                descricao={'Após um ano do maior desastre em Pernambuco, fortes chuvas deixam o Estado novamente em alerta. Greenpeace Brasil apoia a revisão do Plano Nacional de Adaptação para evitar novos desastres'}
                                creditos={'greenpeace.org/'}
                                imagemSrc={'https://tinyurl.com/2x3ht8sh'}
                                linkNoticia={'https://www.greenpeace.org/brasil/imprensa/um-ano-das-chuvas-em-recife-tragedia-pode-voltar-a-ocorrer-se-nao-houver-acao-do-poder-publico/'}
                            />
                            <Noticia
                                titulo={'Abril registra queda de 67.9% no desmatamento na Amazônia, em relação ao mesmo período em 2022'}
                                descricao={'Abril registra queda de 67.9% no desmatamento na Amazônia, em relação ao mesmo período em 2022.'}
                                creditos={'greenpeace.org/'}
                                imagemSrc={'https://tinyurl.com/ymdu6z8r'}
                                linkNoticia={'https://www.greenpeace.org/brasil/imprensa/abril-registra-queda-de-67-9-no-desmatamento-na-amazonia-em-relacao-ao-mesmo-periodo-em-2022/'}

                            />

                        </div>
                        <div id='sideContent'>
                            <div id='secaoPrevisao'>
                                <p>aaaa</p>
                            </div>
                            <div id='secaoAgenda'>
                                <p>aaaa</p>
                            </div>
                            <div id='secaoDicas'>
                                <p>aaaa</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
            <Footer />
        </div>
    )
}


export default App
