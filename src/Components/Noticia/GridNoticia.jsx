import Noticia from '../../Components/Noticia/Noticia.jsx';
import '../../Components/Noticia/GridNoticia.css'
import { useState } from "react";

function GridNoticia() {
    const [items, setItems] = useState([])


    window.onload = () => {
        fetch("https://newsapi.org/v2/everything?q=meio-ambiente" + "&searchIn=title" + "&sortBy=relevancy" + "&pageSize=10" + "&language=pt" + "&apiKey=cd3417de6c7b4ae38a0cff0124696c5d")
            .then((resp) => { return resp.json() })
            .then((data) => {
                setItems(data.articles)
                console.log(data)
            })
    };

    return (
        <div>
            <p id='noticiasTitulo'><b>Notícias</b></p>

            {
                items.map((item, i) => (
                    <Noticia key={i} item={item} />
                ))
            }
        </div >
    )
}

export default GridNoticia