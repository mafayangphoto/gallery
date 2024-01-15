'use client';
import React from 'react';
import Image from 'next/image';
import { weddingImages } from './imagesLib';

function page() {
  return (
    <div className='w-full flex flex-col'>
        { weddingImages.map((items) => 
            items.length === 1 ? 
            items.map((images) => (
                <div className='w-full p-1'><Image loading='lazy' placeholder='blur' src={require(`${images.url}`)} alt={images.url}/></div>
            ))
            : items.length === 4 ? 
                <div className='w-full flex flex-row px-4 md:px-10 sm:py-4'>
                    <div className='p-1'><Image loading='lazy' placeholder='blur' src={require(`${items[0].url}`)} alt={items[0].url}/></div> 
                    <div className='flex flex-col items-center justify-between'>
                        {items.filter((ele) => ele.size === 'horizontal').map((horiImages) => (
                            <Image className='h-1/2 w-3/4 p-1' loading='lazy' placeholder='blur' src={require(`${horiImages.url}`)} alt={horiImages.url}/>
                        ))}
                    </div>
                    <div className='p-1'><Image loading='lazy' placeholder='blur' src={require(`${items[items.length -1 ].url}`)} alt={items[items.length -1 ].url}/></div> 
                </div>
            : items.length === 2 ? 
            <div className='w-full flex flex-row'>
                {items.map((images) => (
                    <div className='w-1/2 p-1'><Image loading='lazy' placeholder='blur' src={require(`${images.url}`)} alt={images.url}/></div>
                ))}
            </div>
            : items.length === 3 ? 
            <div className='w-full flex flex-row'>
                {items.map((images) => (
                    <div className='w-1/2 p-1'><Image loading='lazy' placeholder='blur' src={require(`${images.url}`)} alt={images.url}/></div>
                ))}
            </div>
             : '' 
        )}
    </div>
  )
}

export default page