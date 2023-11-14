import { AuthGoogleContext } from "../../contexts/authGoogle";
import { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";

import { Star } from "../../Components/Clima/Clima.jsx"

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

	function peba() {

		/* if (n.length > 0) { */
		var ai

		if (document.getElementById("srch")) {
			ai = document.getElementById("srch").value
		}
		if (n.length > 0) {
			return n.map((news) => {
				return (
					<SwiperSlide key={Math.random()} className="horizontal">
						<Noticia item={!!ai ? news.item : news} />
					</SwiperSlide>
				);
			})
		} else {
			return <p>Nenhuma noticia encontrada!</p>
		}
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
					threshold: 0.4,
					keys: ['title', 'source']
				}

				const fuse = new Fuse(news, options).search(ai)

				if (!!fuse) {
					setN(fuse)
				} else {

				}

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
					<Link to="/user/edit">
						<img src={userImage} id="pfp" />
					</Link>

				</div>

			</div>

			<div id="l-news">
				<div id="news-header">
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

				<Swiper className="oi"

					freeMode={true}
					spaceBetween={5}
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
					}}
					scrollbar
				>

					{
						peba()
					}


				</Swiper>

			</div>

			<div id="l-cities">
				<h2>Cidades Favoritas</h2>
				<ul>
					{
						c.map((city, i) => {
							return (
								<li key={i}>
									<Star city={city.nome} />
									{city.nome}
								</li>
							)
						})

					}
				</ul>
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
