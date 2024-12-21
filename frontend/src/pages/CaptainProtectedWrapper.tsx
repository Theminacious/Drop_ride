import React, { useContext, useEffect, useState }  from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'




const CaptainProtectedWrapper = ({children}) => {
    const token = localStorage.getItem('token')
    // const {token} = useContext(UserDataContext)
    const navigate = useNavigate()
    const [captain,setCaptain] = useContext(CaptainDataContext)
    const [isLoading,setIsloading] = useState(true)

    useEffect(()=>{
        if(!token){
            navigate('/captain-login')
        }
    },[token])


    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(response=>{
        if(response.status ===200){
            setCaptain(response.data.captain)
            setIsloading(false)
        }
    })
    .catch(err=>{
        console.log(err)
        localStorage.removeItem('token')
        navigate('/captain-login')
    })

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

export default CaptainProtectedWrapper