import './Previsao.css'
import TopButtons from './Components/TopButtons'
import Inputs from './Components/Inputs'
import TimeAndLocation from './Components/TimeAndLocation'
import TemperaturaEDetalhes from './Components/TemperaturaEDetalhes'
import CompPrevisao from './Components/CompPrevisao'
import getFormattedWeatherData from '../../service/weatherService'
import { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Previsao = () => {

    const [query, setQuery] = useState({ q: 'Manaus' })
    const [units, setUnits] = useState('metric')
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const fetchWeather = async () => {
            const message = query.q ? query.q : 'current location.'

            toast.info('Consultando o clima de ' + message + '...')

            await getFormattedWeatherData({ ...query, units }).then(data => {

                toast.success(`Clima de ${data.name}, ${data.country} consultado com sucesso`)

                setWeather(data)
            })
        }

        fetchWeather()
    }, [query, units])

    const formatBackground = () => {
        if (!weather) return 'from-cyan-700 to-blue-700'
        const threshold = units === 'metric' ? 20 : 60
        if (weather.temp <= threshold) return 'from-cyan-700 to-blue-700'

        // return 'from-yellow-700 to-orange-700'
    }

    return (
        <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit ${formatBackground()}`}>
            <TopButtons setQuery={setQuery} />
            <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

            {weather && (
                <div>
                    <TimeAndLocation weather={weather} />
                    <TemperaturaEDetalhes weather={weather} />

                    <CompPrevisao title="a cada hora" items={weather.hourly} />
                    <CompPrevisao title="a cada dia" items={weather.daily} />
                </div>
            )}
            <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
        </div>
    )
}

export default Previsao