import React, { Component } from 'react'
import nublado from '../assets/nublado.png';
import ensolarado from '../assets/ensolarado.png';
import parc_ensolarado from '../assets/parc_ensolarado.png';
import bg0 from '../assets/banner0.png';
import bg1 from '../assets/banner1.png'
import arrow_up from '../assets/up-right-arrow.png';
import arrow_down from '../assets/down-right-arrow.png';
import place from '../assets/place.svg';

class Clima extends Component {
    constructor(props) {
        super(props)

        this.background = this.background.bind(this)
        this.custom_date = this.custom_date.bind(this)
        this.drawWeather = this.drawWeather.bind(this)
        this.weatherBallon = this.weatherBallon.bind(this)
        
        
        dia : this.custom_date()
        bg : ''
        cityID : 6167865
    }

    componentDidMount(){
        this.background()
        //this.custom_date()
        this.drawWeather(6167865)
    }

    drawWeather(d) {
        let celcius = Math.round(parseFloat(d.main.temp) - 273.15);
        let fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

        document.getElementById('clima').innerHTML = d.weather[0].description;
        document.getElementById('temp').innerHTML = celcius + '&deg;';
        document.getElementById('loc').innerHTML += d.name;
    }

    weatherBalloon(cityID) {
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

    custom_date() {
        let today = new Date();
        let custom_months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        let custom_days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        let date = custom_days[today.getDay()] + ", " + today.getDate() + " de " + custom_months[today.getMonth()];
        return date;
    }

    background() {
        const date = new Date()
        const hora = date.getHours()

        if (hora <= 6 || hora >= 18) {
            this.bg = bg0
        } else {
            this.bg = bg1
        }
    }

    render() {
        return (
            <div id='head'>
                <img id='bg'  src={this.bg}  alt="bg" />
                <div id='data_loc'>
                    <div id='data'>
                        <a href=''>{dia}</a>
                    </div>
                    <div id='loc'>
                        <a href=''><img src={place} id='pin'/>{/* {loc} */}</a>
                    </div>
                    <h1 id='clima'>{/* {clima} */}</h1>
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
            </div>
        )
    }
}
export default Clima