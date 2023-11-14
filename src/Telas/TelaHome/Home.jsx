import './Home.css';

import { Clima } from '../../Components/Clima/Clima.jsx'
import Atalho from '../../Components/Atalho/Atalho.jsx'
import AtalhoPrev from '../../Components/AtalhoPrev/AtalhoPrev.jsx'
import Slide from '../../Components/Slide/Slide.jsx'

import Noticias from '../../Components/Noticia/GridNoticia.jsx';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Noticia from '../../Components/Noticia/Noticia.jsx'

import calendar from '../../assets/calendar.png';

import { IconButton, TextField } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

import { useState } from 'react';

function Home() {

    {/*  
    const date = new Date()
    const hora = date.getHours()

    let bg

    if (hora <= 6 || hora >= 18) {
        bg = bg0
    } else {
        bg = bg1
    }

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
    */}

    const checkCity = document.cookie
        .split("; ")
        .find((row) => row.startsWith("city="))
        ?.split("=")[1];


    if (checkCity == '' || checkCity == undefined || checkCity == null) {
        document.cookie = `city=Manaus;Secure`
        // console.log(document.cookie)
    }

    const city = document.cookie
        .split("; ")
        .find((row) => row.startsWith("city="))
        ?.split("=")[1];

    const [locale, setLocale] = useState(city)

    function custom_date() {
        let today = new Date();
        let custom_months = ["Jan", "Fev", "Mar", "Abr", "Mao", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        let custom_days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sexta", "Sáb"];
        let date = custom_days[today.getDay()] + ", " + today.getDate() + " de " + custom_months[today.getMonth()];
        return date;
    }

    function enterCity(e) {
        if (e.key == 'Enter') {
            if (e.target.value != '') {
                const cidade = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
                setLocale(cidade)

                document.cookie = `city = ${cidade};Secure`

                /* this.setState({ loc: city });
                this.weatherBallon(e.target.value) */
            } else {
                toast.error("Este espaço nao pode ficar em branco")
            }
        }
    }

    return (
        <div id='corpo'>
            <div id="page">

                <div id='containerpega'>
                    <div id='pegakkk'>
                        <div id='data'>
                            <img id='calendar' src={calendar} />{custom_date()}
                        </div>

                        <TextField id='i-city'
                            onKeyDown={enterCity}

                            variant='outlined'
                            size='small'
                            InputProps={{
                                endAdornment: (
                                    <IconButton edge='end' onClick={() => {
                                        document.querySelector('#i-city').focus()
                                    }}>
                                        <PlaceIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                    </div>
                </div>

                <Clima locale={locale} />

                <section id='body'>
                    <div id='conteudo'>
                        <div id='noticias'>

                            <Noticias locale={locale} />

                            {/* <h2 id='noticiasTitulo'>Noticias</h2>


                            <Noticia
                                item={{
                                    image: 'https://tinyurl.com/3p2sa6at',
                                    url: 'https://g.globo.com/ms/mato-grosso-do-sul/noticia/2023/06/17/por-que-gado-morre-de-frio-entenda-os-motivos-para-hipotermia-dos-animais-no-pantanal.ghtml',
                                    title: 'Por que gado morre de frio? Os motivos para hipotermia dos animais no Pantanal',
                                    body: 'Mais de 1 mil cabeças de gado morreram de frio em Mato Grosso do Sul nos últimos dias. De acordo com especialistas, as mortes dos animais estão atreladas a uma severa hipotermia e o gado pantaneiro pode sofrer ainda mais com o frio.',

                                    uri: '09876'
                                }} source='g1.globo.com.br/'
                            />
                            <Noticia
                                item={{
                                    image: 'https://tinyurl.com/2x3ht8sh',
                                    url: 'https://www.greenpeace.org/brasil/imprensa/um-ano-das-chuvas-em-recife-tragedia-pode-voltar-a-ocorrer-se-nao-houver-acao-do-poder-publico/',
                                    title: 'Um ano das chuvas em Recife: tragédia pode voltar a ocorrer se não houver ação do poder público',
                                    body: 'Após um ano do maior desastre em Pernambuco, fortes chuvas deixam o Estado novamente em alerta. Greenpeace Brasil apoia a revisão do Plano Nacional de Adaptação para evitar novos desastres',

                                    uri: '54321',
                                }} source='greenpeace.org/'
                            />
                            <Noticia
                                item={{
                                    image: 'https://tinyurl.com/ymdu6z8r',
                                    url: 'https://www.greenpeace.org/brasil/imprensa/abril-registra-queda-de-67-9-no-desmatamento-na-amazonia-em-relacao-ao-mesmo-periodo-em-2022/',
                                    title: 'Abril registra queda de 67.9% no desmatamento na Amazônia, em relação ao mesmo período em 2022',
                                    body: 'Abril registra queda de 67.9% no desmatamento na Amazônia, em relação ao mesmo período em 2022.',

                                    uri: '23456',
                                }} source='greenpeace.org/'
                            />
                            <Noticia
                                item={{
                                    url: "https://www.liputan6.com/global/read/5437916/jepang-buka-anime-tokyo-station-area-1300-meter-persegi-untuk-pamer-koleksi-anime-teranyar",
                                    uri: "7818074317",
                                    image: "https://cdn1-production-images-kly.akamaized.net/rBeQhD-LMB_IpTb7Uh6wcP5uV1w=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3908930/original/040146600_1642639989-000_9WH7MK.jpg",
                                    body: "Liputan6.com, Tokyo - Fasilitas ekshibisi anime terbaru dibuka di ibu kota Jepang, Tokyo. Ini merupakan upaya dari pemerintah metropolitan Tokyo untuk menampilkan dan mempelajari dunia animasi Jepang. Gubernur Tokyo, Yuriko Koike, ikut hadir di grand opening fasilitas Anime Tokyo Station ini itu ...",
                                    title: "Jepang Buka Anime Tokyo Station, Area 1.300 Meter Persegi untuk Pamer Koleksi Anime Teranyar",

                                }} source="liputan6.com"
                            />
                            <Noticia
                                item={{
                                    image: "https://ewscripps.brightspotcdn.com/dims4/default/5f4867a/2147483647/strip/true/crop/1732x909+0+122/resize/1200x630!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F88%2Fd0%2F4eb938d74c3797b3594dc674836f%2Fgodzilla.jpg",
                                    url: "https://www.kxxv.com/news/director-of-new-godzilla-film-pursuing-japanese-spirituality-of-1954-original",
                                    title: "Director of new Godzilla film pursuing 'Japanese spirituality' of 1954 original",
                                    body: "TOKYO (AP) -- Godzilla, the nightmarish radiation spewing monster born out of nuclear weapons, has stomped through many movies, including several Hollywood remakes. Takashi Yamazaki, the director behind the latest Godzilla movie, set for U.S. theatrical release later this year, was determined to ...",

                                    uri: "7818364940"
                                }} source="kxxv.com"
                            /> */}

                        </div>
                        <div id='sideContent'>
                            <div id='merda'>
                                <Slide />
                            </div>
                            <div id='seila'>
                                <AtalhoPrev />
                                <Atalho
                                    titulo={'Conteudos'}
                                    descricao={'Acesse aqui conteúdos sobre o meio ambiente'}
                                    imagem={'https://cdn-icons-png.flaticon.com/512/363/363256.png'}
                                    link={'/conteudos'}
                                />
                                <Atalho
                                    titulo={'Informações'}
                                    descricao={'Veja informações e dicas úteis'}
                                    imagem={'https://cdn-icons-png.flaticon.com/512/361/361892.png'}
                                    link={'/informacoes'}
                                />
                                {/* arrumar paths */}
                            </div>

                        </div>
                    </div>
                </section>
            </div >
            <ToastContainer autoClose={2000} theme='colored' newestOnTop={true} position='bottom-right' />
        </div>
    )
}

export default Home
