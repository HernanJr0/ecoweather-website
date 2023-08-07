import './Previsao.css'

const Previsao = () => {

    var imgClimaManha = 'https://cdn-icons-png.flaticon.com/512/362/362406.png'
    var imgClimaTarde = 'https://cdn-icons-png.flaticon.com/512/362/362374.png'
    var imgClimaNoite = 'https://cdn-icons-png.flaticon.com/512/362/362392.png'

    return (
        <>
            <div id='Previsao'>
                <div id='previsaoCont'>
                    <h2 id='previsaoTitulo'>Previsao do tempo</h2>
                    <hr />
                    <div id='previsaoDesc'>
                        <p>Manaus</p>
                        <div id='previsaoHorarios'>
                            <div>
                                <img src={imgClimaManha} className='previsaoTempo' />
                                <p>Manhã</p>
                            </div>
                            <div>
                                <img src={imgClimaTarde} className='previsaoTempo' />
                                <p>Tarde</p>
                            </div>
                            <div>
                                <img src={imgClimaNoite} className='previsaoTempo' />
                                <p>Noite</p>
                            </div>
                        </div>
                    </div>
                    <a id='previsaoLink' href=''>Ver mais...</a>
                </div>
            </div>
        </>
    )
}

export default Previsao