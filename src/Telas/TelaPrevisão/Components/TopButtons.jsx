import React from 'react'
import { app } from "../../../service/firebaseConfig.jsx";
import { AuthGoogleContext } from "../../../contexts/authGoogle";
import {
    collection,
    getFirestore,
    getDocs,
} from "firebase/firestore";

import { useState, useEffect, useContext } from 'react';


import 'swiper/css';
import 'swiper/css/scrollbar';

function TopButtons({ setQuery }) {

    /* const cities = [
        {
            id: 1,
            title: 'Nova York'
        },
        {
            id: 2,
            title: 'Tokyo'
        },
        {
            id: 3,
            title: 'Brasília'
        },
        {
            id: 4,
            title: 'Paris'
        }
    ] */

    // const db = getFirestore(app);

    const { cities } = useContext(AuthGoogleContext);


    useEffect(() => {

		if (!!document.getElementById("city-list")) {
			var item = document.getElementById("city-list");

			item.addEventListener("wheel", function (e) {
				item.scrollLeft += (e.deltaY / 2);
				e.preventDefault();
			});
		}
	},[])


    function oi() {
        if (!!cities) {

            return cities.map((city, i) => (
                <button key={i} id='city-button'
                    className='text-white text-lg font-medium border-solid border-2 border-white rounded-md m-4 p-1 bg-transparent hover:border-gray-300 hover:text-gray-200 hover:scale-110 transition ease-out'
                    onClick={() => setQuery({ q: city.nome })}>{city.nome}
                </button>
            ))
        }
    }

    // const citiesCollectionRef = collection(db, "users", user.uid, "cities");


    /* const [cities, setCities] = useState([])

    useEffect(() => {
        const getCities = async () => {
            const data = await getDocs(citiesCollectionRef);
            setCities(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log("ai")
        };
        getCities();
    }, []); */


    return (
        <div id='city-list' className='flex items-center'>
            {oi()}
        </div >
    )
}

export default TopButtons