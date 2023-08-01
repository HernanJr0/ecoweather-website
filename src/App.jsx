import Header from './Header/Header.jsx'
import nublado from './assets/nublado.png'
import ensolarado from './assets/ensolarado.png'
import parc_ensolarado from './assets/parc_ensolarado.png'
import bg from './assets/visual-banner1.png'
import arrow_up from './assets/up-right-arrow.png'
import arrow_down from './assets/down-right-arrow.png'
import place from './assets/place.svg'
import Noticia from './Noticia/Noticia.jsx'

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
        <div className="App">
            <Header />
            <section id='tudo'>
                <img id='bg' src={bg} alt="bg" />
                <div id='data_loc'>
                    <div id='data'>
                        <a href=''>{dia}</a>
                    </div>
                    <div id='loc'>
                        <a href=''><img src={place} id='looouco' />{loc}</a>
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
            <section id='corpo'>
                <div id='content'>
                    <Noticia
                        imagemSrc='https://tinyurl.com/y4chnjk3'
                        titulo='Por que gado morre de frio? Os motivos para hipotermia dos animais no Pantanal'
                        descricao='Frio mata mais de mil cabeças de gado no Pantanal'
                    />
                    <Noticia
                        imagemSrc='https://tinyurl.com/222s3jhx'
                        titulo='Um ano das chuvas em Recife: tragédia pode voltar a ocorrer se não houver ação do poder público'
                        descricao='Após um ano do maior desastre em Pernambuco, forte...'
                    />
                    <Noticia
                        imagemSrc='https://tinyurl.com/mh5u8pye'
                        titulo='Abril registra queda de 67.9% no desmatamento na Amazônia, em relação ao mesmo período em 2022'
                        descricao='Dados do sistema Deter-B mostra 329 km² de alertas ...'
                    />
                </div>
                <div id='sideContent'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum turpis porttitor dolor consectetur, in euismod risus tempus. In luctus magna vel eros bibendum malesuada. Phasellus at pretium felis. In hac habitasse platea dictumst. Sed elit libero, mattis at ex et, aliquam mattis nisi. Aliquam fermentum elit nec urna commodo elementum. Nullam quis convallis mauris.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum turpis porttitor dolor consectetur, in euismod risus tempus. In luctus magna vel eros bibendum malesuada. Phasellus at pretium felis. In hac habitasse platea dictumst. Sed elit libero, mattis at ex et, aliquam mattis nisi. Aliquam fermentum elit nec urna commodo elementum. Nullam quis convallis mauris.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum turpis porttitor dolor consectetur, in euismod risus tempus. In luctus magna vel eros bibendum malesuada. Phasellus at pretium felis. In hac habitasse platea dictumst. Sed elit libero, mattis at ex et, aliquam mattis nisi. Aliquam fermentum elit nec urna commodo elementum. Nullam quis convallis mauris.</p>
                </div>
            </section>
        </div>
    )
}

export default App