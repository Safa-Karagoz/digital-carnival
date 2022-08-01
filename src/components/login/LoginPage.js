import React from 'react'
import '../../css/Login.css'
import LoginButton from './LoginButton'


const LoginPage = () => {
  return (
    <div className='container'>
      <h1>Welcome to the Digital Carnival</h1>
      <h3>Produced by Mr. Lang's Digital Design and Media</h3>
      <LoginButton />
    </div>
  )
}

export default LoginPage