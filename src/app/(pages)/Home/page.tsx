import React from 'react';
import Image from 'next/image';

function page() {
  return (
    <div className='w-full'><Image loading='lazy' placeholder='blur' src={require(`./images/IMG_0515.jpg`)} alt={`home`}/></div>
  )
}

export default page