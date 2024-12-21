import React  from 'react'
import { useNavigate } from 'react-router-dom'


const UserProtectedWrapper = ({children}) => {
    const token = localStorage.getItem('token')
    // const {token} = useContext(UserDataContext)
    const navigate = useNavigate()

    if(!token){
        navigate('/login')
    }

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectedWrapper