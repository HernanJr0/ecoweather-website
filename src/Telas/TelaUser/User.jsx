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
import { useState, useEffect } from "react";

function User() {

	const db = getFirestore(app);


	const { user, signOut } = useContext(AuthGoogleContext);

	const userLOG = JSON.parse(/* localStorage.getItem("@AuthFirebase:user") */ user);
	const userLOGname = userLOG.displayName || "User";
	const userImage = userLOG.photoURL || "https://tinyurl.com/5kub7nce";


	const [cities, setCities] = useState([])
	const citiesCollectionRef = collection(db, "users", userLOG.uid, "cities");

	useEffect(() => {
		const getCities = async () => {
			const data = await getDocs(citiesCollectionRef);
			setCities(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			console.log("kk")
		};
		getCities();
	}, [citiesCollectionRef]);

	return (
		<div>
			<div id="usercard">
				<img
					id="userbg"
					src="https://i.ytimg.com/vi/SGQULVZ8lyk/maxresdefault.jpg?7857057827"
				/>
				<div>
					<h2>{userLOGname}</h2>
					<img src={userImage} id="pfp" />
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

			<Button id="sair" onClick={signOut} variant="outlined" color="error">
				Sair
			</Button>
		</div>
	);

}
export default User;
