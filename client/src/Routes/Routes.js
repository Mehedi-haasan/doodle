import React, { useEffect } from 'react'
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from '../Components/Shared/Header';
import Footer from '../Components/Shared/Footer';
import Login from '../Login/Login';
import ForgotPassword from "../Login/ForgotPassword";
import Profile from "../Components/Profile/Profile";
import Registration from "../Login/Registration";
import CreateBlog from '../Components/Blogs/CreateBlog';
import Home from '../Components/Home/Home';
import BlogDetails from '../Components/Blogs/BlogDetails';
import FavoriteBlog  from '../Components/Favorite/FavoriteBlog';



const Router = () => {
    const [isLogged, setIsLogged]=useState(false);

    useEffect(()=>{
      const value=JSON.parse(localStorage.getItem('List'));
      if(value===""){
        setIsLogged(false);
      }
      else{
        setIsLogged(true);
      }
    },[])

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
           <Route path='/profile' element={ <Profile/> }/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/event' element={<CreateBlog/>}/>
           <Route path='/blog/details/:id' element={<BlogDetails/>}/>
           <Route path='/favorite/blog' element={<FavoriteBlog/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/registration' element={<Registration/>}/>
           <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Router
