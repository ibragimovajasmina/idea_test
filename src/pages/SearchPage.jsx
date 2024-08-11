import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { KarzinkaContext } from "../context/karzinkacontext";
import { TanlanganContext } from "../context/tanlanganContext";

export default function SearchPage() {
  const [state, setState] = useState([]);
  const { search } = useLocation({});
  console.log(search);

  const { addBasket } = useContext(KarzinkaContext);
  const { addlike } = useContext(TanlanganContext);
  const onAdd = (item) => {
    addBasket(item);
  };

  const onLike = (item) => {
    addlike(item);
  };

  const localData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/search${search}`
      );
      setState(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localData();
  }, [search]);
  return (
    <div>
      <ul>
        <div className="serach_paje1">
          {state?.map((item) => (
            <div >
              <div className="search_paje2">
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
                  <li className="search_paje_style" key={item.id}>
                    <img src={item.thumbnail} alt="" />

                    <div className="navigation_text">
                      <span>{item.price} so'm</span> <br />
                      <h3>{item.title}</h3>
                    </div>
                  </li>
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
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}
