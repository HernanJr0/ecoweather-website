import Noticia from '../../Components/Noticia/Noticia.jsx';
import '../../Components/Noticia/GridNoticia.css'
import React, { Component } from 'react'

class GridNoticia extends Component {

    constructor(props) {
        super(props)

        this.state = {

            loc: this.props.locale,

            /* items: [{
                author:
                    "Alessandro Di Lorenzo",
                content:
                    "O avanÃ§o da inteligÃªncia artificial pode trazer impactos ao meio ambiente. Estudos indicam que, atÃ© 2025, a indÃºstria de TI poderÃ¡ usar 20% de toda a eletricidade produzida e ser responsÃ¡vel po… [+3254 chars]",
                description:
                    "O treinamento de modelos de IA gera grandes quantidades de dióxido de carbono e acende um alerta sobre os impactos ao meio ambiente\nO post IA: amiga ou inimiga do meio ambiente? apareceu primeiro em Olhar Digital.",
                publishedAt:
                    "2023-09-04T15:20:52Z",
                source:
                    { id: null, name: 'Olhardigital.com.br' },
                title:
                    "IA: amiga ou inimiga do meio ambiente?",
                url:
                    "https://olhardigital.com.br/2023/09/04/pro/ia-amiga-ou-inimiga-do-meio-ambiente/",
                urlToImage:
                    "https://img.olhardigital.com.br/wp-content/uploads/2023/09/IA-e-meio-ambiente-1.jpg",
            }, {
                author:
                    "Agência Brasil",
                content:
                    "6O presidente Luiz Inácio Lula da Silva está a caminho de Nova Déli, capital da Índia, onde participará da 18ª Cúpula do G20, grupo que reúne as 19 nações de maior economia do mundo e a União Europei… [+4969 chars]",
                description:
                    "A cúpula é o ponto alto das atividades do G20, e marcará também a reta final da presidência rotativa do bloco\n------ Este artigo foi escrito por Agência Brasil. Este artigo apareceu originalmente no site Dinheirama.A reprodução deste texto só pode ser realiza…",
                publishedAt:
                    "2023-09-08T13:16:58Z",
                source:
                    { id: null, name: 'Dinheirama.com' },
                title:
                    "No G20, Lula vai discutir combustíveis, meio ambiente e pobreza",
                url:
                    "https://dinheirama.com/no-g20-lula-vai-discutir-combustiveis-meio-ambiente-e-pobreza/",
                urlToImage:
                    "https://dinheirama.com/wp-content/uploads/2023/09/20230908-lula.jpg"
            }] */
        }

        this.newsBallon = this.newsBallon.bind(this)
    }

    componentDidMount() {
        this.newsBallon(this.state.loc)
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.locale !== this.props.locale) {
            var seila = this.props.locale

            this.newsBallon(seila)
        }
    }

    newsBallon(city) {
        fetch("https://newsapi.org/v2/everything?q=" + city + "&searchIn=title" + "&sortBy=relevancy" + "&pageSize=10" + "&language=pt" + "&apiKey=cd3417de6c7b4ae38a0cff0124696c5d")
            .then((resp) => { return resp.json() })
            .then((data) => {
                this.setState({ items: data.articles })
                console.log(data)
            })
    }


    render() {

        return (
            <div>
                <p id='noticiasTitulo'><b>Notícias</b></p>


                {
                    () => {
                        if (this.state.items != null) {
                            this.state.items.map((item, i) => (
                                <Noticia key={i} item={item} />
                            ))
                        }
                    }
                }
            </div >
        )
    }

}

export default GridNoticia