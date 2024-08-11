import React, { useEffect, useRef, useState } from 'react';



import axios from 'axios';







export default function SwpTitle1() {
    const [swproduct, setSwProduct] = useState ([])
   
    

    

    // onClick={changeshow} className=" bg-red-500 p-2 rounded-md"

    

    

    useEffect(() => {
        getData();
    }, [])

    const getData = () =>{
        axios
        .get("https://ee013ca3e182458e.mokky.dev/idea_text1")
        .then((res) => {
            setSwProduct(res.data)
        })
        .catch((e) => {
            console.log(e);
        })
    }



return (        
            <div className='swpTitle'>
                {swproduct.map((item) => (
                   
                    <div className='swpTitle_menu'>
                        <div>
                            <img src={item.img} alt="" />
                        </div>
                           
                            <div className='navigation_text'>
                                    <span>{item.price} so'm</span> <br />
                                    
                                    <b>{item.sum} so'mdan</b>
                                    
        
                                    <h3>{item.desc}</h3>
                            </div>
                           

                        <div className='log_navigation'>
                                <button className='log_navigation_btn1'>Hozirni ozida harid qilish</button>
                                <button className='log_navigation_btn2'>X</button>
                        </div>
                
                </div>
            ))}      
    </div>
)
}