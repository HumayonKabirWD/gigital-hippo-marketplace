import React from 'react'
import Maxwidth from './Maxwidth'
import Link from 'next/link'
import NaveItems from './NaveItems'
import { Icon } from './Icon'
import { buttonVariants } from './ui/button'
import Cart from './Cart'



const Navbar = () => {
    const user = null
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

                        <div className="mx-auto flex items-center mr-0">
                            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                {user ? null : <Link href='/sign-in' className={buttonVariants ({variant:"ghost"})}>Sign in</Link>}

                                {user ? null : <span className='h-6 w-px bg-gray-200' aria-hidden="true"/>}

                                {user ? <p></p> : <Link href="/sign-up" className={buttonVariants({variant:"ghost"})}>Create Acount</Link>}

                                {user ? <span className='h-6 w-px bg-gray-200' aria-hidden="true"/> : null}

                                {user ? null : <div className='flex lg:ml-6'>
                                    <span className='h-6 w-px bg-gray-200' aria-hidden="true"/>
                                    </div>}
                                <div className="ml-4 flow-root lg:ml-6 ">
                                    <Cart/>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </Maxwidth>
        </header>
    </div>
  )
}

export default Navbar