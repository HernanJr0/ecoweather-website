import React, { Component } from 'react'
import './Clima.css'

import bg0 from '../../assets/banner0.png';
import bg1 from '../../assets/banner1.png';

import calendar from '../../assets/calendar.png';
import pin from '../../assets/pin.png';

import nublado from '../../assets/nublado.png';
import ensolarado from '../../assets/ensolarado.png';
import parc_ensolarado from '../../assets/parc_ensolarado.png';

import arrow_up from '../../assets/up-right-arrow.png';
import arrow_down from '../../assets/down-right-arrow.png';

class Clima extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dia: this.custom_date(),
            loc: '',
            clima: '',
            temp: '',
            max_temp: '',
            min_temp: '',
            s_ter: '',
            humid: '',
            vento: '',
        }

        this.custom_date = this.custom_date.bind(this)
        this.drawWeather = this.drawWeather.bind(this)
        this.weatherBallon = this.weatherBallon.bind(this)
    }

    componentDidMount() {
        this.weatherBallon(3663517)
    }

    weatherBallon(CityID) {
        let key = 'd3afafb4de8d7a76ad9ced3bed938d51';

        fetch('https://api.openweathermap.org/data/2.5/weather?id=' + CityID + '&appid=' + key)

            .then((resp) => { return resp.json() })
            .then((data) => {
                console.log(data)
                this.drawWeather(data)
            }) // Convert data to json
            .catch(function () {
                // catch any errors
            });
    }

    drawWeather(d) {
        let c_img

        let t = Math.round(parseFloat(d.main.temp) - 273.15);
        let max_t = Math.round(parseFloat(d.main.temp_max) - 273.15);
        let min_t = Math.round(parseFloat(d.main.temp_min) - 273.15);
        let feel = Math.round(parseFloat(d.main.feels_like) - 273.15);

        //TODO
        //arruma isso aq manokkkkkk
        //{
        if (t < 22) {
            c_img = nublado

        } else if (t < 28) {
            c_img = parc_ensolarado

        } else if (t < 34) {
            c_img = ensolarado

        }
        //} 

        this.setState({
            loc: d.name,
            clima: d.weather[0].main,
            temp: t,
            max_temp: max_t,
            min_temp: min_t,
            s_ter: feel,
            humid: d.main.humidity,
            vento: d.wind.speed
        });

        document.querySelector('#c_img').src = c_img;
    }

    custom_date() {
        let today = new Date();
        let custom_months = ["Jan", "Fev", "Mar", "Abr", "Mao", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        let custom_days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sexta", "Sáb"];
        let date = custom_days[today.getDay()] + ", " + today.getDate() + " de " + custom_months[today.getMonth()];
        return date;
    }

    render() {
        return (
            <div id='head'>
                <img id='bg' src={bg1} alt="bg" />
                <div id='data_loc'>
                    <div id='pegakkk'>
                        <div id='data'>
                            <a href=''>
                                {this.state.dia}<img id='calendar' src={calendar} />
                            </a>
                        </div>

                        <div id='loc'>
                            <a href=''>
                                <img id='pin' src={pin} />{this.state.loc}
                            </a>
                        </div>
                    </div>
                    <h1 id='clima'>{this.state.clima}</h1>
                </div>

                <div id='c_clima'>
                    <div id='clima_report'>
                        <img id='c_img' alt='img_clima' />
                        <h1 id='temp'>{this.state.temp}ºC</h1>
                        <div id='max_min'>
                            <div>{this.state.max_temp}ºC<img src={arrow_up} /></div>
                            <div>{this.state.min_temp}ºC<img src={arrow_down} /></div>
                        </div>
                    </div>
                    <div id='feel'>Sensação termica: {this.state.s_ter}ºC</div>
                </div>
                <div id='stat'>
                    {/* porreessaakkkkkkkk */}
                    <div>Qualidade do ar: Razoável</div>

                    <div id='humid'>Umidade: {this.state.humid}%</div>
                    <div id='vento'>Vento: {this.state.vento*3.6} km/h</div>
                </div>
            </div>
        )
    }
}
export default Clima
