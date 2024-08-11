import axios from "axios";
import React, { useState } from "react";
import {Navigate} from "react-router-dom"


// http://localhost:500/auth/register

const RegisterAuth = () => {
    const [username, setUsername] = useState("")
    const [pasword, setPasword] = useState("")
    const [errormsg, setErrorMsg] = useState('')
    const [status, setStatus] = useState (0)

    const postData = async ()=>{
        try{
            const res = await axios.post("http://localhost:5000/auth/register",{ 
                username:username,
                password:pasword,
            })

            setStatus(res.status);
        }catch (error){
            setErrorMsg(error?.response?.data?.message);
        }
    }
    const onRegister = () => {
        postData()
    }
  return (
    <div>
      <div>
        <div className="log">

          {status === 200 &&  <Navigate to={'/LogAuth'}/>}
          <input
            type="text"
            placeholder="ism"
            onChange={e=>setUsername(e.target.value)}
          />
          <input 
           type="password"
           placeholder="parol" 
           onChange={e=>setPasword(e.target.value)}/>
           <p>{errormsg}</p>
          <button onClick={onRegister}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterAuth;
