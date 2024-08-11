import React from "react";
import Input from "./input";

export default function Rang({ handlChenge }) {
  return (
    <div>
  
      <div className="rusum_menu">
      <h2>Rang</h2>
        {/* <label>
          <input onChange={handlChenge} type="radio" value="" name="test3" />
          <span></span>All
        </label> */}

        <Input
          handlChenge={handlChenge}
          value="black"
          title="Qora"
          name="test3"
          color="black"
        />

        <Input
          handlChenge={handlChenge}
          value="oq"
          title="Oq"
          name="test3"
          color="oq"
        />

        <Input
          handlChenge={handlChenge}
          value="sariq"
          title="Sariq"
          name="test3"
          color="sariq"
        />

        <Input
          handlChenge={handlChenge}
          value="ko'k"
          title="Ko'k"
          name="test3"
          color="ko'k"
        />

        <Input
          handlChenge={handlChenge}
          value="yashil"
          title="Yashil"
          name="test3"
          color="yashil"
        />
      </div>
    </div>
  );
}
