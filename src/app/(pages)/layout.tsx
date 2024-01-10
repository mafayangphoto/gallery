import React from 'react';
import PortalTab from '@/components/PortalTab';

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <>
        {/* <div className='sticky top-0 bg-white'> */}
            <div className='h-32 lg:h-36 w-full items-center justify-center hidden sm:flex'><span className='font-bold text-[30px] text-black'>MAFA_YANG</span></div>
            <PortalTab/>
        {/* </div> */}
        <div>{children}</div>
        </>
    )
}