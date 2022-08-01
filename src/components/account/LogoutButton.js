import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import '../../css/AccountPage.css'

const LoginButton = () => {
  const { logout } = useAuth0(); 
  const redirect = process.env.REACT_APP_AUTH0_LOGOUT_RETURNTO;
  return (
    <button 
      onClick={() => logout({returnTo: redirect})}
      className='logout-btn'>
        Log Out
    </button>
  )
}

export default LoginButton