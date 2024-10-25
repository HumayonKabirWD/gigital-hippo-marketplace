import React from 'react'
import Maxwidth from './Maxwidth'
import Link from 'next/link'
import NaveItems from './NaveItems'
import { Icon } from './Icon'



const Navbar = () => {
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
        <header className='bg-white relative'>
            <Maxwidth>
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        {/* TODO Mobile divice */}
                        <div className="ml-4 lg:ml-0">
                            <Link href="/">
                            <Icon.logo className='h-8 w-10'/>
                            </Link>
                        </div>

                        <div className="hidden lg:block z-50 lg:self-stretch">
                            <NaveItems/>
                        </div>
                    </div>
                </div>
            </Maxwidth>
        </header>
    </div>
  )
}

export default Navbar