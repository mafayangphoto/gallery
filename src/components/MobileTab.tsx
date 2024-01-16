'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiBars3, HiOutlineXMark, HiHome } from "react-icons/hi2";
import { MdPortrait } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { FiBox } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import 'animate.css/animate.min.css';

function MobileTab() {
  const [ isBarOpen,setIsBarOpen ] = useState(false);
  const [ tabList,setTabList ] = useState([
    {name:'Home',hasChild:false,allowClick:true,isOpen:false},
    {name:'portrait',hasChild:true,allowClick:true,isOpen:false,childList:[
      {key:'creative',text:'Creative'},
      // {key:'hairstyle',text:'Hair style'},
      {key:'laser',text:'Laser'}
    ]},
    {name:'product',hasChild:true,allowClick:false,isOpen:false,childList:[
      {key:'accessories',text:'Accessories'},
      {key:'cosmetics',text:'Cosmetics'},
      {key:'food',text:'Food'},
    ]},
    {name:'event',hasChild:true,allowClick:false,isOpen:false,childList:[
      {key:'wedding',text:'Wedding'},
    ]},
    // {name:'about',hasChild:false,allowClick:true,isOpen:false}
  ])

  const onBarClick = (tab:any) => {
    const updatedItems = tabList.map((item) =>
      item.name === tab.name ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }
    );
    setTabList(updatedItems)
  }
  
  return (
    <div>
      <div className={`fixed top-10 left-10 sm:hidden ${isBarOpen && 'hidden'}`} onClick={() => {setIsBarOpen(true)}}><HiBars3 className='text-zinc-800 active:text-zinc-400' size={40}/></div>
      <div className={`fixed w-full h-full sm:hidden bg-stone-100 transition-transform transform flex flex-col ${isBarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className='flex items-center justify-end'><div className='mr-2.5 mt-2.5' onClick={() => {setIsBarOpen(false)}}><HiOutlineXMark className='text-zinc-800 active:text-zinc-400' size={40}/></div></div>
          <div className='grow'>
            <div className={`transition-transform transform duration-300 delay-50 ${isBarOpen ? 'translate-x-0' : '-translate-x-full'} `} >
              {/* <div className='pl-5 h-10 flex items-center justify-center '><Image className='w-[40px]' src={require('../../public/logo.svg')} alt='logo'/></div> */}
              <div className='pl-5 h-12 flex items-center justify-center '><span className='text-2xl text-neutral-700'>MAFA_YANG</span></div>
              {tabList.map((tab) => (
                <div key={tab.name} className='flex flex-col'>
                  <div className='flex flex-row items-center justify-between'>
                    <Link className='pl-5 h-14 flex flex-row items-center justify-start' href={tab.allowClick ? `/${tab.name}` : ''} onClick={() => {setIsBarOpen(false)}}>
                      { tab.name === 'Home' ? <HiHome className='text-zinc-800 active:text-zinc-400' size={30} /> : tab.name === 'portrait' ? <MdPortrait className='text-zinc-800 active:text-zinc-400' size={30} /> : tab.name === 'product' ? <FiBox className='text-zinc-800 active:text-zinc-400' size={30} /> : tab.name === 'event' ? <div className='w-[30px] flex items-center justify-center'><FaRegCalendarCheck className='text-zinc-800 active:text-zinc-400' size={26} /></div> : <GrContactInfo className='text-zinc-800 active:text-zinc-400' size={30} />}
                      <span className='ml-2 text-xl'>{tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}</span>
                    </Link>
                    { tab.hasChild && ( tab.isOpen ? <div className='mr-5 w-[24px]' onClick={() => {onBarClick(tab)}}><IoIosArrowUp className='text-zinc-800 active:text-zinc-400' size={24}/></div> : <div className='mr-5 w-[24px]' onClick={() => {onBarClick(tab)}}><IoIosArrowDown className='text-zinc-800 active:text-zinc-400' size={24}/></div> )}
                  </div>
                  <div className={`flex flex-col `}>
                    { tab.hasChild && tab.isOpen && tab.childList?.map((child) => (<Link key={child.key} href={`/${tab.name}/${child.key}`} onClick={() => {setIsBarOpen(false)}} className='pl-14 h-10 animate__animated animate__fadeIn'><span className='text-lg'>{child.text}</span></Link>)) }
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default MobileTab