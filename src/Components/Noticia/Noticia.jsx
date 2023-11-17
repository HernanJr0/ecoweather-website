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
            source: this.props.item.source,

            fav: false

        }
        /* this.state.handleFav = this.handleFav.bind(this);*/
        // this.state.oi = this.oi.bind(this)
    }

    /* componentDidMount(){
        this.oi()
    }

    oi() {
        const au = document.getElementsByClassName("noticiaIMG")
        if (au.src == undefined) {
            au.src = 'https://tinyurl.com/yc2ms4ts'
        }
    } */

    render() {
        return (
            <div id='noticiaItemCont'>
                <hr />
                <a href={this.state.url} target='_blank' rel='noreferrer'>
                    <div className='noticia'>

                        <div id="bookmarkCont">
                            <Mark news={this.state} />
                        </div>

                        <img className='noticiaImg' src={this.state.image || 'https://tinyurl.com/yc2ms4ts'} alt={this.state.title} />

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

        const checkCity = () => {
            const a = isNewFav(props.news.uri)
            setFav(a)
        }
        checkCity()
    }, [props.news.uri, signed])

    const handleFav = (e) => {
        if (signed) {

            setFav(e.target.checked);

            if (e.target.checked) {
                //registra
                addNews(props.news);
            } else {
                //remove
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