import React, { Component } from "react";
import { useState, useEffect, useContext } from 'react'
import "./Clima.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { yellow } from "@mui/material/colors";
import { Checkbox } from "@mui/material";

/* import calendar from '../../assets/calendar.png';

import { IconButton, TextField } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place'; */
import { AuthGoogleContext } from "../../contexts/authGoogle";

import { toast } from "react-toastify";

var val = null;
var prevCity = null;
var bg = null;
const key = "d3afafb4de8d7a76ad9ced3bed938d51";


class Clima extends Component {
    static contextType = AuthGoogleContext;

    constructor(props) {
        super(props);

        this.state = {
            loc: this.props.locale,
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
        this.checkCity = this.checkCity.bind(this);
    }

    componentDidMount() {
        this.weatherBallon(this.state.loc);
        prevCity = this.state.loc;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.locale !== this.props.locale) {
            // this.setState({loc: this.props.locale})
            this.weatherBallon(this.props.locale);
            prevCity = this.props.locale;
        }
    }

    checkCity(d) {
        const { isCityFav } = this.context;

        if (isCityFav(d)) {
            this.setState({ fav: true });
        } else {
            this.setState({ fav: false });
        }
    }

    handleFav = (name) => (e) => {
        this.setState({ [name]: e.target.checked });

        const { addCity, delItem } = this.context;
        if (e.target.checked) {
            //registra
            addCity(this.state.loc);
        } else {
            //remove
            delItem("cities", this.state.loc);
        }
    };

    weatherBallon(city) {
        if (city !== prevCity) {
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?lang=pt_br&q=" + city + "&appid=" + key)
                .then(resp => {
                    return resp.json();
                })
                .then((data) => {
                    if (data.cod == 404) {
                        alert("Este lugar não foi encontrado");
                    } else {
                        val = data;

                        this.drawWeather(data);
                        this.checkCity(data.name)

                        console.log(data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            this.drawWeather(val);
            this.checkCity(val.name)
            console.log(val);
        }
    }


    async drawWeather(d) {

        let c_img = "https://openweathermap.org/img/wn/" + d.weather[0].icon + ".png";

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

        if (this.state.loc != prevCity || bg == null) {
            await fetch(
                "https://source.unsplash.com/random/?" + valoresClima + tempo
            ).then((result) => {
                bg = result.url;
            });
        }

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

    render() {
        return (

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

                    {/*
                    porreessaakkkkkkkk 
                    <div>Qualidade do ar: Razoável</div>
                    */}

                    <div id="humid">Umidade: {this.state.humid}%</div>
                    <div id="vento">
                        Vento: {(this.state.vento * 1).toFixed(1)} m/s
                    </div>
                </div>

                <div id="starCont">
                    <Star city={this.state.loc} />
                </div>
            </div>
        );
    }
}

const Star = (props) => {
    const { signed, addCity, delItem, isCityFav } = useContext(AuthGoogleContext);

    const [fav, setFav] = useState(false)

    useEffect(() => {

        const checkCity = () => {
            const a = isCityFav(props.city)
            setFav(a)
        }
        checkCity()
    }, [props.city, signed])

    const handleFav = (e) => {
        if (signed) {
            setFav(e.target.checked);

            if (e.target.checked) {
                //registra
                addCity(props.city);
            } else {
                //remove
                delItem("cities", props.city);
            }
        } else {
            toast.error("É necessário logar primeiro")
        }
    };

    return (
        <Checkbox
            id="starIcon"
            onChange={handleFav}
            checked={fav}
            icon={<StarBorderIcon />}
            checkedIcon={<StarIcon />}
            sx={{
                color: yellow[0],
                "&.Mui-checked": {
                    color: yellow[600],
                },
                "& .MuiSvgIcon-root": { fontSize: 32 },
            }}
        />
    )
}
export { Clima, Star };
