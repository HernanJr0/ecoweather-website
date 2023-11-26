import { AuthGoogleContext } from "../../contexts/authGoogle";
import { useContext, useEffect, useState } from "react";
import { Button, ToggleButtonGroup, ToggleButton } from "@mui/material";

import { Link } from "react-router-dom";

import { CityButton, Star } from "../../Components/Clima/Clima.jsx"

import Noticia from "../../Components/Noticia/Noticia.jsx";

import Fuse from 'fuse.js'

import ClearIcon from '@mui/icons-material/Clear';

import InputAdornment from '@mui/material/InputAdornment';

import IconButton from '@mui/material/IconButton';

import "./User.css";
import "../../Components/Noticia/Noticia.css"

import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode } from 'swiper/modules';

import { TextField } from "@mui/material";

function User() {

	// const Fuse = require('fuse.js')

	const { user, signOut, cities, news } = useContext(AuthGoogleContext);

	const username = user.displayName || "User";
	const userImage = user.photoURL || "https://tinyurl.com/5kub7nce";

	const [c, setC] = useState(cities);
	const [n, setN] = useState(news);

	useEffect(() => {

		if (!!document.getElementById("cities")) {
			var item = document.getElementById("cities");

			item.addEventListener("wheel", function (e) {
				item.scrollLeft += (e.deltaY / 2);
				e.preventDefault();
			});
		}
	},[])

	function loadNews() {

		/* if (n.length > 0) { */
		var ai

		if (document.getElementById("srch")) {
			ai = document.getElementById("srch").value
		}

		if (!!n)
			if (n.length > 0) {
				return n.map((news,i) => {
					return (
						<SwiperSlide key={Math.random()} className="horizontal">
							<Noticia item={!!ai ? news.item : news} />
						</SwiperSlide>
					);
				})
			} else {
				return <p id="nenhumaNoticia">Nenhuma noticia encontrada!</p>
			}
		else
			return <p id="nenhumaNoticia">Nenhuma noticia encontrada!</p>
	}

	function loadCities() {
		if (!!c) {

			if (c.length > 0) {
				return c.map((city, i) => {
					return (
						<CityButton id="balalau" city={city.nome} key={Math.random()} />
					)
				})

			} else {
				return <p id="nenhumaNoticia">Nenhuma cidade encontrada!</p>
			}
		}
		else
			return <p id="nenhumaNoticia">Nenhuma cidade encontrada!</p>
	}

	function clear() {
		document.getElementById("srch").value = ''
		setN(news)
	}

	function pesquisa(e) {
		if (e.key == 'Enter') {
			const ai = document.getElementById("srch").value

			if (ai != '') {
				const options = {
					minCharLength: 2,
					isCaseSensitive: false,
					threshold: 0.5,
					keys: ['title', 'source']
				}

				const fuse = new Fuse(news, options).search(ai)
				setN(fuse)

			} else {
				setN(news)
			}
		}
	}

	return (
		<div id="userCont">
			<div id="usercard">
				<img
					id="userbg"
					src="https://i.ytimg.com/vi/SGQULVZ8lyk/maxresdefault.jpg?7857057827"
				/>

				<div id="user-data">

					<h2>{username}</h2>
					<Link to="/user/edit" id="linkUserImg">
						<img src={userImage} id="pfp" />
					</Link>

				</div>

			</div>

			<div id="l-news">
				<div className="s-header">
					<h2>Notícias Salvas</h2>

					<TextField id="srch"
						onKeyDown={pesquisa}
						placeholder="Pesquisar"
						size="small"

						InputProps={{
							endAdornment:
								<InputAdornment position="end" >
									<IconButton
										onClick={clear}
										edge="end"
									>
										<ClearIcon />
									</IconButton>
								</InputAdornment>,
						}}
					/>

				</div>

				<Swiper
					id="oi"
					freeMode={true}
					modules={[FreeMode, Scrollbar]}
					breakpoints={{
						480: {

							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						1024: {
							slidesPerView: 4,
						},
						1280: {
							slidesPerView: 5,
						}
					}}
					scrollbar={{
						draggable: true
					}}
				>
					{loadNews()}

				</Swiper>

			</div>

			<div id="l-cities">
				<div className="s-header">
					<h2>Cidades Favoritas</h2>
				</div>

				<div id="cities">

					{loadCities()}
				</div>

			</div>
			<div id="buttons">
				<Button id="sair" onClick={signOut} variant="outlined" color="error">
					Sair
				</Button>
			</div>
		</div >
	);

}
export default User;
