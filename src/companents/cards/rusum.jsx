import React from "react";
import Input from "./input";

export default function Rusum({ handlChenge }) {
  return (
    <div>
      <div>
        <div className="rusum_menu">
        <h2>Rusum</h2>
          {/* <label>
            <input onChange={handlChenge} type="radio" value="" name="test" />
            <span></span>All
          </label> */}

          <Input
            handlChenge={handlChenge}
            value="Apple"
            title="Apple"
            name="test"
          />

          <Input
            handlChenge={handlChenge}
            value="Samsung"
            title="Samsung"
            name="test"
          />

          <Input
            handlChenge={handlChenge}
            value="Huawei"
            title="Huawei"
            name="test"
          />

          <Input
            handlChenge={handlChenge}
            value="Xiaomi"
            title="Xiaomi"
            name="test"
          />

          <Input
            handlChenge={handlChenge}
            value="Vivo"
            title="Vivo"
            name="test"
          />

          <Input
            handlChenge={handlChenge}
            value="Honor"
            title="Honor"
            name="test"
          />
        </div>
      </div>
    </div>
  );
}
