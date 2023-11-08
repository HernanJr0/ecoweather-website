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

    const db = getFirestore(app);
    const { user } = useContext(AuthGoogleContext);

    const citiesCollectionRef = collection(db, "users", user.uid, "cities");


    const [cities, setCities] = useState([])

    useEffect(() => {
        const getCities = async () => {
            const data = await getDocs(citiesCollectionRef);
            setCities(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log("ai")
        };
        getCities();
    }, []);

    return (
        <div className='city-list flex items-center'>
            {cities.map((city, i) => (
                <button key={i}
                    className='city-button text-white text-lg font-medium border-solid border-2 border-white rounded-md m-4 p-1 bg-transparent hover:border-gray-300 hover:text-gray-300 hover:scale-125 transition ease-out'
                    onClick={() => setQuery({ q: city.nome })}>{city.nome}
                </button>
            ))}
        </div>
    )
    /* 
<Swiper
    scrollbar={{
        draggable: true,
        hide: true
    }}
    mousewheel
    freeMode
    id='cities-swiper'
    slidesPerView={'auto'}
    grabCursor={true}
    modules={[Scrollbar, Mousewheel]}
> */
    {/* <SwiperSlide>
                    </SwiperSlide> */}


    /* </Swiper> */

}

export default TopButtons