import { Pagination, A11y, EffectCards } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import Atalho from '../Atalho/Atalho.jsx'
import Previsao from '../Previsao/Previsao.jsx'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

import './swiper.css';

const swiper = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Pagination,A11y, EffectCards]}
            pagination = {{clickable:true}}
            loop={true}
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={1}
            Swiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

            effect={'cards'}
            cardsEffect={{
                slideShadows: false,
                perSlideOffset: 6
            }}
        /* creativeEffect={{
                    prev: {
                        translate: [0, 0, -200],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}  */

        >

            <SwiperSlide>
                <Previsao />
            </SwiperSlide>

            <SwiperSlide>
                <Atalho
                    titulo={'Dicas'}
                    descricao={'Veja aqui dicas de como cuidar do meio ambiente com pequenas ações no dia a dia'}
                    imagem={'https://cdn-icons-png.flaticon.com/512/361/361892.png'}
                    link={'/Dicas'}
                />
            </SwiperSlide>

            <SwiperSlide>
                <Atalho
                    titulo={'Agenda'}
                    descricao={'Planeje seus eventos, atividade ou lembretes em um só lugar'}
                    imagem={'https://cdn-icons-png.flaticon.com/512/363/363485.png'}
                    link={''}
                />
            </SwiperSlide>

        </Swiper >
    )

}
export default swiper
