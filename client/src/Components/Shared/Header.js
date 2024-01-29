import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from "@iconify/react";
import logo from '../../Logo/Adust.PNG'

const Header = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage]=useState(false)
  const [notification, setNotification]=useState(false)






  return (
    <div className='bg-white sticky top-0 z-50 relative'>
      <header className={`grid grid-cols-12 z-50 justify-between w-[100%] md:w-[95%] m-auto p-4 items-center sticky top-0`}>

        <div className='col-span-7 md:col-span-4 mx-2'>
          <div className='flex'>
            <NavLink to="/home" className='text-2xl font-bold md:text-3xl py-2'>Doodle
              {/* <img className='h-10 w-10' src={logo} alt='' /> */}
            </NavLink>
            
          </div>
        </div>



        <div className='col-span-4 hidden md:block md:m-auto'>
          <NavLink  className='mx-2 text-md md:text-xl font-bold hover:text-blue-500 focus:text-red-500' to="/home">Home</NavLink>
          <NavLink  className='mx-2 text-md md:text-xl font-bold hover:text-blue-500 focus:text-red-500' to="/event">Blog</NavLink>
        </div>



        <div className='col-span-5 md:col-span-4 float-right'>
          <div className="flex text-sm items-center relative z-40 float-right">
            <div className='relative'>
              <img alt='qwer' className='h-8 ml-1 w-8 rounded-full cursor-pointer' src='https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/366606662_2101705720162212_3015616699096048132_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHGJpN8bLMrQrt6bgUv8p9fU44vG6XhW69Tji8bpeFbr9BvArv-okFiSJgQzBTQuyHgRPgNArqtOBr0f5KYGe07&_nc_ohc=lmCopI_p14wAX95p9xd&_nc_ht=scontent.fdac135-1.fna&oh=00_AfBIcD_oGqmNSYUCoYOCXIlWSWEHYiX3TxrJ3mGPZlRfeQ&oe=65B9791E' />
              <button onClick={()=>{setNotification(false); setMessage(false);setOpen(!open)}} className="flex items-center space-x-1">
                <Icon icon="ep:arrow-down" className={`transition-transform absolute z-50 bg-gray-300 border-2 border-white rounded-full right-0 duration-300 ${open ? "rotate-180" : "rotate-0"}`} />
              </button>
            </div>
          </div>

          {/* Profile Edit Option */}
          <div className='relative shadow-lg rounded bg-white'>
            <div className={`absolute ${open ? "block" : "hidden"} mt-12 bg-white shadow-ld right-0  px-0 w-[250px]  md:px-2 py-1 space-y-1 rounded animation-open transition-all duration-300`}>
              <div className='flex shadow rounded-md p-2'>
              <img alt='qwer' className='h-8 ml-1 w-8 mr-1 rounded-full' src='https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/366606662_2101705720162212_3015616699096048132_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHGJpN8bLMrQrt6bgUv8p9fU44vG6XhW69Tji8bpeFbr9BvArv-okFiSJgQzBTQuyHgRPgNArqtOBr0f5KYGe07&_nc_ohc=lmCopI_p14wAX95p9xd&_nc_ht=scontent.fdac135-1.fna&oh=00_AfBIcD_oGqmNSYUCoYOCXIlWSWEHYiX3TxrJ3mGPZlRfeQ&oe=65B9791E' />
              <NavLink className="font-semibold p-1">Mehedi Hasan</NavLink>
              </div>
              <ul >
                <li className='hover:translate-x-1 duration-300 hover:text-red-500'><NavLink to='/profile' className='font-bold px-1 text-red-500'>Profile</NavLink></li>
                <li className='hover:translate-x-1 duration-300 hover:text-red-500'><button className='font-bold px-1 text-red-500'>About</button></li>
                <li className='hover:translate-x-1 duration-300 hover:text-red-500'><button className='font-bold px-1 text-red-500'>LogOut</button></li>
              </ul>
            </div>

          </div>
        </div>


      </header>



    </div>
  );
};

export default Header;