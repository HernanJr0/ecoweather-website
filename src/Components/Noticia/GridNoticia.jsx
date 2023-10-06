import Noticia from '../../Components/Noticia/Noticia.jsx';
import '../../Components/Noticia/GridNoticia.css'
import React, { Component } from 'react'

class GridNoticia extends Component {

    constructor(props) {
        super(props)

        this.state = {

            loc: this.props.locale,

            items: []
        }

        this.newsBallon = this.newsBallon.bind(this)
        this.loadnews = this.loadnews.bind(this)
    }

    componentDidMount() {
        this.newsBallon(this.state.loc)
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.locale !== this.props.locale) {
            this.newsBallon(this.props.locale)
        }
    }

    newsBallon(city) {
        fetch("https://newsapi.org/v2/everything?q=" + city + " &searchIn=title" + "&sortBy=relevancy" + "&pageSize=10" + "&language=pt" + "&apiKey=cd3417de6c7b4ae38a0cff0124696c5d")
            .then((resp) => { return resp.json() })
            .then((data) => {
                this.setState({ items: data.articles })
                console.log(data)
            })
    }

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