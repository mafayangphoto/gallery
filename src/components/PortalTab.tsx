'use client'
import React, { useState } from 'react';
import Link from 'next/link';

function PortalTab() {
    // const [tabList] = useState([{name:'Home',hasChild:false,allowClick:true},{name:'portrait',hasChild:true,allowClick:true},{name:'product',hasChild:true,allowClick:false},{name:'event',hasChild:true,allowClick:false},{name:'about',hasChild:false,allowClick:true}])
    const [tabList] = useState([{name:'Home',hasChild:false,allowClick:true},{name:'portrait',hasChild:true,allowClick:true},{name:'product',hasChild:true,allowClick:true},{name:'event',hasChild:true,allowClick:false}])
    const [dropList,setDropList] = useState<{key:string,text:string}[]>([]);
    const [tabFloat,setTabFloat] = useState({width:0,top:0,left:0,right:0,bottom:0});

    const handleMouse = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,from?: string) => {
        setDropList([]);
        if(e.type === 'mouseenter') {
            const DOMRect: DOMRect = e.currentTarget?.getBoundingClientRect()!;
            let obj = {
                width : DOMRect.width <= 60 ? 200 : DOMRect.width,
                top : DOMRect.top + DOMRect.height + 10,
                left :DOMRect.left ,
                right: DOMRect.right,
                bottom:0,
            }
            if(from === 'portrait') {
                setDropList([
                    // {key:'beauty',text:'Beauty'},
                    {key:'creative',text:'Creative'},
                    {key:'hairstyle',text:'Hair style'},
                    {key:'laser',text:'Laser'},
                ]);
            }
            if(from === 'product') {
                setDropList([
                    {key:'accessories',text:'Accessories'},
                    {key:'cosmetics',text:'Cosmetics'},
                    {key:'food',text:'Food'},
                ])
            }
            if(from === 'event') {
                setDropList([
                    // {key:'activity',text:'Activity'},
                    {key:'wedding',text:'Wedding'},
                ])
            }
            setTabFloat(obj);
        }
    }

  return (
    <div className='h-11 lg:h-12 w-full items-center justify-center hidden sm:flex'>
        <div className='w-9/12 flex flex-row'>
            {tabList.map((tab,idx) => {
                return(
                    <Link href={tab.allowClick ? `/${tab.name}` : ''} key={`tab${idx}`} className='flex-1 items-center justify-center flex cursor-pointer container' onMouseEnter={(e) => {handleMouse(e,tab.name)}} ><span className='text-black'>{tab.name.toUpperCase()}</span>
                        {tab.hasChild && dropList.length > 0 && <div className='absolute border border-orange-100 rounded dropdown flex flex-col' style={{"minWidth":`${tabFloat.width}px`,"top": `${tabFloat.top}px`, "left": `${tabFloat.left}px`}}>
                            {dropList.map((item,index:number) => {
                                return(
                                    <Link className='w-full h-10 items-center justify-start flex hover:bg-amber-50' href={`/${tab.name}/${item.key}`} key={index} ><span className='ml-[10px]'>{item.text}</span></Link>
                                )
                            })}
                        </div>}
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default PortalTab