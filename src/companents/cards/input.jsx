import React from 'react'

export default function Input({handlChenge, value, name, color, title}) {
  return (
    <label className="rusum">
        <input onChange={handlChenge} type="radio" value={value} name={name} />
        <span className="rusum_span" style={{backgroundColor:color}}></span>
        {title}
    </label>
  )
}
