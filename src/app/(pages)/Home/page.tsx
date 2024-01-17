'use client'
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

function page() {
  const [runMotion,setRunMotion] = useState(false);
  const [motionEnd,setMotionEnd] = useState(false);
  const [originDisappear,setOriginDisappear] = useState(false);
  const observer = useRef<ResizeObserver | null>(null);
  const windowRef = useRef<HTMLDivElement | null>(null);
  const [ currentSize, setCurrentSize ] = useState({currentWidth:0,currentHeight:0})

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
    {/* <div className='w-full h-full hidden sm:block' ref={windowRef}>
       <Image className={`${!motionEnd && 'hidden'}`} loading='lazy' placeholder='empty' src={require(`./images/IMG_0515.jpg`)} alt={`home`}/>
      <div className={`Buy_me_drink ${originDisappear && 'hidden'}`} style={{maxWidth:`${currentSize.currentWidth}px`,overflow:'hidden'}}>
        <figure className={`${runMotion && 'hover'}`}>
          <Image className={`${runMotion && 'hover'}`} style={{height:`${currentSize.currentHeight}px`}} src={require(`./images/IMG_0515.jpg`)} alt={`home`}/>
        </figure>
      </div>
    </div> */}
    <div className='w-full sm:h-full h-screen bg-[#000]'>
      <Image loading='lazy' placeholder='empty' src={require(`./images/IMG_0515.jpg`)} alt={`home`}/>
    </div>
    {/* <div className='flex flex-col'>
      <Image loading='lazy' placeholder='empty' src={require(`./images/IMG_0515.jpg`)} alt={`home`}/>
      <div className='grow'><div className='bg-[#000]'></div></div>
    </div> */}
    </>
  )
}

export default page