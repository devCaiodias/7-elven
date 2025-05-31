import Image from 'next/image'
import logo from '../../../public/7elogo.svg'

import {
    NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Drawer,DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

export default function NavBar() {
    return (
        <div className='flex items-center justify-between m-5 h-16'>
            <div className='flex items-center gap-5'>
                <Image src={logo} alt='7-eleven logo' />
                <NavigationMenu className='list-none' >
                <NavigationMenuItem >
                <NavigationMenuTrigger className='font-extrabold text-[19px]'>Food</NavigationMenuTrigger>
                <NavigationMenuContent className='flex flex-row gap-6'>
                    <div>

                        <NavigationMenuLink asChild>
                        <Link href="#" className='m-2'>Bakery</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2 w-36'>Fresh & Chilled</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2'>Snacks</Link>
                        </NavigationMenuLink>
                    </div>
                    <div>

                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2'>Pizza</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2 w-36'>Hot Foods</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2'>rollergrill</Link>
                        </NavigationMenuLink>
                    </div>
                    <div>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2'>Candy</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2 w-36'>Ice Cream</Link>
                        </NavigationMenuLink>
                    </div>
                </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem >
                <NavigationMenuTrigger className='font-extrabold text-[19px]'>Drinks</NavigationMenuTrigger>
                <NavigationMenuContent className='flex gap-6'>
                    <div>

                        <NavigationMenuLink asChild>
                        <Link href="#" className='m-2'>Coffee</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2 w-36'>Big Gulp®</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2'>Slurpee®</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2'>Bottled Water</Link>
                        </NavigationMenuLink>
                    </div>
                    <div>

                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2'>Energy Drinks</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2 w-36'>Energy Shots</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2'>Sports Drinks</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2 w-36'>Cold Pressed Juices</Link>
                        </NavigationMenuLink>
                    </div>
                    <div>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2'>Bottled Tea</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2 w-36'>Beer</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                        <Link href="#"className='m-2 w-36'>Wine</Link>
                        </NavigationMenuLink>
                    </div>
                </NavigationMenuContent>
                </NavigationMenuItem>
                 <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/docs" className='font-extrabold text-[19px]'>7REWARDS</Link>
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                 <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/docs" className='font-extrabold text-[19px]'>Order 7NOW Delivery</Link>
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                 <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/docs" className='font-extrabold text-[19px]'>Shop 7Collection</Link>
                    </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenu>
                
            </div>
            <Drawer>
            <DrawerTrigger><Button variant="link">Find a Store</Button></DrawerTrigger>
            <DrawerContent>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-16 p-6 max-w-4xl mx-auto">
                <div className="w-full md:w-1/2">
                    <label htmlFor="store-location" className="block text-xs font-bold text-black mb-1 uppercase">
                    Find a store
                    </label>
                    <input
                    type="text"
                    id="store-location"
                    placeholder="Street, City, State or ZIP"
                    className="w-full text-2xl font-bold placeholder:text-gray-400 border-b-2 focus:outline-none"
                    required
                    />
                </div>

                <div className="flex flex-col items-center w-full md:w-1/2 gap-3">
                    <button className="bg-green-700 text-white font-bold py-2 px-8 rounded-full w-full">
                    Submit
                    </button>
                    <span className="text-black font-bold text-sm">or</span>
                    <button className="border-2 border-green-700 text-green-700 font-bold py-2 px-8 rounded-full w-full">
                    Use My Location
                    </button>
                </div>
                </div>
            </DrawerContent>
            </Drawer>
        </div>
    )
}

