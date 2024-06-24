// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import datosini from "../../datos";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

const Carousel = () => {
    return (
      <div className="carousel-container">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000 }}
          zoom={{ maxRatio: 2 }}  // Configura el zoom con una relación máxima
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {datosini.map(evento =>
            <SwiperSlide key={evento.id} zoom>
              <div className="swiper-zoom-container">
                <img className="image__imgcar" src={process.env.PUBLIC_URL + `/imagenes/imginicial/${evento.image}`} alt="img" />
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    );
  };
  
  export default Carousel;