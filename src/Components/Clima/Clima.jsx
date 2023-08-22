import React, { Component } from 'react'
import './Clima.css'

import bg0 from '../../assets/banner0.png';
import bg1 from '../../assets/banner1.png';

import calendar from '../../assets/calendar.png';
import pin from '../../assets/pin.png';
import place from '../../assets/place.svg';

import nublado from '../../assets/nublado.png';
import ensolarado from '../../assets/ensolarado.png';
import parc_ensolarado from '../../assets/parc_ensolarado.png';

import arrow_up from '../../assets/up-right-arrow.png';
import arrow_down from '../../assets/down-right-arrow.png';

import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

class Clima extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dia: this.custom_date(),
            cimg: '',
            loc: 'Manaus',
            clima: '',
            temp: '',
            max_temp: '',
            min_temp: '',
            s_ter: '',
            humid: '',
            vento: '',
        }

        this.enter = this.enter.bind(this)
        // this.CityChanged = this.CityChanged.bind(this)

        this.custom_date = this.custom_date.bind(this)
        this.drawWeather = this.drawWeather.bind(this)
        this.weatherBallon = this.weatherBallon.bind(this)
    }

    componentDidMount() {
        this.weatherBallon(this.state.loc)
    }


    weatherBallon(city) {
        let key = 'd3afafb4de8d7a76ad9ced3bed938d51';
        fetch('https://api.openweathermap.org/data/2.5/weather?lang=pt_br&q=' + city + '&appid=' + key)

            .then((resp) => { return resp.json() })
            .then((data) => {
                this.drawWeather(data)
                console.log(data)
            }) // Convert data to json
            .catch(function () {
                // catch any errors
            });
    }

    drawWeather(d) {
        let c_img = 'http://openweathermap.org/img/wn/' + d.weather[0].icon + '.png'

        let t = Math.round(parseFloat(d.main.temp) - 273.15);
        let max_t = Math.round(parseFloat(d.main.temp_max) - 273.15);
        let min_t = Math.round(parseFloat(d.main.temp_min) - 273.15);
        let feel = Math.round(parseFloat(d.main.feels_like) - 273.15);

        if (new Date().getHours > 7 && new Date().getHours < 19) {
            document.querySelector('#bg').src = bg0;
        } else {
            document.querySelector('#bg').src = bg1;
        }

        //TODO
        //arruma isso aq manokkkkkk
        //{

        //} 

        // console.log(d.weather.)
        this.setState({
            loc: d.name,
            clima: d.weather[0].description,
            cimg: c_img,
            temp: t,
            max_temp: max_t,
            min_temp: min_t,
            s_ter: feel,
            humid: d.main.humidity,
            vento: d.wind.speed
        });
    }

    custom_date() {
        let today = new Date();
        let custom_months = ["Jan", "Fev", "Mar", "Abr", "Mao", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        let custom_days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sexta", "Sáb"];
        let date = custom_days[today.getDay()] + ", " + today.getDate() + " de " + custom_months[today.getMonth()];
        return date;
    }

    /* CityChanged(e) {
        //let city = this.state.loc;
        //city[e.target.name] = e.target.value;
        let city = e.target.value;
        this.setState({ loc: city });
    } */

    enter(e) {
        if (e.keyCode == 13) {
            let city = e.target.value;
            this.setState({ loc: city });
            this.weatherBallon(e.target.value)
        }
    }

    render() {
        return (
            <div id='head'>
                <img id='bg' alt="bg" />
                <div id='data_loc'>
                    <div id='pegakkk'>
                        <div id='data'>
                            {this.state.dia}<img id='calendar' src={calendar} />
                        </div>

                        <div id='loc'>
                            <TextField className='city' /* value={this.state.loc} */
                                InputProps={{
                                    startAdornment: <InputAdornment position='start'><img id='pin' src={pin} /></InputAdornment>,
                                }}
                                onChange={this.CityChanged}
                                onKeyDown={this.enter}

                                label='Cidade'
                                variant='filled'
                            />
                        </div>
                    </div>
                    <h1 id='clima'>{this.state.clima.split('  ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h1>
                </div>

                <div id='c_clima'>
                    <div id='clima_report'>
                        <img id='c_img' src={this.state.cimg} alt='img_clima' />
                        <div>
                            {this.state.loc}
                            <h1 id='temp'>{this.state.temp}ºC</h1>
                        </div>
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
                    <div id='vento'>Vento: {(this.state.vento * 3.6).toFixed(1)} km/h</div>
                </div>
            </div>
        )
    }
}
export default Clima

