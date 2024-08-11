import rasm from "../assets/idea.png";
import like from "../assets/like.png";
import basket from "../assets/basket.png";
import kirish from "../assets/kirish.png";

import { Link } from "react-router-dom";
import { useState } from "react";


import Search from "./search";


function Header() {
  

  const [state, setState] = useState(true);

  return (
    <div>
      <div className="header">
        <Link to={"/"}>
          <img width={"150px"} src={rasm} alt="" />
        </Link>

        <div>
          <div
            onClick={() => setState(!state)}
            className="bg-yellow-500 transition-all w-[50px] lg:w-[120px] text-15px gap-2 flex items-center rounded-xl"
          >
           <button className="header_btn">Mahsulotlar katalogi</button>
            {state ? (
              <div className="flex flex-col">
                
              </div>
            ) : (
              <div className="katalog_menu">
                <div className="katalog_text">
                  <Link>smartfon</Link>
                  <Link>maishiy texnika</Link>
                  <Link>gozallik soglik</Link>
                  <Link>Noutbook</Link>
                  <Link>gadjetlar</Link>
                  <Link>avto zona</Link>
                  <Link>sport uchun buyurtma</Link>
                  <Link>Tamirlash</Link>
                </div>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => setState(!state)} className="header_btn2">X</button>
          </div>
        </div>

        <Search />

        <div className="header_link">
          <div>
            <Link to={"/tanlangan"} className="header_link_1">
              <img width={"25px"} src={like} alt="" />
              <span>Tanlanganlar</span>
            </Link>
          </div>

          <div>
            <Link to={"/karzinka"} className="header_link_1">
              <img width={"25px"} src={basket} alt="" />
              <span>Savat</span>
            </Link>
          </div>

          <div>
            <Link to={"/kirish"} className="header_link_1">
              <img width={"25px"} src={kirish} alt="" />
              <span>Kirish</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="header_link3">
        <div>
          <Link to={"/tanlangan"} className="header_link_1">
            <img width={"25px"} src={like} alt="" />
            <span>Tanlanganlar</span>
          </Link>
        </div>

        <div>
          <Link to={"/karzinka"} className="header_link_1">
            <img width={"25px"} src={basket} alt="" />
            <span>Savat</span>
          </Link>
        </div>

        <div>
          <Link to={"/kirish"} className="header_link_1">
            <img width={"25px"} src={kirish} alt="" />
            <span>Kirish</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
