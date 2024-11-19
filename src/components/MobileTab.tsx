'use client'
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import 'animate.css/animate.min.css';
import { useAnimate, stagger } from "framer-motion";
import Menu from './Menu';
import { MenuToggle } from './MenuToggle';

function MobileTab() {
  const [ tabList,setTabList ] = useState([
    {name:'Home',hasChild:false,allowClick:true,isOpen:false},
    {name:'portrait',hasChild:true,allowClick:true,isOpen:false,childList:[
      {key:'creative',text:'Creative'},
      {key:'hairstyle',text:'Hair style'},
      // {key:'laser',text:'Laser'}
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
  const pathname = usePathname();

  const onBarClick = (tab:any) => {
    const updatedItems = tabList.map((item) =>
      item.name === tab.name ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false }
    );
    setTabList(updatedItems)
  }

  function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();
  
    useEffect(() => {
      const menuAnimations: [string, Record<string, any>, Record<string, any>][] = isOpen
        ? [
            [
              "nav",
              { transform: "translateX(0%)" },
              { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.5 }
            ],
            [
              "li",
              { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
              { delay: stagger(0.05), at: "-0.1" }
            ]
          ]
        : [
            [
              "li",
              { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
              { delay: stagger(0.05, { from: "last" }), at: "<" }
            ],
            ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
          ];
  
      animate([
        [
          "path.top",
          { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
          { at: "<" }
        ],
        ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
        [
          "path.bottom",
          { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
          { at: "<" }
        ],
        ...menuAnimations
      ]);
    }, [isOpen]);
  
    return scope;
  }
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

  
  return (

    <div className='sm:hidden fixed' ref={scope} >
      <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
    </div>
  )
}

export default MobileTab