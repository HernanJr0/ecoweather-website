import Noticia from "../../Components/Noticia/Noticia.jsx";
import { PureComponent } from "react";

var val = "";
var prevCity = "";

class GridNoticia extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loc: this.props.locale,

            items: null,
        };

        this.newsBallon = this.newsBallon.bind(this);
        this.loadnews = this.loadnews.bind(this);
    }
    newsBallon(city) {/* 
        if (city != prevCity) {
            fetch("https://www.newsapi.ai/api/v1/article/getArticles?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22%24or%22%3A%5B%7B%22categoryUri%22%3A%22dmoz%2FScience%2FEarth_Sciences%2FNatural_Disasters_and_Hazards%22%7D%2C%7B%22categoryUri%22%3A%22dmoz%2FScience%2FEnvironment%2FAir_Quality%22%7D%2C%7B%22categoryUri%22%3A%22news%2FEnvironment%22%7D%2C%7B%22categoryUri%22%3A%22dmoz%2FScience%2FEnvironment%2FSustainability%22%7D%2C%7B%22categoryUri%22%3A%22dmoz%2FScience%2FAgriculture%2FSustainable_Agriculture%22%7D%2C%7B%22categoryUri%22%3A%22dmoz%2FBusiness%2FEnergy%2FRenewable%22%7D%2C%7B%22categoryUri%22%3A%22dmoz%2FScience%2FEnvironment%2FBiodiversity%22%7D%2C%7B%22categoryUri%22%3A%22dmoz%2FHealth%2FAnimal%2FWildlife%22%7D%2C%7B%22categoryUri%22%3A%22dmoz%2FScience%2FEnvironment%2FClimate_Change%22%7D%2C%7B%22categoryUri%22%3A%22dmoz%2FBusiness%2FEnvironment%2FConferences%22%7D%5D%7D%2C%7B%22locationUri%22%3A%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2F" + city.charAt(0).toUpperCase() + city.slice(1) + "%22%7D%5D%7D%2C%22%24filter%22%3A%7B%22forceMaxDataTimeWindow%22%3A%2231%22%2C%22isDuplicate%22%3A%22skipDuplicates%22%7D%7D&resultType=articles&articlesSortBy=date&apiKey=414197e9-bf3c-4d3c-a7ab-387b544c81d0")
                .then((resp) => { return resp.json() })
                .then((data) => {
                    
                    val = data.articles.results.map(n => {
                        return {
                            uri: n.uri,
                            title: n.title,
                            body: n.body,

                            url: n.url,
                            source: n.source.uri,
                            image: n.image,
                        }
                    })

                    this.setState({ items: val })

                    console.log(data);
                });
            prevCity = this.state.loc
        } else {
            this.setState({ items: val })
        } */
    }

    componentDidMount() {
        this.newsBallon(this.state.loc);
        prevCity = this.state.loc;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.locale !== this.props.locale) {
            this.setState({ items: null });
            this.newsBallon(this.props.locale);
        }
    }

    /* newsBallon(city) {
        if (city != prevCity) {
            fetch("https://newsapi.org/v2/everything?q=" + city + " &searchIn=title" + "&sortBy=relevancy" + "&pageSize=10" + "&language=pt" + "&apiKey=cd3417de6c7b4ae38a0cff0124696c5d")

                .then((resp) => { return resp.json() })
                .then((data) => {
                    val = data.articles.results

                    this.setState({
                        items: val.map(n => {
                            return {
                                uri: n.uri,
                                title: n.title,
                                body: n.description,

                                url: n.url,
                                source: n.source.name,
                                image: n.urlToImage,
                            }
                        })
                    })

                    console.log(data)
                })
            prevCity = this.state.loc
        } else {
            this.setState({ items: val })
        }
    } */

    loadnews() {
        if (this.state.items != null) {
            return this.state.items.map((item, i) => (
                <Noticia key={i} item={item} />
            ));
        }
    }

    render() {
        return (
            <div>
                <h2 id="noticiasTitulo">Notícias</h2>

                {this.loadnews()}
            </div>
        );
    }
}

export default GridNoticia;
