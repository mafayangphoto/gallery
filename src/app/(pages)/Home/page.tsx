'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function page() {
  const [runMotion,setRunMotion] = useState(false);
  const [motionEnd,setMotionEnd] = useState(false);
  const [originDisappear,setOriginDisappear] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRunMotion(true);
    },400)
  },[])

  useEffect(() => {
    if(runMotion) { setTimeout(() => {
      setMotionEnd(true);
    },1200) }
  },[runMotion])

  useEffect(() => {
    if(motionEnd) { setTimeout(() => {
      setOriginDisappear(true);
    },800) }
  },[motionEnd])

  return (
    <>
    <div className='w-full h-full hidden sm:block'>
       <Image className={`${!motionEnd && 'hidden'}`} loading='lazy' placeholder='empty' src={require(`./images/IMG_0515.jpg`)} alt={`home`}/>
      <div className={`Buy_me_drink ${originDisappear && 'hidden'}`} style={{maxWidth:`${window.innerWidth}px`,overflow:'hidden'}}>
        <figure className={`${runMotion && 'hover'}`}>
          <Image className={`${runMotion && 'hover'}`} style={{height:`${window.innerHeight}px`}} src={require(`./images/IMG_0515.jpg`)} alt={`home`}/>
        </figure>
      </div>
    </div>
    <div className='w-full h-full flex flex-col sm:hidden'>
      <Image loading='lazy' placeholder='empty' src={require(`./images/IMG_0515.jpg`)} alt={`home`}/>
      <div className='grow'><div className='bg-[#000]'></div></div>
    </div>
    </>
  )
}

export default page