import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage({setLogin}) {
  const navigate  = useNavigate()
  return (
    <div className='flex flex-col'>
      <input className='m-3' type="email"/>
      <input type="password" />
      <button onClick={
        () => {
          setLogin(true)
          navigate('/dashboard')
        }
        
        }>Login</button>
    </div>
  )
}

export default LoginPage
