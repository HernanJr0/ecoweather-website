import { AuthGoogleContext } from "../../contexts/authGoogle";
import { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";

import { Star } from "../../Components/Clima/Clima.jsx"

import Noticia from "../../Components/Noticia/Noticia.jsx";


import "./User.css";

function User() {

	const { user, signOut, cities, news } = useContext(AuthGoogleContext);

	const username = user.displayName || "User";
	const userImage = user.photoURL || "https://tinyurl.com/5kub7nce";

	const [c, setC] = useState([]);
	const [n, setN] = useState([]);

	useEffect(() => {
		const ai = () => {
			setC(cities)
			setN(news)
		}
		ai()
	}, [])

	return (
		<div id="userCont">
			<div id="usercard">
				<img
					id="userbg"
					src="https://i.ytimg.com/vi/SGQULVZ8lyk/maxresdefault.jpg?7857057827"
				/>
				<div id="user-data">
					<h2>{username}</h2>
					<Link to="/home/user/edit">
						<img src={userImage} id="pfp" />
					</Link>
				</div>
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
			<div id="l-news">
				<ul>
					<h2>Notícias Salvas</h2>
					{
						n.map((news, i) => {
							return (
								<li key={i}>
									<Noticia
										item={news}
										source={news.source}

									/* url={news.url}
									uri={news.uri}
									image={news.image}
									title={news.title}
									body={news.body}
									source={news.source} */

									/>
								</li>
							);
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
