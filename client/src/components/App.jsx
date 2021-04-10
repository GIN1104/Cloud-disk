import React, { useEffect } from 'react'
import Navbar from './navbar/Navbar'
import './app.css'
import { BrowserRouter, Route,  Switch } from "react-router-dom"
import Registration from "./authorization/Registration"
import Login from './authorization/Login'
import { useSelector, useDispatch } from 'react-redux'
import  { auth } from  '../actions/user'


function App() {
   const isAuth = useSelector( state => state.user.isAuth )
   const dispatch = useDispatch()

   useEffect(() => { dispatch(auth()) }, [dispatch])

  return (
    <BrowserRouter>
        <div className='app'>
           <Navbar />
           <div className="warp">
             {!isAuth && 
                      <Switch>
                      <Route path="/registration" component={Registration} />
                      <Route path="/login" component={Login} />
                    </Switch>
             }
  
           </div>
       </div>
    </BrowserRouter>

  );
}

export default App;
