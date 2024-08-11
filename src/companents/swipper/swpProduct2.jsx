import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";



import { Navigation, FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import { Productcontext } from "../../context/likeContext";
import { KarzinkaContext } from "../../context/karzinkacontext";
import { useContext } from "react";
import { TanlanganContext } from "../../context/tanlanganContext";

export default function SwipProduct() {
   const { swproduct2 } = useContext(Productcontext);
  const { addBasket } = useContext(KarzinkaContext);
  const { addlike } = useContext(TanlanganContext)
  const onAdd = (item) => {
    addBasket(item);
  };

  const onLike = (item) => {
    addlike(item);
  };

  return (
    <div className="swiper">
      <div className="swporoduct_text">
        <h1 className="bg-red-500">Sotuvlar xiti</h1>

        <Link  to={"xit1"} className="swporoduct_text_link">
          Hammasini Ko'rsatish{" "}
        </Link>
      </div>

      <div className='top'>
        <>
          <Swiper
           
           slidesPerView={5}
            spaceBetween={50}
            navigation={true}
       
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              323: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              
              1213: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1240: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              
              1250: {
                slidesPerView: 4,
                spaceBetween: 55,
              },
            }}
            modules={[FreeMode, Navigation]}
            className="mySwiper"
          >
            <div className="swp_menu1">
              {swproduct2.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="navigation">
                    <button onClick={() => onLike(item)}>
                      <img 
                        className="swp_menu_icon"
                        width={"20px"}
                        src={
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtl3RgrxYggPkiFbxvoS7529C9386dwAzAAA&s"
                        }
                        alt=""
                      />
                    </button>

                    <Link to={`/product/${item.id}`}>
                      <div>
                        <img  src={item.img} alt="" />
                      </div>

                      <div className="navigation_text">
                        <span>{item.price} so'm</span> <br />
                        <b>{item.sum} so'mdan</b>
                        <h3>{item.desc}</h3>
                      </div>
                    </Link>

                    <div className="log_navigation">
                      <button className="log_navigation_btn1">
                        Hozirni ozida harid qilish
                      </button>
                      <button
                        onClick={() => onAdd(item)}
                        className="log_navigation_btn2"
                      >
                        <img
                          width={"40px"}
                          src={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-TE6f9ks8n5GKP4zIk_4KmIZhz89LOKnltrbR97b6qNxtKYx0L_NSVrbQPYfUgI4yYk&usqp=CAU"
                          }
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </>
      </div>
    </div>
  );
}

