"use client"

import React from 'react'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { ShoppingCart } from 'lucide-react'
import { Separator } from './ui/separator'
import { formatPrice } from '@/src/lib/utils'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import Image from 'next/image'
import empty from '../public/hippo-empty-cart.png'

const Cart = () => {

    const itemCount = 0
    const fee = 1
    
  return (
    <Sheet>
        <SheetTrigger className='group flex items-center -m-2 p-2'>
            <ShoppingCart className='h-6 w-6 text-gray-400 group-hover:text-gray-500 flex-shrink-0' aria-hidden="true"/>
            <span className='ml-2 text-sm font-medium text-gray-400 group-hover:text-gray-900'>
                0
            </span>
        </SheetTrigger>
        <SheetContent className='w-full flex flex-col pr-0 sm:max-w-lg'>
            <SheetHeader className='space-y-2.5 pr-6'>
                <SheetTitle>Cart (0)</SheetTitle>
            </SheetHeader>
            {itemCount > 0 ? (
                <>
                <div className="flex flex-col w-full pr-6">
                    {/* TODO CARD ITEM */}
                    Cart item
                </div>
                <div className="space-y-4 pr-6">
                    <Separator/>
                    <div className="space-y-1.5 text-sm">
                        <div className="flex">
                            <span className='flex-1'>Shipping</span>
                            <span>free</span>
                        </div>
                        <div className="flex">
                            <span className='flex-1'>Transfar fee</span>
                            <span>{formatPrice(fee)}</span>
                        </div>
                        <div className="flex">
                            <span className='flex-1'>Total</span>
                            <span>{formatPrice(fee)}</span>
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetTrigger asChild>
                            <Link href="/Cart" className={buttonVariants({className:"w-full",})}>Continue To Checkout</Link>
                        </SheetTrigger>
                    </SheetFooter>
                </div>
                </>
            ): (
                <div className="flex h-full flex-col items-center justify-center space-y-1">
                    <div aria-hidden="true" className="relative h-60 w-60 text-muted-foreground mb-4">
                        <Image src={empty} alt='cart' fill/>
                    </div>
                    <div className="text-xl font-medium">Your Cart Is Empty !</div>
                    <SheetTrigger asChild>
                        <Link href="/products" className={buttonVariants({variant:"link",size:'sm',className:"text-muted-foreground"})}>
                        Add Items to your cart to chackout !
                        </Link>
                    </SheetTrigger>
                </div>
            )}
        </SheetContent>
    </Sheet>
  )
}

export default Cart