import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiBars3, HiOutlineXMark, HiHome } from "react-icons/hi2";
import { MdPortrait, MdOutlineEmail } from "react-icons/md";
import { FaRegCalendarCheck, FaEnvelope } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { FiBox } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";

function Menu({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [ tabList,setTabList ] = useState([
    {name:'Home',hasChild:false,allowClick:true,isOpen:false},
    {name:'portrait',hasChild:true,allowClick:true,isOpen:false,childList:[
      {key:'creative',text:'Creative'},
      {key:'hairstyle',text:'Hair style'},
      {key:'laser',text:'Laser'}
    ]},
    {name:'product',hasChild:true,allowClick:true,isOpen:false,childList:[
      {key:'accessories',text:'Accessories'},
      {key:'cosmetics',text:'Cosmetics'},
      {key:'food',text:'Food'},
    ]},
    {name:'event',hasChild:true,allowClick:false,isOpen:false,childList:[
      {key:'wedding',text:'Wedding'},
    ]},
    // {name:'about',hasChild:false,allowClick:true,isOpen:false}
  ]);
  // const pathname = usePathname();

  const onBarClick = (tab:any) => {
    const updatedItems = tabList.map((item) =>
      item.name === tab.name ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }
    );
    setTabList(updatedItems)
  }

  useEffect(() => {
    if(!isOpen) {
      tabList.map((item) =>  ({ ...item, isOpen: false }));
    }
  },[isOpen])

  return (
    <nav className="menu flex justify-between flex-col">
      <div className='flex flex-col w-full'>
        <div className='h-12 flex items-center justify-center '><span className='text-3xl font-bold text-white'>MAFA_YANG</span></div>
        <ul>
          {tabList.map((tab) => (
            <li key={tab.name} className='flex flex-col'>
              <div className='flex flex-row items-center justify-between'>
                <Link className='pl-5 h-14 flex flex-row items-center justify-start' href={tab.allowClick ? `/${tab.name}` : ''} onClick={() => setIsOpen(false)}>
                  { tab.name === 'Home' ? <HiHome className='text-white' size={26} /> : tab.name === 'portrait' ? <MdPortrait className='text-white' size={30} /> : tab.name === 'product' ? <FiBox className='text-white' size={30} /> : tab.name === 'event' ? <div className='w-[30px] flex items-center justify-center'><FaRegCalendarCheck className='text-white' size={26} /></div> : <GrContactInfo className='text-white' size={30} />}
                  <span className='ml-2 text-2xl'>{tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}</span>
                </Link>
                { tab.hasChild && ( tab.isOpen ? <div className='mr-5 w-[24px]' onClick={() => {onBarClick(tab)}}><IoIosArrowUp className='text-white' size={28}/></div> : <div className='mr-5 w-[24px]' onClick={() => {onBarClick(tab)}}><IoIosArrowDown className='text-white' size={26}/></div> )}
              </div>
              <div className={`flex flex-col `}>
                { tab.hasChild && tab.isOpen && tab.childList?.map((child) => (<Link key={child.key} href={`/${tab.name}/${child.key}`} onClick={() => setIsOpen(false)} className='pl-14 animate__animated animate__fadeIn'><span className='text-xl'>{child.text}</span></Link>)) }
              </div>
            </li>
          ))}
        </ul>
        </div>
        <div className='mb-10 flex items-center justify-center '><div className='w-20 flex items-center justify-center'><Link target="_blank" rel="noopener noreferrer" href={'https://www.instagram.com/mafa_771_kworner/'}><IoLogoInstagram  className='text-white'  size={30}/></Link></div><div className='w-20 flex items-center justify-center'><Link href={'mailto:mafayangphoto@gmail.com'}><MdOutlineEmail  className='text-white'  size={30}/></Link></div></div>
      </nav>
  )
}

export default Menu