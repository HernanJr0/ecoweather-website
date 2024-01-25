import { useState, useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode } from 'swiper/modules';

import { TextField, IconButton, InputAdornment } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

import Noticia from "../../Components/Noticia/Noticia.jsx";

import Fuse from 'fuse.js'
import { useEffect } from "react";

export function MyNews() {
    const { news } = useContext(AuthGoogleContext);

    const [n, setN] = useState(news);
    const [q, setQ] = useState(false)

    function loadNews() {

        if (n) {
            if (n.length > 0) {
                return n.map((news) => {
                    return (
                        <SwiperSlide key={Math.random()} className="horizontal">
                            <Noticia item={q ? news.item : news} />
                        </SwiperSlide>
                    );
                })
            } else {
                return <p id="nenhumaNoticia">Nenhuma noticia encontrada!</p>
            }

        }
        else
            return <p id="nenhumaNoticia">Nenhuma noticia encontrada!</p>
    }

    function pesquisa(e) {

        if (e.key == 'Enter') {
            const ai = e.target.value
            if (ai != '') {
                setQ(true)

                const options = {
                    minCharLength: 2,
                    isCaseSensitive: false,
                    threshold: 0.5,
                    keys: ['title', 'source']
                }
                const fuse = new Fuse(news, options).search(ai)
                setN(fuse)

            } else {
                clear()
            }
        }
    }

    function clear() {
        document.getElementById('srch').value = ''
        setQ(false)
        setN(news)
    }



    return (
        <div>
            <div className="s-header">
                <h2>Notícias Salvas</h2>

                <TextField
                    id="srch"
                    onKeyDown={pesquisa}

                    placeholder="Pesquisar"
                    size="small"

                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end" >
                                <IconButton
                                    onClick={clear}
                                    edge="end"
                                >
                                    <ClearIcon />
                                </IconButton>
                            </InputAdornment>,
                    }}
                />

            </div>

            <Swiper
                id="oi"
                /* freeMode={true} */
                modules={[/* FreeMode, */ Scrollbar]}
                breakpoints={{
                    500: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1280: {
                        slidesPerView: 5,
                    }
                }}
                scrollbar={{
                    draggable: true
                }}
            >
                {loadNews()}

            </Swiper>
        </div>
    )
}

export default MyNews