import { useContext, useState } from "react";
import { KarzinkaContext } from "../context/karzinkacontext";
import { Link } from "react-router-dom";
import like from "../assets/like.png";

function Karzinka() {
  const { basketData, onDelet } = useContext(KarzinkaContext);
  const [counter, setCounter] = useState(1)

  

  const decrement = () => {
    if(counter > 0){
      setCounter(counter-1)
    }
  }
  return (
    <div className="karzinka_menu">
      {basketData.length === 0 ? (
        <div className="karzinka_cont">
          <img
            src="https://idea.uz/_next/image?url=%2Fimg%2Fothers%2Fbasket-empty.png&w=1920&q=75"
            alt=""
          />

          <b>Savatchada hozircha hech narsa yoʻq</b>

          <p>
            Siz xaridni asosiy sahifadan boshlashingiz yoki qidiruvdan
            foydalanishingiz mumkin
          </p>

          <Link to={"/"}>
            <button className="karzinka_cont_btn">Bosh sahifaga o'tish</button>
          </Link>
        </div>
      ) : (
        <div>
          {basketData.map((item) => (
            
            <div className="karzinka" key={item.id}>
              <div className="karzinka2">
                <div>
                  <img src={item.img} alt="" />
                  <img src={item.thumbnail} alt="" />
                </div>

                <div className="navigation_text">
                  <div className="karzinka_text">
                    <span> {parseInt(item.price) * counter} so'm</span>

                    <button>to'liq to'lov</button>
                  </div>
                  <b>{item.sum} so'mdan</b>
                  <h3>{item.desc}</h3>
                </div>
              </div>

              <div className="karzinka_menu2">
                <div className="karzinka_leng">
                  <button onClick={()=>setCounter(counter+1)}>+</button>
                  <span>{counter}</span>
                  <button onClick={decrement}>-</button>
                </div>

                <div className="karzinka2">
                  <button onClick={()=>onDelet(item.id)}>
                    <img
                      width={"100px"}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8t9tVwlyQ6JPDfVbjc1zHadYmgruMGd1DH0DkYcPfpgR7UZlDPN9ZZMLaxjvxs1yLBuI&usqp=CAU"
                      alt=""
                    />
                  </button>

                  <button>
                    <img width={"30px"} src={like} alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Karzinka;
