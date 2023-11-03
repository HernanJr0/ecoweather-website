import { app } from "../../service/firebaseConfig.jsx";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { useContext } from "react";
import "./User.css";
import { Button } from "@mui/material";

import {
	collection,
	getFirestore,
	getDocs,
} from "firebase/firestore";

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "firebase/storage";

import { useState, useEffect } from "react";

function User() {

	const db = getFirestore(app);
	const storage = getStorage(app)

	const { user, signOut } = useContext(AuthGoogleContext);

	const username = user.displayName || "User";
	const userImage = user.photoURL || "https://tinyurl.com/5kub7nce";


	const [cities, setCities] = useState([])
	const citiesCollectionRef = collection(db, "users", user.uid, "cities");

	const save = () => {
		uploadBytes(ref(storage, user.uid), inputFile.files[0])
		    .then((snapshot) => {
		        console.log("success")
		    })
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
			console.log("kk")
		};
		getCities();
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
					<input id="inputFile" type="file" onChange={handleIMG} />

				</div>
			</div>

			<div id="l-cities">
				<h2 id="header">Cidades Favoritas</h2>
				<ul id="">
					{
						cities.map((city, i) => {
							return (
								<li key={i}>{city.nome}</li>
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
