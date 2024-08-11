
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';


// import required modules
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';


function Carusel2 () {
  return(
    <div>
       <>
      <Swiper
        direction={'vertical'}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='carusel2_menu'>
            <b>Odamlar kopincha qidirishadi</b> <br />
    
            <div className='carusel2_menu_text'>
            <a href="#">Холодильники Ferre</a> <hr />
            <a href="#">Konditsionerlar Avalon</a> <hr />
            <a href="#">Sovutgichlar Shivaki</a> <hr />
            <a href="#">Стиральные машины Hansa</a> <hr />
            <a href="#">Sovutgichlar Indesit</a> <hr />
            <a href="#">Sovutgichlar BEKO</a> <hr />
            <a href="#">Sovutgichlar Artel</a> <hr />
            <a href="#">Sovutgichlar LG</a> <hr />
            <a href="#">Kir yuvish mashinalari Premier</a> <hr />
            </div>
  
          </div>
          
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  )
}

export default Carusel2