import axios from 'axios'
import React, { useContext, useEffect, useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'



const UserProtectedWrapper = ({children}) => {
    const token = localStorage.getItem('token')
    const [,setUser] = useContext(UserDataContext)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!token){
            navigate('/login')
            return
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
          headers:{
            Authorization: `Bearer ${token}`}
          }).then((response)=>{
          if(response.status===200){
            setUser(response.data.user)
            setIsLoading(false)
          }
        })
        .catch(err=>{
          console.log(err)
          localStorage.removeItem('token')
          navigate('/login')
      })

    },[token])

  if(isLoading){
      return (
          <div>Loading...</div>
      )
  }

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectedWrapper
