import { app } from "../../service/firebaseConfig.jsx";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { useContext } from "react";
import { Button } from "@mui/material";

import { useState, useEffect } from "react";

import Noticia from "../../Components/Noticia/Noticia.jsx";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { IconButton } from "@mui/material";
import { red } from "@mui/material/colors";

import {
	collection,
	getFirestore,
	getDocs,
} from "firebase/firestore";


import "./User.css";

function User() {

	const db = getFirestore(app);

	const { user, xgpfp, delItem, signOut } = useContext(AuthGoogleContext);

	const username = user.displayName || "User";
	const userImage = user.photoURL || "https://tinyurl.com/5kub7nce";

	const [cities, setCities] = useState([])
	const [news, setNews] = useState([])

	const citiesCollectionRef = collection(db, "users", user.uid, "cities");
	const newsCollectionRef = collection(db, "users", user.uid, "news");

	var newpfp

	const handleIMG = (e) => {
		var reader = new FileReader();
		var imgtag = document.getElementById("pfp");

		var selectedFile = e.target.files[0];
		newpfp = e.target.files[0]

		reader.readAsDataURL(selectedFile);

		reader.onload = (e) => {
			imgtag.src = e.target.result;
		};
	}

	const deleteCity = (city) => {
		//remove
		console.log('lixo')
		delItem("cities", city);
	};

	function save() {
		xgpfp(newpfp)
	}

	useEffect(() => {
		const getCities = async () => {
			const data = await getDocs(citiesCollectionRef);
			setCities(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		const getNews = async () => {
			const data = await getDocs(newsCollectionRef);
			setNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getCities();
		getNews();
		console.log('aiai')
	}, [cities]);


	return (
		<div id="userCont">
			<div id="usercard">
				<img
					id="userbg"
					src="https://i.ytimg.com/vi/SGQULVZ8lyk/maxresdefault.jpg?7857057827"
				/>
				<div>
					<h2>{username}</h2>

					<label htmlFor="inputFile">
						<img src={userImage} id="pfp" />
					</label>

					<input id="inputFile" type="file" accept=".png, .jpg, .gif" onChange={handleIMG} />

				</div>
			</div>

			<div id="l-cities">
				<h2>Cidades Favoritas</h2>
				<ul>
					{
						cities.map((city, i) => {
							return (
								<li key={i}>

									<IconButton
										id="deleteIcon"
										onClick={() => deleteCity(city.nome)}
									>
										<RemoveCircleIcon />
									</IconButton>
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
						news.map((news, i) => {
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
				<Button id="save" onClick={save} variant="contained" >
					Salvar
				</Button>
				<Button id="sair" onClick={signOut} variant="outlined" color="error">
					Sair
				</Button>
			</div>
		</div>
	);

}
export default User;
