import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../src/Components/Shared/Header';
import Footer from '../src//Components/Shared/Footer';
import Login from '../src/Login/Login';
// import ForgotPassword from "../Login/ForgotPassword";
import Profile from "../src/Components/Profile/Profile";
import Registration from "../src/Login/Registration";
import CreateBlog from '../src/Components/Blogs/CreateBlog';
import Home from '../src/Components/Home/Home';
import BlogDetails from '../src/Components/Blogs/BlogDetails';
import FavoriteBlog from '../src/Components/Favorite/FavoriteBlog';






function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/home' element={<Home />} />
        <Route path='/event' element={<CreateBlog />} />
        <Route path='/blog/details/:id' element={<BlogDetails />} />
        <Route path='/favorite/blog' element={<FavoriteBlog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        {/* <Route path='/forgotpassword' element={<ForgotPassword />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
