import { app } from "../../service/firebaseConfig.jsx";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { useContext } from "react";
import { Button } from "@mui/material";

import { useState, useEffect } from "react";

import Noticia from "../../Components/Noticia/Noticia.jsx";

import {
	collection,
	getFirestore,
	getDocs,
} from "firebase/firestore";

import {
	getAuth,
	updateProfile,
} from "firebase/auth";

import {
	getStorage,
	ref,
	uploadBytes,
	getDownloadURL,
} from "firebase/storage";


import "./User.css";
function User() {

	const db = getFirestore(app);
	const auth = getAuth(app);
	const storage = getStorage(app)

	const { user, signOut } = useContext(AuthGoogleContext);

	const username = user.displayName || "User";
	const userImage = user.photoURL || "https://tinyurl.com/5kub7nce";

	const [cities, setCities] = useState([])
	const [news, setNews] = useState([])

	const citiesCollectionRef = collection(db, "users", user.uid, "cities");
	const newsCollectionRef = collection(db, "users", user.uid, "news");

	const save = async () => {
		await uploadBytes(ref(storage, 'users_pfp/' + user.uid), inputFile.files[0])
			.then((snapshot) => {
				console.log("success")
			})

		getDownloadURL(ref(storage, 'users_pfp/' + user.uid))
			.then((url) => {
				updateProfile(auth.currentUser, {
					photoURL: url
				})
				console.log('success')
			})
			.catch((error) => {
				console.log(error)
				// Handle any errors
			});
	}

	const handleIMG = (e) => {
		var selectedFile = e.target.files[0];
		var reader = new FileReader();

		var imgtag = document.getElementById("pfp");

		reader.onload = (e) => {
			imgtag.src = e.target.result;
		};

		reader.readAsDataURL(selectedFile);
	}

	function clica() {
		document.getElementById("inputFile").click()
	}

	useEffect(() => {
		const getCities = async () => {
			const data = await getDocs(citiesCollectionRef);
			setCities(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			console.log("cidade")
		};
		const getNews = async () => {
			const data = await getDocs(newsCollectionRef);
			setNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			console.log("noticia")
		};
		getCities();
		getNews();
	}, []);

	return (
		<div>
			<div id="usercard">
				<img
					id="userbg"
					src="https://i.ytimg.com/vi/SGQULVZ8lyk/maxresdefault.jpg?7857057827"
				/>
				<div>
					<h2>{username}</h2>
					<img src={userImage} id="pfp" onClick={clica} />
					<input id="inputFile" type="file" accept=".png, .jpg, .gif" onChange={handleIMG} />

				</div>
			</div>

			<div id="l-cities">
				<h2>Cidades Favoritas</h2>
				<ul>
					{
						cities.map((city, i) => {
							return (
								<li key={i}>{city.nome}</li>
							);
						})
					}
				</ul>
			</div>
			<div id="l-news">
				<h2>Noticias Salvas</h2>
				<ul>
					{
						news.map((news, i) => {
							return (
								<li key={i}>
									<Noticia item={news} source={news.source}/>
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
