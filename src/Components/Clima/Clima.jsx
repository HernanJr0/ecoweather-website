import React, { Component } from 'react'
import './Clima.css'

/* import calendar from '../../assets/calendar.png';

import { IconButton, TextField } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place'; */

class Clima extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cimg: '',
            loc: this.props.locale,
            clima: '',
            temp: '',
            s_ter: '',
            humid: '',
            vento: '',
            news: []
            /* max_temp: '',
            min_temp: '', */
        }

        this.drawWeather = this.drawWeather.bind(this)
        this.weatherBallon = this.weatherBallon.bind(this)
    }

    // CityCookie() {
    //     if (document.cookie != null && document.cookie != '') {
    //         const cookieValue = document.cookie
    //             .split("; ")
    //             .find((row) => row.startsWith("city="))
    //             ?.split("=")[1];

    //         return cookieValue
    //     }
    // }

    componentDidMount() {
        this.weatherBallon(this.state.loc)

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.locale !== this.props.locale) {
            this.weatherBallon(this.props.locale)
        }
    }

    weatherBallon(city) {
        let key = 'd3afafb4de8d7a76ad9ced3bed938d51';
        fetch('https://api.openweathermap.org/data/2.5/weather?lang=pt_br&q=' + city + '&appid=' + key)
            .then((resp) => { return resp.json() })
            .then((data) => {
                this.drawWeather(data)
                console.log(data)
            })
    }

    drawWeather(d) {
        let c_img = 'http://openweathermap.org/img/wn/' + d.weather[0].icon + '.png'

        let t = Math.round(parseFloat(d.main.temp) - 273.15);

        /* 
        let max_t = Math.round(parseFloat(d.main.temp_max) - 273.15);
        let min_t = Math.round(parseFloat(d.main.temp_min) - 273.15);
        */

        let feel = Math.round(parseFloat(d.main.feels_like) - 273.15);

        let valoresClima = (this.state.loc + '-' + d.weather[0].description).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-");

        if (new Date().getHours() >= 6 && new Date().getHours() <= 18) {
            document.querySelector('#bg').src = 'http://source.unsplash.com/random/?' + valoresClima
        } else {
            document.querySelector('#bg').src = 'http://source.unsplash.com/random/?night-' + valoresClima
        }


        // console.log(d.weather.)
        this.setState({
            loc: d.name,
            clima: d.weather[0].description,
            cimg: c_img,
            temp: t,
            s_ter: feel,
            humid: d.main.humidity,
            vento: d.wind.speed

            /* max_temp: max_t,
            min_temp: min_t, */
        });
        
        // document.cookie = `city= ${this.state.loc}; Secure`
    }



    render() {
        return (
            <div id='head'>
                <img id='bg' alt="bg" />
                <h1 id='clima'>
                    {this.state.clima.charAt(0).toUpperCase() + this.state.clima.slice(1)}
                </h1>


                {/*vvvv slide pra cidades favoritas vvvv*/}
                <div id='c_clima'>
                    <div id='clima_report'>
                        <img id='c_img' src={this.state.cimg} alt='img_clima' />
                        <div>
                            <div id='city'>{this.state.loc}</div>
                            <h1 id='temp'>{this.state.temp}ºC</h1>
                        </div>
                    </div>
                    <div id='feel'>Sensação: {this.state.s_ter}ºC</div>
                    {/*
                        <div id='max_min'>
                        <div>{this.state.max_temp}ºC<img src={arrow_up} /></div>
                        <div>{this.state.min_temp}ºC<img src={arrow_down} /></div>
                        </div>
                        */}
                </div>
                <div id='stat'>
                    {/* porreessaakkkkkkkk */}
                    <div>Qualidade do ar: Razoável</div>

                    <div id='humid'>Umidade: {this.state.humid}%</div>
                    <div id='vento'>Vento: {(this.state.vento * 1).toFixed(1)} m/s</div>
                </div>
            </div>
        )
    }
}
export default Clima