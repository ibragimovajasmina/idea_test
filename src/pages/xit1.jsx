import { useState, useEffect } from "react";
import SwipProduct2 from "../companents/swipper/swpProduct2";


const Xit1 = () => {
    const [data, setData] = useState([]);
  
    const url = "https://ee013ca3e182458e.mokky.dev/idea_text1";


    const log = () => {
        if(title===`${id}`){
            item
        }
    }

    const postData = () => {
        fetch(url, {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                title: titleInput,
                desc: descInput,
            }),
        })
        .then((response) => response.json())
        .then((result) => setData([result, ...data]));
    }
    
    

   
    
   
    
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((result) => setData(result));
    }, []);

    return (
       <div>
         <div className="xit">
            <div className="xit_log">
                <b >SOTUVLAR XITI</b>
            </div>
            <div className="xit2">
                {data.map((value) => (
                    <div key={value.id} onClick={log} id="title" className="shadow-md mx-2 w-[200px] p-[40px] text">
                        <div className='xit_menu'>
                            <div>
                                <img width={"300px"} src={value.img} alt="" />
                            </div>
                           
                                <div className='xit_menu_text'>
                                    <span>{value.price} so'm</span> <br />

                                    <b>{value.sum} so'mdan</b>
                            
                                    <h3>{value.desc}</h3>
                                </div>
                           

                            <div className='xit_menu_navigation'>
                                <button className='xit_menu_navigation_btn1'>Hozirni ozida harid qilish</button>
                                <button className='xit_menu_navigation_btn2'>X</button>
                            </div>
                        </div>     
                    </div>                                     
                    
                ))}
            </div>

            
        </div>

            <div className="xit3">
                <div className="xit_log">
                    <b>SIZ UCHUN MAXSUS</b>  
                </div>

               <SwipProduct2/>
            </div>

       </div>
    )
}

export default Xit1;