import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContex } from '../context/AuthContex'

const AuthLayout = () => {

  const {isAuthenticated} = React.useContext(AuthContex)

  return isAuthenticated ? (
    <Navigate to='/dashboard'/>
  ) : (
    <div>
      <Outlet/>
    </div>
  )
}

export default AuthLayout