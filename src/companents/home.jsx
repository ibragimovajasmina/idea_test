
import { Link } from "react-router-dom";
import Secwin1 from "./secwin1";
import Secwin2 from "./secwin2";




function Homepage () {
    return(
        <div className="homepage">
            <Link to={"/"} className="homepage">
                <Secwin1/>
                <Secwin2/>
            </Link>
        </div>
    )
}
export default Homepage