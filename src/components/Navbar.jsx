import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <header className='padding-x py-8 z-10 w-full absolute'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
             <img src={headerLogo} alt=""
               width={130}
               height={29}
               className=''
             />

            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
              {navLinks.map((link)=>(
                <li key={link.label}><a href={link.href} 
                 className='font-montserrat text-lg text-slate-gray leading-normal'
                >{link.label}</a></li>
              ))}
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="Hamburger" 
                 width={25}
                 height={25}
                 className='object-cover'
                />
            </div>
        </nav>
    </header>
  )
}

export default Navbar
