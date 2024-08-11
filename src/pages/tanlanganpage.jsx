import { useContext } from "react";
import { TanlanganContext } from "../context/tanlanganContext";
import karzinka from "../assets/basket.png"
import { KarzinkaContext } from "../context/karzinkacontext";
import { Link } from "react-router-dom";

function Tanlangan () {
    const {likeData, setlikeData} = useContext(TanlanganContext)
    const { addBasket } = useContext(KarzinkaContext);

    const onAdd = (item) => {
        addBasket(item);
    };

    const onDelet = (id) => {
      const newLike = likeData.filter(item=>item.id !==id)
      setlikeData(newLike)
    }
    

    return(
        <div className="karzinka_menu">
        {likeData.length === 0? (
        <div className="karzinka_cont">
          <img
            src="https://idea.uz/_next/image?url=%2Fimg%2Fothers%2Fheart-empty.png&w=1920&q=75"
            alt=""
          />

          <b>Tanlanganlarda hoxircha hech narsa yoʻq</b>

          <p>
          Mahsulot kartochkasida joylashgan yurakchani bosib, mahsulotlarni qoʻshishingiz mumkin
          </p>

          <Link to={"/"}>
            <button className="karzinka_cont_btn">Bosh sahifaga o'tish</button>
          </Link>
        </div>
      ) : (
        <div>
          {likeData.map((item) => (
            <div className="karzinka" key={item.id}>
              <div className="karzinka2">
                <div>
                  <img src={item.img} alt="" />
                  <img src={item.thumbnail} alt="" />
                </div>

                <div className="navigation_text">
                  <div className="karzinka_text">
                    <span>{item.price} so'm</span>
                  </div>
                  <b>{item.sum} so'mdan</b>
                  <h3>{item.desc}</h3>
                </div>
              </div>


              <div className="karzinka2">
                <button onClick={()=>onDelet(item.id)}>
                  <img
                    width={"100px"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8t9tVwlyQ6JPDfVbjc1zHadYmgruMGd1DH0DkYcPfpgR7UZlDPN9ZZMLaxjvxs1yLBuI&usqp=CAU"
                    alt=""
                  />
                </button>

                <button onClick={() => onAdd(item)}>
                    <img width={"40px"} src={karzinka} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    )
}

export default Tanlangan