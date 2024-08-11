import React, { useEffect,  useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import {Navigation, FreeMode,  } from 'swiper/modules';
import axios from 'axios';



export default function SwipProduct5() {
    const [swproduct, setSwProduct] = useState ([])

    useEffect(() => {
        getData();
    }, [])

    const getData = () =>{
        axios
        .get("https://ee013ca3e182458e.mokky.dev/idea_text5")
        .then((res) => {
            setSwProduct(res.data)
        })
        .catch((e) => {
            console.log(e);
        })
    }



    return (
        <div>
            <div className='swporoduct_text'>
                <h1>Aksiyalar va video-lavhalar</h1>



                <button>Hammasini Ko'rsatish </button>
            </div>
           
          <div >
          <>
          <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        
        modules={[FreeMode, Navigation, ]}
        className="mySwiper"
      >
            
            <div className='swp_menu2'>
                {swproduct.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='swpmenu2_navigation'>
                            <div className='swpmenu2_navigation_menu'>
                            
                                <img src={item.img} alt="" />
                           
                           
                            
                                <h3>{item.title}</h3>

                                <span>{item.desc}</span>
                            
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </div>
            
          </Swiper>
          </>
          </div>
        </div>
)
}