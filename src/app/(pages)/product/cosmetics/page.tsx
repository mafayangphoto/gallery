import React from 'react';
import Image from 'next/image';
import { cosmeticsImages } from './imagesLib';

function page() {
  return (
    <div className='w-full flex px-2.5'>
        <div className='flex w-2/5'>
            <div >
                {cosmeticsImages.blockOne.map((img,idx:number) => {
                    return(
                        <div className='p-2.5' key={idx}><Image loading='lazy' placeholder='blur' src={require(`${img.url}`)} alt={`one${idx}`}/></div>
                    )
                })}
                
            </div>
        </div>
        <div className='flex w-2/5'>
            <div >
                {cosmeticsImages.blockTwo.map((img,idx:number) => {
                    return(
                        <div className='p-2.5' key={idx}><Image loading='lazy' placeholder='blur' src={require(`${img.url}`)} alt={`two${idx}`}/></div>
                    )
                })}
                
            </div>
        </div>
        <div className='flex w-2/5'>
            <div >
                {cosmeticsImages.blockThree.map((img,idx:number) => {
                    return(
                        <div className='p-2.5' key={idx}><Image loading='lazy' placeholder='blur' src={require(`${img.url}`)} alt={`three${idx}`}/></div>
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default page