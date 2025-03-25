import React from 'react'
import { useLocation } from 'react-router-dom';
import NotificationBell from '../assets/Notification';
import PlusIcon from '../assets/Plus';

export default function Navbar() {
    const location = useLocation();  

  return (
    <div>
      <div className='flex w-full  bg-[#F2F2F2]'>
            <div className='flex w-full h-[25%]flex-row justify-between items-center'>
                {
                    location.pathname == "/dashboard" ? <p className='text-3xl font-light'>Welcome Back,
                <span className='font-bold'> Balaram</span></p>
                : <div></div>
                }
              
              <div className='flex gap-4 items-center'>
                <div className='bg-[#FFFFFF] p-3 h-fit rounded-lg'>
                  <NotificationBell showNotification/>
                </div>
                <div className='bg-[#282828]   p-4 flex gap-1 rounded-xl items-center'>
                  <PlusIcon />
                  <span className='text-[#C7FF24] align-middle'>New Order</span>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
