import React from 'react';
import PortalTab from '@/components/PortalTab';
import MobileTab from '@/components/MobileTab';

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <div className='flex flex-col'>
            <div className='h-32 lg:h-36 w-full items-center justify-center hidden sm:flex'><span className='font-bold text-[30px] text-black'>MAFA_YANG</span></div>
            <PortalTab/>
            {/* <div className='fixed h-full max-w-fit min-w-[40%] bg-white'>mobile</div> */}
            <MobileTab/>
            <div >{children}</div>
        </div>
    )
}