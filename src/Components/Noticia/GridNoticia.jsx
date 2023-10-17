import Noticia from '../../Components/Noticia/Noticia.jsx';
import '../../Components/Noticia/GridNoticia.css'
import { PureComponent } from 'react'

class GridNoticia extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {

            loc: this.props.locale,

            items: null
        }

        this.newsBallon = this.newsBallon.bind(this)
        this.loadnews = this.loadnews.bind(this)
    }


    newsBallon(city) {
        // fetch("https://www.newsapi.ai/api/v1/article/getArticles?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22categoryUri%22%3A%22news%2FEnvironment%22%7D%2C%7B%22locationUri%22%3A%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2F"+ city.charAt(0).toUpperCase() + city.slice(1) +"%22%7D%5D%7D%2C%22%24filter%22%3A%7B%22forceMaxDataTimeWindow%22%3A%2231%22%2C%22startSourceRankPercentile%22%3A0%2C%22endSourceRankPercentile%22%3A100%2C%22isDuplicate%22%3A%22skipDuplicates%22%7D%7D&resultType=articles&articlesSortBy=date&includeArticleEventUri=false&apiKey=414197e9-bf3c-4d3c-a7ab-387b544c81d0")
        //     .then((resp) => { return resp.json() })
        //     .then((data) => {
        //        console.log(data);
        //        this.setState({ items: data.articles.results })
        //     });
    }

    componentDidMount() {
        this.newsBallon(this.state.loc)
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.locale !== this.props.locale) {
            this.setState({ items: null })
            this.newsBallon(this.props.locale)
        }
    }

    // newsBallon(city) {
    //     fetch("https://newsapi.org/v2/everything?q=" + city + " &searchIn=title" + "&sortBy=relevancy" + "&pageSize=10" + "&language=pt" + "&apiKey=cd3417de6c7b4ae38a0cff0124696c5d")

    //         .then((resp) => { return resp.json() })
    //         .then((data) => {
    //             this.setState({ items: data.articles })
    //             console.log(data)
    //         })
    // }

    loadnews() {
        if (this.state.items != null) {
            return this.state.items.map((item, i) => (
                <Noticia key={i} item={item} />
            ))
        }
    }

    render() {
        return (
            <div>
                <p id='noticiasTitulo'><b>Notícias</b></p>

                {this.loadnews()}

            </div >
        )
    }

}

export default GridNoticia
