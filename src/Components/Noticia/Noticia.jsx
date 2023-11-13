import React, { Component } from 'react';
import './Noticia.css'
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { Checkbox } from "@mui/material";
import { red } from "@mui/material/colors";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import { AuthGoogleContext } from "../../contexts/authGoogle";

import { toast } from "react-toastify";

class Noticia extends Component {
    static contextType = AuthGoogleContext;

    constructor(props) {
        super(props)

        this.state = {

            image: this.props.item.image,
            title: this.props.item.title,
            body: this.props.item.body,

            uri: this.props.item.uri,
            url: this.props.item.url,
            source: this.props.source,

            fav: false

        }
        /* this.state.handleFav = this.handleFav.bind(this);
        this.state.checkNews = this.checkNews.bind(this) */
    }

    /* handleFav = (name) => (e) => {
        this.setState({ [name]: e.target.checked });

        const { addNews, delItem } = this.context;

        if (e.target.checked) {
            //registra
            addNews(this.state);
        } else {
            //remove
            delItem("news", this.state.uri);
        }
    }; */

    /* checkNews(d) {
        const { isNewFav } = this.context;

        if (isNewFav(d)) {
            this.setState({ fav: true });
        } else {
            this.setState({ fav: false });
        }
    } */

    componentDidMount() {
        // this.checkNews(this.state.uri)
    }

    render() {
        return (
            <div id='noticiaItemCont'>
                <hr />
                <a href={this.state.url} target='_blank' rel='noreferrer'>
                    <div className='noticia'>

                        <div id="bookmarkCont">
                            <Mark news={this.state} />
                            {/* <Checkbox
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
                            /> */}
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
        )
    }
}


const Mark = (props) => {
    const { signed, isNewFav, addNews, delItem } = useContext(AuthGoogleContext);

    const [fav, setFav] = useState(false)

    useEffect(() => {
        // console.log("ai")
        const checkCity = () => {
            const a = isNewFav(props.news.uri)
            setFav(a)
            console.log(a)
        }
        checkCity()
    }, [props.news.uri, signed])

    const handleFav = (e) => {
        if (signed) {

            setFav(e.target.checked);

            if (e.target.checked) {
                //registra
                toast.info('Notícia salva nos favoritos')
                addNews(props.news);
            } else {
                //remove
                toast.info('Notícia removida dos favoritos')
                delItem("news", props.news.uri);
            }

        } else {
            toast.error("Faça login para realizar esta ação")
            //É necessário logar primeiro
        }
    };

    return (
        <Checkbox
            id="bookmarkIcon"
            onChange={handleFav}
            checked={fav}
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
    )
}


export default Noticia