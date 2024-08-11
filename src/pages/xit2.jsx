import { Link } from "react-router-dom"
import SwpTitle1 from "../companents/swipper/swpTitle/swpTitle1"
import SwpTitlemenu from "../companents/swipper/swpTitle/swpTitlemenu"
// import SwipProduct4 from "../companents/swipper/swpProduct4"






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
                <b>OSHXONA PLITALARI</b>
            </div>

            <div className="xit2_menu">


                {/* ................ */}
                <div className="xit2_menu1">
                    <div>
                        <SwpTitlemenu/>
                    </div>
                </div>




                <div>
                    <div className="xit2_log">
                        <Link to={"xit2_log_gaz"} className="xit2_log_gaz">
                            <h1>gaz plita</h1>


                            <img width={"130px"} src={"https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fcategories%2FFebruary2023%2FOs3HsFIX9Tyfg2L7lSak.png&w=1920&q=75"} alt="" />
                        </Link>

                        <Link to={"xit2_log_gaz"} className="xit2_log_gaz">
                            <h1>gibrit plita</h1>


                            <img width={"150px"} src={"https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fcategories%2FNovember2023%2FNAjZEXEjjLqndECav8oz.png&w=1920&q=75"} alt="" />
                        </Link>

                        <Link to={"xit2_log_gaz"} className="xit2_log_gaz">
                            <h1>elektr plita</h1>


                            <img width={"150px"} src={"https://idea.uz/_next/image?url=https%3A%2F%2Fapi.idea.uz%2Fstorage%2Fcategories%2FMarch2023%2FQgJxo9HjPmawOiIEH8GV.png&w=1920&q=75"} alt="" />
                        </Link>
                    </div>

                    {/* ........... */}

                    <div className="xit2_link">
                        <Link to={"sana"}>sana boyicha</Link>

                        <Link to={"sana"}>narx boyicha</Link>

                        <Link to={"sana"}>ommaboblik boyicha</Link>
                    </div>


                    <div>
                    <SwpTitle1/>
                    </div>


                    {/* <div>
                       <SwipProduct4/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default Xit2