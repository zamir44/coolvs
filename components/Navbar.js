import Link from 'next/link'
import Image from 'next/image'
import  React, { useState } from 'react'
import { ImLocation } from 'react-icons/im';
import { Transition } from "@headlessui/react";




export const Navbar = () => {
  const [isOpen, setisOpen] = React.useState(false);
 

  function handleClick() {
    setisOpen(!isOpen);
  }

    return (
    
      <>
      <div className="flex md:justify-between justify-center bg-blue-500 sm:text-center text-white text-xs tracking-widest uppercase py-4 px-12">
        <p className="hidden md:block">Cool Vision Tetovo</p>
        <p className="md:mr-32 m-0">Original Eyewear Since 1995</p>
        <p className="hidden md:block">EN</p>
      </div>
      <nav className='flex items-center justify-between  bg-gray-100 py-2 px-12'>
        <button type="button" className="block lg:hidden  focus:outline-none" onClick={handleClick}>
          <svg className="h-6 w-6 fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {isOpen && (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              )}
              {!isOpen && (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
          </svg>
        </button>
        
        <div className="flex flex-row hidden lg:block flex-2 text-blue-500 tracking-widest uppercase text-sm"> 
          <Link href="/">
            <a className="items-center mr-5">
              Optike
            </a>
          </Link>
          <Link href="/">
            <a className="items-center mr-5">
              Dielli
            </a>
          </Link>
          <Link href="/">
            <a className="items-center mr-5">
              Aksesore
            </a>
          </Link> 
        </div>

        <div className="text-center">
          <Link href="/">
          <a>
          <Image
          src="/../public/logo.jpg"
          alt="Picture of the author"
          width={200}
          height={70}
          />
          </a>
          </Link>
          
        </div>  
        
        <div className="flex-2 hidden lg:inline-block  text-blue-500 text-right tracking-widest uppercase text-sm">
        
          <Link href="/" className="">
            <a className="items-center mr-5 ">
              Kontakt
            </a>
          </Link>
          <Link href="/">
            <a className="items-center mr-4 ">
              Rezervo
            </a>
            
          </Link>
          
          <ImLocation className="inline-block"/>
        </div>
        
        
      </nav>

      <div className={`${  isOpen ? "block" : "hidden" } lg:hidden`}>
        
        <ul className={`md:flex flex-col w-80 h-screen bg-blue-400 text-white uppercase tracking-widest text-sm absolute left-0 top-0 z-50`}>
        
          <button type="button" className="block lg:hidden absolute left-5 top-5 focus:outline-none" onClick={handleClick} >
            <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {isOpen && (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                )}
                {!isOpen && (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
            </svg>
          </button>
          <p className="absolute right-5 top-5">EN</p>
          <li className="p-3 mt-20 ml-4">Optike</li>
          <li className="p-3 ml-4">Dielli</li>
          <li className="p-3 ml-4">Aksesorw</li>
          <li className="p-3 ml-4">Kontakt</li>
          <li className="p-3 ml-4">Rezervo</li>
        </ul>
      </div>
      <div className="relative z-10">
      <Image
      src="/../public/images/SLIDER-mpjn-FINAL_2000x.jpg"
      alt="Picture of the author"
      height={900}
      width={2000}
      />
      </div>
    </>
      
    )
  }

  export default Navbar