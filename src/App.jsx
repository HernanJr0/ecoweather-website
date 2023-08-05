import Header from './Header/Header.jsx'
import nublado from './assets/nublado.png'
import ensolarado from './assets/ensolarado.png'
import parc_ensolarado from './assets/parc_ensolarado.png'
import bg from './assets/visual-banner1.png'
import arrow_up from './assets/up-right-arrow.png'
import arrow_down from './assets/down-right-arrow.png'
import place from './assets/place.svg'
import Noticia from './Noticia/Noticia.jsx'
import Footer from './Footer/Footer.jsx'

import './App.css'

function App() {

    //data
    var dia = custom_date()
    var loc = "Manaus - AM"

    //temperatura
    var temp = Math.round(Math.random() * 18) + 15,
        t_max = (temp + 3),
        t_min = (temp - 2),
        s_temp
    if (temp > 25) {
        s_temp = Math.floor(temp * 1.1)
    } else {
        s_temp = Math.floor(temp * 0.95)
    }


    //clima
    var climas = ['Ensolarado', 'Parcialmente ensolarado', 'Nublado']
    var clima
    var c_url

    climaf()

    //setup clima
    function climaf() {
        if (temp < 22) {
            clima = climas[2]
            c_url = nublado

        } else if (temp < 28) {
            clima = climas[1]
            c_url = parc_ensolarado

        } else if (temp < 34) {
            clima = climas[0]
            c_url = ensolarado

        }
    }
    //data atual
    function custom_date() {
        let today = new Date();
        let custom_months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        let custom_days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        let date = custom_days[today.getDay()] + ", " + today.getDate() + " de " + custom_months[today.getMonth()];
        return date;
    }

    return (
        <div id='corpo'>
            <div id="page">
                <Header />
                <section id='head'>
                    <img id='bg' src={bg} alt="bg" />
                    <div id='data_loc'>
                        <div id='data'>
                            <a href=''>{dia}</a>
                        </div>
                        <div id='loc'>
                            <a href=''><img src={place} id='pin' />{loc}</a>
                        </div>
                        <h1 id='clima'>{clima}</h1>
                    </div>

                    <div id='c_clima'>
                        <div id='clima_report'>
                            <img id='c_img' src={c_url} alt='img_clima' />
                            <h1>{temp}ºC</h1>
                            <div id='max_min'>
                                <div>{t_max}<img src={arrow_up} /></div>
                                <div>{t_min}<img src={arrow_down} /></div>
                            </div>
                        </div>
                        <a href=''>sensação termica: {s_temp} ºC</a>
                    </div>
                    <div id='stat'>
                        <div><a href=''>Qualidade do ar: Razoável</a></div>
                        <div><a href=''>Umidade: 82%</a></div>
                        <div><a href=''>Vento: 9 km/h</a></div>
                    </div>
                </section>

                <section id='body'>
                    <div id='conteudo'>
                        <div id='noticias'>
                            <Noticia
                                imagemSrc={'https://tinyurl.com/3p2sa6at'}
                                linkNoticia={'https://g1.globo.com/ms/mato-grosso-do-sul/noticia/2023/06/17/por-que-gado-morre-de-frio-entenda-os-motivos-para-hipotermia-dos-animais-no-pantanal.ghtml'}
                                titulo={'Por que gado morre de frio? Os motivos para hipotermia dos animais no Pantanal'}
                                descricao={'Mais de 1 mil cabeças de gado morreram de frio em Mato Grosso do Sul nos últimos dias. De acordo com especialistas, as mortes dos animais estão atreladas a uma severa hipotermia e o gado pantaneiro pode sofrer ainda mais com o frio.'}
                                creditos={'g1.globo.com.br/'}
                            />
                            <Noticia
                                imagemSrc={'https://tinyurl.com/2x3ht8sh'}
                                linkNoticia={'https://www.greenpeace.org/brasil/imprensa/um-ano-das-chuvas-em-recife-tragedia-pode-voltar-a-ocorrer-se-nao-houver-acao-do-poder-publico/'}
                                titulo={'Um ano das chuvas em Recife: tragédia pode voltar a ocorrer se não houver ação do poder público'}
                                descricao={'Após um ano do maior desastre em Pernambuco, fortes chuvas deixam o Estado novamente em alerta. Greenpeace Brasil apoia a revisão do Plano Nacional de Adaptação para evitar novos desastres'}
                                creditos={'greenpeace.org/'}
                            />
                            <Noticia
                                imagemSrc={'https://tinyurl.com/ymdu6z8r'}
                                linkNoticia={'https://www.greenpeace.org/brasil/imprensa/abril-registra-queda-de-67-9-no-desmatamento-na-amazonia-em-relacao-ao-mesmo-periodo-em-2022/'}
                                titulo={'Abril registra queda de 67.9% no desmatamento na Amazônia, em relação ao mesmo período em 2022'}
                                descricao={'Abril registra queda de 67.9% no desmatamento na Amazônia, em relação ao mesmo período em 2022.'}
                                creditos={'greenpeace.org/'}
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
