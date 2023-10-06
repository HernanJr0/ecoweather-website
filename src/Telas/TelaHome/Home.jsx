import './Home.css';

import Clima from '../../Components/Clima/Clima.jsx'
import Atalho from '../../Components/Atalho/Atalho.jsx'
import AtalhoPrev from '../../Components/AtalhoPrev/AtalhoPrev.jsx'
import Slide from '../../Components/Slide/Slide.jsx'

import Noticias from '../../Components/Noticia/GridNoticia.jsx';

import calendar from '../../assets/calendar.png';

import { IconButton, TextField } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

import { useEffect, useState } from 'react';

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
        document.cookie = `city=manaus;Secure`
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
            if (e.target.value != null) {
                setLocale(e.target.value)

                document.cookie = `city = ${e.target.value};Secure`

                /* this.setState({ loc: city });
                this.weatherBallon(e.target.value) */
            } else {
                alert("este espaço nao pode ficar em branco")
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

                            {/* 
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
                            */}

                        </div>
                        <div id='sideContent'>
                            <div id='merda'>
                                <Slide />
                            </div>
                            <div id='seila'>
                                <AtalhoPrev />
                                <Atalho
                                    titulo={'Dicas'}
                                    descricao={'Veja aqui dicas de como cuidar do meio ambiente com pequenas ações no dia a dia'}
                                    imagem={'https://cdn-icons-png.flaticon.com/512/361/361892.png'}
                                    link={'/home/dicas'}
                                />
                                <Atalho
                                    titulo={'Galeria'}
                                    descricao={'Um acervo de fotos que mostram a beleza da nossa natureza'}
                                    imagem={'https://cdn-icons-png.flaticon.com/512/2659/2659360.png'}
                                    link={'/home/galeria'}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div>
    )
}

export default Home
