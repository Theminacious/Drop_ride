import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'  // Changed 'Home' to 'home' to match the file name exactly
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/userProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
        <Route path='/home' element={
         < UserProtectedWrapper>
         <Home/>
         </UserProtectedWrapper>
        }/>

        <Route path='/user/logout' element={<UserProtectedWrapper>
          <UserLogout/>
        </UserProtectedWrapper>}
        />

          <Route path='/captain-home' element={
            <CaptainProtectedWrapper>
              <CaptainHome/>
            </CaptainProtectedWrapper>
          }>
          </Route>


      </Routes>
    </div>
  )
}

export default App