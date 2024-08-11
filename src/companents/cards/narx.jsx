import React from "react";
import Input from "./input";

export default function Narx({handlChenge}) {
  return (
    <div>
      <div className="rusum_menu">
      <h2>Narx</h2>
        {/* <label>
          <input onChange={handlChenge} type="radio" value="" name="test2" />
          <span></span>All
        </label> */}

        <Input handlChenge={handlChenge} value="1000" title="1000-1500" name="test2" />

        <Input handlChenge={handlChenge} value="1500" title="1500-2000" name="test2" />

        <Input handlChenge={handlChenge} value="2000" title="2000-1500" name="test2" />

        <Input handlChenge={handlChenge} value="2500" title="2000-2500" name="test2" />

        <Input handlChenge={handlChenge} value="3000" title="2500-3000" name="test2" />

        <Input handlChenge={handlChenge} value="3500" title="3000-3500" name="test2" />
      </div>
    </div>
  );
}
