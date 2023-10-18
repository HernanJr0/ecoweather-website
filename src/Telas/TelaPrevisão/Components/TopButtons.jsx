import React from 'react'

function TopButtons({ setQuery }) {

    const cities = [
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
            title: 'Toronto'
        },
        {
            id: 5,
            title: 'Munich'
        }
    ]

    return (
        <div className='flex items-center justify-around my-6'>
            {cities.map((city) => (
                <button
                    key={city.id}
                    className='text-white text-lg font-medium'
                    onClick={() => setQuery({ q: city.title })}>{city.title}
                </button>
            ))}
        </div>
    )
}

export default TopButtons