import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from "@iconify/react";


const Header = () => {
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo]=useState(false)
  const [data, setData]=useState()
  const [message, setMessage]=useState(false)
  const [notification, setNotification]=useState(false)

  const fetchData = async () => {
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:8050/api/get/users`, {
      method: 'GET',
      headers: {
        'authorization': token,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const data = await response.json()
    setData(data.items)
    if(data){
      setUserInfo(true)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])



  return (
    <div className='bg-white bg-[#1E1F1E] text-black sticky top-0 z-50 relative'>
      <header className={`grid grid-cols-12 z-50 justify-between w-[100%] md:w-[95%] m-auto p-4 items-center sticky top-0`}>

        <div className='col-span-7 md:col-span-4 mx-2'>
          <div className='flex'>
            <NavLink to="/home" className='text-2xl font-bold md:text-3xl py-2'>Doodle
              {/* <img className='h-10 w-10' src={logo} alt='' /> */}
            </NavLink>
            
          </div>
        </div>



        <div className='col-span-4 hidden md:block md:m-auto'>
          <NavLink  className='mx-2 text-md md:text-lg font-bold hover:text-blue-500 focus:text-red-500' to="/home">Home</NavLink>
          <NavLink  className='mx-2 text-md md:text-lg font-bold hover:text-blue-500 focus:text-red-500' to="/favorite/blog">FavoriteBlog</NavLink>
          <NavLink  className='mx-2 text-md md:text-lg font-bold hover:text-blue-500 focus:text-red-500' to="/event">CreateBlog</NavLink>
        </div>



        <div className='col-span-5 md:col-span-4 float-right'>
          <div className="flex text-sm items-center relative z-40 float-right">
            <div className='relative'>
              {userInfo ? <img alt='qwer' className='h-8 ml-1 w-8 rounded-full cursor-pointer' src={data.image_url} /> : <Icon width="25px" icon="entypo:user"/>}
              <button onClick={()=>{setNotification(false); setMessage(false);setOpen(!open)}} className="flex items-center space-x-1">
                <Icon icon="ep:arrow-down" className={`transition-transform absolute z-50 bg-[#F18757] border-2 border-white rounded-full right-0 duration-300 ${open ? "rotate-180" : "rotate-0"}`} />
              </button>
            </div>
          </div>

          {/* Profile Edit Option */}
           <div className='relative shadow-lg rounded bg-[#F0F2F5]'>
          <div className={`absolute ${open ? "block" : "hidden"} mt-12 bg-[#F0F2F5] shadow-ld right-0  p-3 w-[250px] space-y-1 rounded animation-open transition-all duration-300`}>
            {
              userInfo ? <div className='flex shadow bg-white rounded-md p-2'>
              <img alt='qwer' className='h-8 ml-1 w-8 mr-1 rounded-full' src={data.image_url} />
              <NavLink to='/profile' onClick={()=>{setOpen(!open)}} className="font-semibold text-black p-1">{data.first_name} {data.last_name}</NavLink>
              </div> : <span/>
            }
            <ul >
              <li className='hover:translate-x-1 duration-300 '><NavLink onClick={()=>{setOpen(!open)}} to='/profile' className='font-semibold text-black px-1 '>Profile</NavLink></li>
              <li className='hover:translate-x-1 duration-300 '><NavLink onClick={()=>{setOpen(!open)}} to="/login" className='font-semibold px-1 text-black '>Login</NavLink></li>
              <li className='hover:translate-x-1 duration-300 '><NavLink onClick={()=>{setOpen(!open)}} to="/registration" className='font-semibold px-1 text-black'>Registration</NavLink></li>
            </ul>
          </div>

        </div> 
        </div>


      </header>



    </div>
  );
};

export default Header;