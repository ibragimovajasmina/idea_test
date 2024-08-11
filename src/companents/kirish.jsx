import React, { useState } from "react";
import LogAuth from "./Auth/logAuth";
import RegisterAuth from "./Auth/registerAuth";

export default function Kirish() {
    const [tab, setTab] = useState("login")
  return (
    <div className="kirish_menu1">
      <div className="kirish_menu2">
        <b className="kirish_text">Kirish</b>
        <div className="log_reg_menu">
            <button onClick={()=>setTab('login')} className=" log_reg">login</button>
            <button onClick={()=>setTab('register')} className="log_reg">register</button>
        </div>
        {tab == "login" && <LogAuth/>}

        {tab == "register" && <RegisterAuth/>}
      </div>
    </div>
  );
}
