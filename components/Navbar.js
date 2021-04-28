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
      <div className="flex md:justify-between justify-center items-center bg-blue-500 sm:text-center text-white text-xs tracking-widest uppercase py-4 px-12">
        <p className="hidden md:block my-auto ">Cool Vision Tetovo</p>
        <p className="md:mr-32 m-0">Original Eyewear Since 1995</p>
        <p className="hidden md:block my-auto">EN</p>
      </div>
      <nav className='flex items-center bg-blue30 justify-between  py-2 px-12'>
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
        
        <div className="flex flex-row hidden lg:block flex-2 text-black  tracking-widest uppercase text-sm"> 
          <Link href="../pages/optike.js">
            <a className="hover:text-blue-500 text-black  items-center  mr-5 hover:no-underline ">
              Optike
            </a>
          </Link>
          <Link href="../pages/dielli.js">
            <a className="hover:text-blue-500 text-black items-center mr-5 hover:no-underline">
              Dielli
            </a>
          </Link>
          <Link href="../pages/aksesorë.js">
            <a className="hover:text-blue-500 text-black items-center  mr-5 hover:no-underline">
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
          <Link href="../pages/kontakr.js" className="">
            <a className="hover:text-blue-500 text-black items-center  mr-5 hover:no-underline">
              Kontakt
            </a>
          </Link>
          <Link href="../pages/rezervo.js">
            <a className="hover:text-blue-500 text-black items-center hover:no-underline">
              Rezervo
            </a>
          </Link>
        </div>
        
                <a><ImLocation className="block lg:inline-block text-blue-500 hover:text-blue-900 ml-7 cursor-pointer"/></a>
       
        
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
          <li className="p-3 mt-20 ml-4 border-b w-4/5 border-gray-100 border-opacity-40">Optike</li>
          <li className="p-3 ml-4 border-b w-4/5 border-gray-100 border-opacity-30">Dielli</li>
          <li className="p-3 ml-4 border-b w-4/5 border-gray-100 border-opacity-30">Aksesorw</li>
          <li className="p-3 ml-4 border-b w-4/5 border-gray-100 border-opacity-30">Kontakt</li>
          <li className="p-3 ml-4 border-b w-4/5 border-gray-100 border-opacity-30">Rezervo</li>
        </ul>
      </div>
      <div className="hidden md:block relative z-10">
          <Image
          src="/../public/images/SLIDER-mpjn-FINAL_2000x.jpg"
          alt="Picture of the author"
          height={900}
          width={2000}
          />
      </div>
      <div className="md:hidden">
        <Image
        src="/../public/images/hero-mobile.jpg"
        alt="Picture of the author"
        layout="intrinsic"
        height="650"
        width="750"
        />
      </div>
      
      <div>
      </div>
    </>
      
    )
  }

  export default Navbar