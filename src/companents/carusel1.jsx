import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

function Carusel1 () {
    return(
        <div className='swiper_menu'>
        <Swiper navigation={true} 
        pagination={{
          clickable: true,
        }} modules={[Navigation, Pagination]} className="mySwiper">
        <SwiperSlide><img width={"100%"} src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fpromotions%2FJune2024%2FAv3Cj34aHUD0md2Sy0cP.png&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"100%"} src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fpromotions%2FMay2024%2Ft3U1IMGilUnzYYXERkXR.png&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"100%"} src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fpromotions%2FJune2024%2FKS1P2O0bcL5A1l7u2OHb.png&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img width={"100%"} src="https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fpromotions%2FJune2024%2FKrxfu9gNmafzA0ZzVBNG.png&w=1920&q=75" alt="" /></SwiperSlide>
       </Swiper>
       
        </div>
    )
}
export default Carusel1