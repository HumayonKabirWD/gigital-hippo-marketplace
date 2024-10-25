"use client"

import { PRODUCT_CATAGORY } from '@/config'
import React, { useRef, useState } from 'react'
import Navitem from './Navitem'
import { useOnClickOutside } from '@/hooks/use-on-click-outside'

const NaveItems = () => {
    const [activeIndex, setactiveIndex] = useState<null | number>(null)

    const isAnyOpen = activeIndex !== null

    const navRef = useRef<HTMLDivElement | null>(null)

    useOnClickOutside(navRef, () => setactiveIndex(null))

  return (
    <div className='flex h-full gap-4' ref={navRef}>
        {PRODUCT_CATAGORY.map((catagory,i) =>{
            
            const handleOpen = ()=>{
                if(activeIndex === i){
                    setactiveIndex(null)
                }else{
                    setactiveIndex(i)
                }
            }
            const isOpen = i === activeIndex
            return(
                <div>
                    <Navitem
                    category={catagory}
                    handleOpen={handleOpen}
                    isOpen={isOpen}
                    key={catagory.value}
                    isAnyOpen={isAnyOpen}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default NaveItems