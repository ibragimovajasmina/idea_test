import { Link } from "react-router-dom"
import SwpTitlemenu2 from "../companents/swipper/swpTitle/swpTitlemenu2"
import SwpTitle2 from "../companents/swipper/swpTitle/swpTitle2"







function Xit2 () {
        



    return(
        <div className="xit_2">
            <div className="xit2_kafolat">


                <div className="xit2_kafolat_text">
                    <img src="https://idea.uz/img/icons/shield.svg" alt="" />


                    <h3>Rasmiy kafolat <br />
                        barcha mahsulotlar uchun
                    </h3>
                </div>

                <div className="xit2_kafolat_text">
                    <img src="" alt="" />



                    <h3>
                        O'zbekiston bo'ylab <br />
                        yetkazib berish
                    </h3>
                </div>


                <div className="xit2_kafolat_text">



                    <h3>
                        Eng yaqin do'kondan <br />
                        olib ketish
                    </h3>
                </div>

                <div className="xit2_kafolat_text">



                    <h3>
                        Qulay muddatli to'lov <br />
                        boshlang’ich to'lovsiz
                    </h3>
                </div>
            </div>

            <div className="xit_log">
                <b>SMARTFONLAR</b>
            </div>

            <div className="xit2_menu">


                {/* ................ */}
                <div className="xit2_menu1">
                    <div>
                        <SwpTitlemenu2/>
                    </div>
                </div>




                <div>
                
                    {/* ........... */}

                    <div className="xit2_link">
                        <Link to={"sana"}>sana boyicha</Link>

                        <Link to={"sana"}>narx boyicha</Link>

                        <Link to={"sana"}>ommaboblik boyicha</Link>
                    </div>


                    <div>
                    <SwpTitle2/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Xit2