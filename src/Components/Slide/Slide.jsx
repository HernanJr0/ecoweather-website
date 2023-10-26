import { Pagination, A11y, EffectCreative } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import Atalho from '../Atalho/Atalho.jsx'
import AtalhoPrev from '../AtalhoPrev/AtalhoPrev.jsx'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

import './Slide.css';

const swiper = () => {
    return (
        <Swiper
            id='widget-swiper'
            // install Swiper modules
            modules={[Pagination, A11y, EffectCreative]}
            pagination={{
                clickable: true
            }}
            loop={true}
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={15}
            parallax={true}
            /*Swiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}*/

            effect={'creative'}
            /*cardsEffect={{
                slideShadows: true,
                perSlideOffset: 8,
                perSlideRotate: 0
            }}*/
            creativeEffect={{
                prev: {
                    translate: [-250, 0, -400],
                },
                next: {
                    translate: [250, 0, -400],
                },
            }}

        >

            <SwiperSlide>
                <AtalhoPrev />
            </SwiperSlide>

            <SwiperSlide>
                <Atalho
                    titulo={'Conteudos'}
                    descricao={'Acesse aqui conteúdos sobre o meio ambiente'}
                    imagem={'https://cdn-icons-png.flaticon.com/512/361/361892.png'}
                    link={'/home/dicas'}
                />
            </SwiperSlide>
            
            <SwiperSlide>
                <Atalho
                    titulo={'Dicas'}
                    descricao={'Veja aqui dicas sobre o meio ambiente'}
                    imagem={'https://cdn-icons-png.flaticon.com/512/361/361892.png'}
                    link={'/home/dicas'}
                />
                {/* arrumar paths */}
            </SwiperSlide>
            {/* 
            <SwiperSlide>
                <Atalho
                    titulo={'Galeria'}
                    descricao={'Um acervo de fotos que mostram a beleza da nossa natureza'}
                    imagem={'https://cdn-icons-png.flaticon.com/512/2659/2659360.png'}
                    link={'/galeria'}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Atalho
                    titulo={'Agenda'}
                    descricao={'Planeje seus eventos, atividade ou lembretes em um só lugar'}
                    imagem={'https://cdn-icons-png.flaticon.com/512/363/363485.png'}
                    link={''}
                />
            </SwiperSlide> */}

        </Swiper >
    )

}
export default swiper
