import Header from './Header/Header.jsx'
import './App.css'
import imgNublado from './assets/nublado.png'

function App() {

    //data
    var dia = custom_date()
    var loc = "Manaus - AM"
    
    //temperatura
    var temp = Math.round(Math.random() * 18)+15,
    t_max = (temp + 3),
    t_min = (temp - 2),
    s_temp
    if(temp>25){
        s_temp = Math.floor(temp * 1.1)
    }else{
        s_temp = Math.floor(temp * 0.95)
    }
    

    //clima
    var climas = ['Ensolarado', 'Parcialmente ensolarado', 'Nublado']
    var clima
    var c_url

    clima()

    //setup clima
    function clima(){
        if(temp < 22){
            clima = climas[2]
            c_url = 'imgNublado'

        }else if(temp < 28){
            clima = climas[1]
            c_url = './assets/parc_ensolarado.png'

        }else if(temp < 34){
            clima = climas[0]
            c_url = './assets/ensolarado.png'

        }
    }
    //data atual
    function custom_date() {
        let today = new Date();
        let custom_months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        let custom_days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
        let date = custom_days[today.getDay()] + ", " + today.getDate() + " de " + custom_months[today.getMonth()];
        return date;
    }

    return (
        <>
            <Header/>
            <section id='tudo'>
                <img id='bg' src="./assets/visual-banner1.png" alt="bg" />
                <div id='data_loc'>
                    <div id='data'>
                        <a>{dia}</a>
                    </div>
                    <div id='loc'>
                        <a>{loc}</a>
                    </div>
                    <h1 id='clima'>{clima}</h1>
                </div>
                <div id='c_clima'>

                    <div id='clima_report'>
                        <img id='c_img' src={c_url} alt='img_clima' />
                        <h1>{temp}ºC</h1>
                        <div id='max_min'>
                            <div>{t_max}<img src='./assets/up-right-arrow.png'/></div>
                            <div>{t_min}<img src='./assets/down-right-arrow.png'/></div>
                        </div>
                    </div>

                    <a>sensação termica: {s_temp} ºC</a>
                </div>
                <div id='stat'>
                    <a>Qualidade do ar: Razoável</a>
                    <a>Umidade: 82%</a>
                    <a>Vento: 9 km/h</a>
                </div>
            </section>
            <section id='corpo'>
                <div>
                    asbdabsdubashjdbjkahsbdjhabsdjkhbasjhdbjkahsbdjhkasbdjkhbasjhkdb
                </div>
            </section>
        </>
    )
}

export default App