import React, { Component } from "react";
import "./Clima.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { yellow } from "@mui/material/colors";
import { Checkbox } from "@mui/material";

/* import calendar from '../../assets/calendar.png';

import { IconButton, TextField } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place'; */
import { AuthGoogleContext } from "../../contexts/authGoogle";

var val = "";
var prevCity = "";
var bg = "";
const key = "d3afafb4de8d7a76ad9ced3bed938d51";

class Clima extends Component {
    static contextType = AuthGoogleContext;

    constructor(props) {
        super(props);

        this.state = {
            loc:
                this.props.locale.charAt(0).toUpperCase() +
                this.props.locale.slice(1),
            clima: "",
            temp: "",
            s_ter: "",
            humid: "",
            vento: "",
            cimg: "",
            wall: "",
            fav: false,
        };

        this.drawWeather = this.drawWeather.bind(this);
        this.weatherBallon = this.weatherBallon.bind(this);
        this.handleFav = this.handleFav.bind(this);
    }

    componentDidMount() {
        this.weatherBallon(this.state.loc);
        prevCity = this.state.loc;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.locale !== this.props.locale) {
            // this.setState({loc: this.props.locale})
            this.weatherBallon(this.props.locale);
        }
    }

    weatherBallon(city) {
        if (city != prevCity) {
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?lang=pt_br&q=" +
                    city +
                    "&appid=" +
                    key
            )
                .then((resp) => {
                    return resp.json();
                })
                .then((data) => {
                    if (data.cod == 404) {
                        alert("Este lugar não foi encontrado");
                    } else {
                        this.drawWeather(data);
                        val = data;
                        console.log(data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            prevCity = city;
        } else {
            this.drawWeather(val);
        }
    }

    async drawWeather(d) {
        const { isCityFav } = this.context;

        if (await isCityFav(d.name)) {
            this.setState({ fav: true });
        } else {
            this.setState({ fav: false });
        }

        let c_img =
            "http://openweathermap.org/img/wn/" + d.weather[0].icon + ".png";

        let t = Math.round(parseFloat(d.main.temp) - 273.15);

        let feel = Math.round(parseFloat(d.main.feels_like) - 273.15);

        let valoresClima = d.name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s/g, "-");

        var tempo;
        if (new Date().getHours() >= 6 && new Date().getHours() <= 18) {
            tempo = "-dia";
        } else {
            tempo = "-noite";
        }

        if (d.name != this.state.loc || bg == "" || bg == null)
            await fetch(
                "http://source.unsplash.com/random/?" + valoresClima + tempo
            ).then((result) => {
                bg = result.url;
            });

        this.setState({
            loc: d.name,
            clima: d.weather[0].description,
            temp: t,
            s_ter: feel,
            humid: d.main.humidity,
            vento: d.wind.speed,
            cimg: c_img,
            wall: bg,
        });
    }

    handleFav = (name) => (e) => {
        this.setState({ [name]: e.target.checked });

        const { addCity, delCity } = this.context;
        if (e.target.checked) {
            //registra
            addCity(this.state.loc);
        } else {
            //remove
            delCity(this.state.loc);
        }
    };

    render() {
        return (
            /* <Swiper id='clima-swiper'>
                <SwiperSlide className='clima-swiper-slide'> */

            <div id="head">
                <img className="bg" src={this.state.wall} alt="bg" />

                <h1 id="clima">
                    {this.state.clima.charAt(0).toUpperCase() +
                        this.state.clima.slice(1)}
                </h1>

                <div id="c_clima">
                    <div id="clima_report">
                        <img id="c_img" src={this.state.cimg} alt="img_clima" />
                        <div id="pala">
                            <div id="city">{this.state.loc}</div>
                            <h1 id="temp">{this.state.temp}ºC</h1>
                        </div>
                    </div>
                    <div id="feel">Sensação: {this.state.s_ter}ºC</div>
                </div>

                <div id="stat">
                    {/* porreessaakkkkkkkk */}
                    <div>Qualidade do ar: Razoável</div>

                    <div id="humid">Umidade: {this.state.humid}%</div>
                    <div id="vento">
                        Vento: {(this.state.vento * 1).toFixed(1)} m/s
                    </div>
                </div>
                <div id="starcont">
                    <Checkbox
                        id="starIcon"
                        onChange={this.handleFav("fav")}
                        checked={this.state.fav}
                        icon={<StarBorderIcon />}
                        checkedIcon={<StarIcon />}
                        sx={{
                            color: yellow[0],
                            "&.Mui-checked": {
                                color: yellow[600],
                            },
                            "& .MuiSvgIcon-root": { fontSize: 30 },
                        }}
                    />
                </div>
            </div>

            /* </SwiperSlide>
        </Swiper> */
        );
    }
}
export default Clima;
