import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgSwipe from '../assets/ong1.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

        <SwiperSlide>
        <div>
          <img src="https://s3.amazonaws.com//beta-img.b2bstack.net/uploads/production/provider/image/42/thumb_zipline.png" alt="IMG1" />
          <p></p>
        </div>      
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PUGY8UdyRSmBpnVKl8Q8cwZuCTr3V6swYwcyybBIKw&s" alt="IMG2" />
          <p></p>
        </div>      
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img src="https://www.drkfoundation.org/wp-content/uploads/2016/09/LavaMae-X-logo.jpg" alt="IMG3" />
          <p></p>
        </div>      
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img src="https://s3.amazonaws.com/risu-static/instituicoes/logo/abrale.jpg" alt="IMG4" />
          <p></p>
        </div>      
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img src="https://s3.amazonaws.com/risu-static/instituicoes/logo/isai.jpg" alt="IMG5" />
          <p></p>
        </div>      
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <img src="https://s3.amazonaws.com/risu-static/instituicoes/logo/horasdavida.jpg" alt="IMG5" />
          <p></p>
        </div>      
        </SwiperSlide>
        
      ...
    </Swiper>
  );
};