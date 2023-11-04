import React, { Component } from 'react';
import './Noticia.css'

import { Checkbox } from "@mui/material";
import { red } from "@mui/material/colors";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import { AuthGoogleContext } from "../../contexts/authGoogle";

class Noticia extends Component {
    static contextType = AuthGoogleContext;

    constructor(props) {
        super(props)

        this.state = {
            
            uri: this.props.item.uri,
            title: this.props.item.title,
            body: this.props.item.body,

            url: this.props.item.url,
            source: this.props.source,
            image: this.props.item.image,
            
            /* uri: this.props.uri,
            titulo: this.props.titulo,
            descricao: this.props.descricao,

            link: this.props.link,
            fonte: this.props.fonte,
            imagemSrc: this.props.imagemSrc, */
            fav: false
        }
        this.state.handleFav = this.handleFav.bind(this);
        this.state.checkNews = this.checkNews.bind(this)
    }

    handleFav = (name) => (e) => {
        this.setState({ [name]: e.target.checked });

        const { addNews, delNews } = this.context;

        if (e.target.checked) {
            //registra
            addNews(this.state);
        } else {
            //remove
            delNews(this.state);
        }
    };

    async checkNews(d) {
        const { isNewsFav } = this.context;

        if (await isNewsFav(d)) {
            this.setState({ fav: true });
        } else {
            this.setState({ fav: false });
        }
    }

    componentDidMount(){
        this.checkNews(this.state.uri)
    }

    render() {
        return (
            <div>
                <hr />
                <div className='noticiaCont'>
                    <a className='link' href={this.state.url} target='_blank' rel='noreferrer'>
                        <div className='noticia'>

                            <div id="bookmarkCont">
                                <Checkbox
                                    id="bookmarkIcon"
                                    onChange={this.handleFav("fav")}
                                    checked={this.state.fav}
                                    icon={<BookmarkBorderIcon />}
                                    checkedIcon={<BookmarkIcon />}
                                    sx={{
                                        color: red[0],
                                        "&.Mui-checked": {
                                            color: red[400],
                                        },
                                        "& .MuiSvgIcon-root": { fontSize: 30 },
                                    }}
                                />
                            </div>
                            
                            <img className='noticiaImg' src={this.state.image} alt={this.state.title} />

                            <div className='noticiaDesc'>
                                <p className='noticiaCreditos'>
                                    Fonte: {this.state.source}
                                </p>

                                <h2 className='noticiaTitulo'>
                                    {this.state.title}
                                </h2>

                                <p className='noticiaDescricao'>
                                    {this.state.body}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
export default Noticia