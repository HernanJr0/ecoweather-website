import { AuthGoogleContext } from "../../contexts/authGoogle";
import { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";

import { Star } from "../../Components/Clima/Clima.jsx"

import Noticia from "../../Components/Noticia/Noticia.jsx";

import { ToastContainer } from "react-toastify";

import "./User.css";
import "../../Components/Noticia/Noticia.css"

import 'swiper/css/scrollbar';
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

function User() {

	const { user, signOut, cities, news } = useContext(AuthGoogleContext);

	const username = user.displayName || "User";
	const userImage = user.photoURL || "https://tinyurl.com/5kub7nce";

	const [c, setC] = useState(cities);
	const [n, setN] = useState(news);

	function peba() {
		console.log(n.length)
		console.log(n)
		if (n.length != undefined) {
			return n.map((news, i) => {
				return (
					<SwiperSlide key={i} className="horizontal">
						<Noticia item={news} />
					</SwiperSlide>
				);
			})
		} else {
			return (
				<SwiperSlide key={Math.random()} className="horizontal">
					<Noticia item={n} />
				</SwiperSlide>
			);
		}
	}


	function pesquisa(e) {
		if (e.key == 'Enter') {
			const ai = document.getElementById("srch").value

			if (ai != '') {
				news.map((news) => {
					if (news.title.indexOf(ai) > -1) {
						setN(news)
					}
				})
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

				<div id="news-header">
					<h2>Notícias Salvas</h2>
					<input id="srch" type="text" onKeyDown={pesquisa} placeholder="Pesquisar" />
				</div>

				<Swiper className="oi"
					breakpoints={{
						480: {

							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						960: {
							slidesPerView: 4,
						},
					}}
					spaceBetween={10}
					scrollbar
					modules={[Scrollbar]}

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
		</div>
	);

}
export default User;
