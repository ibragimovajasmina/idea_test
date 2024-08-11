import axios from 'axios'
import React, { useState } from 'react'

const LogAuth = () => {
  const [username, setUsername] = useState('')
  const [password, setPasword] = useState('')
  const [error, setError] = useState("")
  const [status, setStatus] = useState(0)

  const loginUser = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        username:username,
        password:password,
      })      
      console.log(res.data.token);
      if(res.status === 200){
        setStatus(res.status)
        localStorage.setItem('token',JSON.stringify(res.data.token))
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  const onLogin = () =>{
    loginUser()
  }
  return (
    <div>
      <div className='log'>
        {/* {status} */}
        <input onChange={e=>setUsername(e.target.value)}  type="text" placeholder='ism'  />
        <input onChange={e=>setPasword(e.target.value)} type="password" placeholder='parol' />

        {error}
        <button onClick={onLogin}>Kirish</button>
      </div>
    </div>
  )
}

export default LogAuth
