import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { toast } from 'react-toastify'

function Inputs({ setQuery, units, setUnits }) {
    const [city, setCity] = useState('')

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name
        if (units !== selectedUnit) setUnits(selectedUnit)
    }

    const handleSearchClick = () => {
        if (city !== '') setQuery({ q: city })
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setQuery({
                    lat, lon
                })
            })
        }
    }

    function enterCity(e) {
        if (e.key == 'Enter') {
            handleSearchClick()
        }
    }

    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input
                    onKeyDown={enterCity}
                    value={city}
                    onChange={(e) => setCity(e.currentTarget.value)}
                    type='text'
                    placeholder='Pesquisar...'
                    className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize bg-transparent border-solid border-2 border-white rounded-md text-white placeholder-white' />
                <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleSearchClick} />
                <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleLocationClick} />
            </div>

            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name='metric' className='text-xl text-white font-light hover:scale-125 transition ease-out bg-transparent border-solid border-2 border-white rounded-md p-1 mx-2' onClick={handleUnitsChange}>°C</button>
                <button name='imperial' className='text-xl text-white font-light hover:scale-125 transition ease-out bg-transparent border-solid border-2 border-white rounded-md p-1 mx-2' onClick={handleUnitsChange}>°F</button>
            </div>

        </div>
    )
}

export default Inputs