import { Button } from '@mui/material'
import { Air, WaterDrop, BubbleChart, ArrowUpward, ArrowDownward } from '@mui/icons-material'
import './Previsao.css'
import { Link } from 'react-router-dom'

const Previsao = () => {

    return (
        <div id='prevPage'>
            <div id='prevCont'>
                <section id='prev1'>
                    <h2>
                        Manaus
                    </h2>
                    <div id='prev1Center'>
                        <div>
                            <img id='prev1img' src='https://cdn-icons-png.flaticon.com/512/362/362404.png' />
                            <h2>Trovoadas</h2>
                        </div>
                        <div id='prev1CenterLeft'>
                            <h1>38°</h1>
                            <h2>
                                Sensação: 41°
                            </h2>
                        </div>
                    </div>
                </section>

                <section id='prev3'>
                    <div id='prevInfosSide'>
                        <p>
                            <ArrowUpward sx={{ color: 'red' }} />
                            Máxima: 38°
                        </p>
                        <p>
                            <ArrowDownward sx={{ color: 'dodgerBlue' }} />
                            Mínima: 24°
                        </p>
                    </div>
                    <div id='prevInfos'>
                        <p >
                            <BubbleChart /> Qualidade do ar: Péssimo
                        </p>
                        <p>
                            <WaterDrop /> Umidade: 50%
                        </p>
                        <p>
                            <Air /> Vento: 0.3 m/s
                        </p>
                    </div>
                </section>

                <section id='prev2'>
                    <h2>Previsão diária</h2>
                    <div id='prev2Dias'>
                        <div>
                            <img src='https://cdn-icons-png.flaticon.com/512/362/362404.png' />
                            <p>SEGUNDA</p>
                        </div>
                        <div>
                            <img src='https://cdn-icons-png.flaticon.com/512/362/362406.png' />
                            <p>TERÇA</p>
                        </div>
                        <div>
                            <img src='https://cdn-icons-png.flaticon.com/512/362/362374.png' />
                            <p>QUARTA</p>
                        </div>
                        <div>
                            <img src='https://cdn-icons-png.flaticon.com/512/362/362404.png' />
                            <p>QUINTA</p>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Previsao