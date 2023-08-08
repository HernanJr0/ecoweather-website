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


    function weatherBalloon(cityID) {
        var key = 'd3afafb4de8d7a76ad9ced3bed938d51';
        fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
            .then(function (resp) { return resp.json() }) // Convert data to json
            .then(function (data) {
                drawWeather(data)
            })
            .catch(function () {
                // catch any errors
            });
    }

    function drawWeather(d) {
        var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
        var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

        document.getElementById('clima').innerHTML = d.weather[0].description;
        document.getElementById('temp').innerHTML = celcius + '&deg;';
        document.getElementById('loc').innerHTML += d.name;
    }

    window.onload = () => {
        weatherBalloon(6167865)
    }

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

    climaf()
    //data atual
    function custom_date() {
        let today = new Date();
        let custom_months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        let custom_days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        let date = custom_days[today.getDay()] + ", " + today.getDate() + " de " + custom_months[today.getMonth()];
        return date;
    }

    return (
        <body>
            <div id="page">
                <Header />
                <section id='head'>
                    <img id='bg' src={bg} alt="bg" />
                    <div id='data_loc'>
                        <div id='data'>
                            <a href=''>{dia}</a>
                        </div>
                        <div id='loc'>
                            <img src={place} id='pin' />{/*{loc}*/}
                        </div>
                        <h1 id='clima'>{clima}</h1>
                    </div>

                    <div id='c_clima'>
                        <div id='clima_report'>
                            <img id='c_img' src={c_url} alt='img_clima' />
                            <h1 id='temp'>{temp}ºC</h1>
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
        </body>
    )
}

export default App
