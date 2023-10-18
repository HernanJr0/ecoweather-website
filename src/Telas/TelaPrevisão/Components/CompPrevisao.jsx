import React from 'react'
import { iconUrlFromCode } from '../../../service/weatherService'

function CompPrevisao({ title, items }) {
    return (
        <div>
            <div className='mt-6'>
                <p className='text-white font-medium uppercase'>{title}</p>
                <hr className='my-2' />

                <div className='flex flex-row items-center justify-between text-white'>
                    {items.map((item) => (
                        <div className='flex flex-col items-center justify-center' key={item.title}>
                            <p className='font-light text-sm'>
                                {item.title}
                            </p>
                            <img src={iconUrlFromCode(item.icon)} className='w-12 my-1' />
                            <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default CompPrevisao