import Link from 'next/link'
import Image from 'next/image'
import  React, { useState } from 'react'
import { ImLocation } from 'react-icons/im'
import { Transition } from "@headlessui/react"



export const Navbar = () => {
  const [isOpen, setisOpen] = React.useState(false);


  function handleClick() {
    setisOpen(!isOpen);
  }

    return (
    
      <>
      <div className="flex md:justify-between justify-center items-center bg-blue-500 sm:text-center text-white text-xs tracking-widest uppercase py-4 px-12">
        <p className="hidden lg:block my-auto flex-1 text-left">Cool Vision Tetovo</p>
        <p className="m-0 flex-1 text-center">Original Eyewear Since 1995</p>
        <p className="hidden lg:block my-auto flex-4 text-right">EN</p>
      </div>
      <nav className='flex items-center bg-blue30 justify-between py-2 px-12'>
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
        
        <div className="flex-1 flex-row hidden lg:block  text-black  tracking-widest uppercase text-sm"> 
          <Link href="/">
            <a className="hover:text-blue-500 text-black items-center mr-5 no-underline ">
              Optike
            </a>
          </Link>
          <Link href="/syzet/dielli">
            <a className="hover:text-blue-500 text-black items-center mr-5 no-underline">
              Dielli
            </a>
          </Link>
          <Link href="/">
            <a className="hover:text-blue-500 text-black items-center mr-5 no-underline">
              Aksesore
            </a>
          </Link> 
        </div>

        <div className="text-center">
          <Link href="/">
            <a>
              <Image
                src="/logo.jpg"
                alt="Picture of the author"
                width={200}
                height={70}
              />
            </a>
          </Link>
        </div>  
        
        <div className="flex-1 hidden lg:inline-block  text-blue-500 text-right tracking-widest uppercase text-sm">
          <Link href="/kontakt">
            <a className="hover:text-blue-500 text-black items-center  mr-5 no-underline">
              Kontakt
            </a>
          </Link>
          <Link href="/rezervo">
            <a className="hover:text-blue-500 text-black items-center no-underline">
              Rezervo
            </a>
          </Link>
        </div>
        <Link href="https://www.google.com/maps/@41.7966481,20.9149102,15z">
          <a className="pl-0 ml-0">
            <ImLocation className="block lg:inline-block pl-0 text-blue-500 hover:text-blue-900 md:ml-7 cursor-pointer"/>
          </a>
        </Link>
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
          
          <Link href="/"><li className="p-3 mt-20 ml-4 border-b w-4/5 border-gray-100 border-opacity-40"><a href="/" className="no-underline text-white">Optike</a></li></Link>
          <Link href="/"><li className="p-3 ml-4 border-b w-4/5 border-gray-100 border-opacity-30"><a className="no-underline text-white">Dielli</a></li></Link>
          <Link href="/"><li className="p-3 ml-4 border-b w-4/5 border-gray-100 border-opacity-30"><a className="no-underline text-white">Aksesorw</a></li></Link>
          <Link href="/"><li className="p-3 ml-4 border-b w-4/5 border-gray-100 border-opacity-30"><a className="no-underline text-white">Kontakt</a></li></Link>
          <Link href="/"><li className="p-3 ml-4 border-b w-4/5 border-gray-100 border-opacity-30"><a className="no-underline text-white">Rezervo</a></li></Link>
        </ul>
      </div>
      <div className="hidden md:block relative z-10">
          <Image
            src="/images/SLIDER-mpjn-FINAL_2000x.jpg"
            alt="Picture of the author"
            height={900}
            width={2000}
            objectFit="cover"
          />
      </div>
      <div className="md:hidden">
        <Image
          src="/images/hero-mobile.jpg"
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