import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FriendListLayout from './Layouts/FriendListLayout'
import FriendChat from './Components/FriendChat'
import MainLayout from './Layouts/MainLayout'
import Error from './Screens/Error'
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp'
import Home from './Screens/Home'
import axios from 'axios'
import Cookies from 'js-cookie'


const App = () => {
  const [AUTHKEY, SETAUTHKEY] = React.useState(-1)
  
  let key = Cookies.get('AUTHKEY')


  function SetKey(key){
    SETAUTHKEY(key)
    Cookies.set('AUTHKEY',key)
  }

  const [user, setUser] = React.useState({
    username:"",
  })

  const auth = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth',{
        authkey: key
      })
      if (response.data.success) { 
        setUser(response.data.result)
      }
      else {
      }

    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {auth() } ,[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} >
            <Route path="" element={<Home Key = {key}/>}/>
            <Route path="friends" element={<FriendListLayout user_id = {key} setKey={(key) => { SetKey(key) }}/>}>
                <Route path=":id" element={<FriendChat user_id = {key} />}/>
              </Route>
            <Route path="signin" element={<SignIn Key={key} setKey={(key) => { SetKey(key) }} />}/>
            <Route path="signup" element={<SignUp Key={key} setKey={(key) => { SetKey(key) }} />}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App