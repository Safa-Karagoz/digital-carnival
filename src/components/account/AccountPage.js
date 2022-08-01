import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton'
import RouterBack from '../RouterBack'
import '../../css/AccountPage.css'
import userEvent from '@testing-library/user-event';


const AccountPage = () => {
  const { user, isAuthenticated } = useAuth0(); 
  return (
    isAuthenticated && (
      <>
        <div className='header'>
            <RouterBack />
            <h1 className='profile-header'>Profile</h1>
        </div>
        <div>
          <img src={user.picture}></img>
          <p>{user.name}</p>
          <p>Signed in as {user.email}</p>
        </div>
        <div>
            <LogoutButton />
        </div>
    </>
    )
  )
}

export default AccountPage