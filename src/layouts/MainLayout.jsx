import React, { useEffect, useState } from 'react'
import { IoLogOut } from 'react-icons/io5';
import { Outlet, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.svg';
import { AiOutlineHome } from "react-icons/ai";
import avatar from '../assets/images/avatar.svg';
import { REMOVE_FROM_LOCALSTORAGE } from '../utils/Helper';
import Button from '../components/Button';
import { BiMenu } from 'react-icons/bi';

const MainLayout = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleShowDown = () => setShowDropdown(!showDropdown);

    const tabs = [
        {
            title:'Dashboard',
            link:'/dashboard',
            icon:AiOutlineHome
        },
        {
            title:'Referrals',
            link:'referrals',
            icon:AiOutlineHome
        },
        {
            title:'Payment',
            link:'payments',
            icon:AiOutlineHome
        },
        {
            title:'Profile',
            link:'profile',
            icon:AiOutlineHome
        },
    ]

    const logout = () => {
        REMOVE_FROM_LOCALSTORAGE('referrer-data');
        REMOVE_FROM_LOCALSTORAGE('referrer-user');
        REMOVE_FROM_LOCALSTORAGE('referrer-token');
        REMOVE_FROM_LOCALSTORAGE('referrer-user_id');
        navigate('/')
    }

        
  useEffect(() => {

    const active_item = window.location.pathname.split("/")[2];
    
    if(active_item == 'dashboard') setActiveTab(0);
    if(active_item == 'referrals') setActiveTab(1);
    if(active_item == 'payments') setActiveTab(2);
    if(active_item == 'profile') setActiveTab(3);

    // setActiveLink(active_item);
    
      
},[window.location.pathname])

  return (
    <div className='px-5 h-screen flex flex-col gap-5 w-full bg-[#f8f8f8]'>
      <header className='flex items-center justify-between gap-5 py-5' >
        <img onClick={() => navigate('/')} className='cursor-pointer w-40' src={logo} alt="logo" />
        <div className="hidden lg:flex gap-5 bg-[#ededed] rounded-3xl">
            {
                tabs.map((item,idx) => (
                    <button onClick={() => {
                        navigate(item.link);
                        setActiveTab(idx);
                    }} key={idx} className={`flex items-center gap-2 px-3
                    ${activeTab == idx && 'text-white bg-primary !px-10 py-3 rounded-3xl'}`} >
                        { activeTab == idx ? <item.icon /> : null}
                        <p>{item.title}</p>
                    </button>
            ))
            }
        </div>
        <div className="flex items-center gap-3 ">
            <Button onClick={() => navigate('referrals?open=true')} title={'Refer Now!'} className={'hidden sm:block !px-5 !py-2.5 !text-sm  !bg-light_blue'} />
            <button className={'text-sm font-medium sm:hidden block'}>Refer Now!</button>
            <button onClick={logout} className=" min-w-10 min-h-10 bg-[#ededed] hidden sm:grid place-content-center rounded-full">
                <IoLogOut size={20} color='red' />
            </button>
            <button>
                <img className='max-w-8 sm:min-w-10' src={avatar} alt="" />
            </button>
            <button className='block lg:hidden' >
                <BiMenu size={20} />
            </button>
        </div>
      </header>
      <main className='flex-1 flex gap-5 w-full' >
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
