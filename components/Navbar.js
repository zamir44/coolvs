import Link from 'next/link'
import Image from 'next/image'
import  React, { useState } from 'react'
import {useRouter} from 'next/router'
import { ImLocation } from 'react-icons/im'
import { Transition } from "@headlessui/react"
import useTranslation from 'next-translate/useTranslation'




export const Navbar = ({sticky}) => {
  
    const [isOpen, setisOpen] = React.useState(false)
    const router = useRouter()
    let { t } = useTranslation()

    function handleClick() {
      setisOpen(!isOpen);
    }


    return (
    
      <>
      <div className="flex md:justify-between justify-center items-center bg-blue-500 sm:text-center text-white text-xs tracking-widest uppercase py-4 px-12">
        <p className="hidden lg:block my-auto flex-1 text-left">Cool Vision Tetovo</p>
        <p className="m-0 flex-1 text-center">Original Eyewear Since 1995</p>
        <ul className="my-auto flex flex-row flex-4 justify-end hidden lg:flex">
        {router.locales.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale}>
              <a className="px-1 border-r last:border-transparent">{locale}</a>
            </Link>
          </li>
          ))}
        </ul>
      </div>
      <nav 
      style={{ zIndex: 9000 }}
      className={`flex items-center  justify-between py-2 px-12 ${sticky ? 'w-full bg-white -mt-12 fixed shadow-lg' : ''}`}>
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
        
        <div className="flex-1 flex-row hidden lg:block text-black  tracking-widest uppercase text-sm"> 
          <Link href="/syzet/optike">
            <a className="hover:text-blue-500 text-black items-center mr-5 no-underline transition">
            {t('common:nav1')}
            </a>
          </Link>
          <Link href="/syzet/dielli">
            <a className="hover:text-blue-500 text-black items-center mr-5 no-underline transition">
            {t('common:nav2')}
            </a>
          </Link>
          <Link href="/aksesorë">
            <a className="hover:text-blue-500 text-black items-center mr-5 no-underline transition">
            {t('common:nav3')}
            </a>
          </Link> 
        </div>

        <div className="text-center">
          <Link href="/">
            <a>
              <Image
                src="/Layer 1.png"
                alt="Picture of the author"
                width={200}
                height={70}
              />
            </a>
          </Link>
        </div>  
        
        <div className="flex-1 hidden lg:inline-block  text-blue-500 text-right tracking-widest uppercase text-sm">
          <Link href="/kontakt">
            <a className="hover:text-blue-500 text-black items-center  mr-5 no-underline transition">
            {t('common:nav4')}
            </a>
          </Link>
          <Link href="/rezervo">
            <a className="hover:text-blue-500 text-black items-center no-underline transition">
            {t('common:nav5')}
            </a>
          </Link>
        </div>
        <Link href="https://www.google.com/maps/@41.7966481,20.9149102,15z">
          <a className="pl-0 ml-0">
            <ImLocation className="block lg:inline-block pl-0 text-blue-500 hover:text-black lg:ml-3 transition cursor-pointer"/>
          </a>
        </Link>
      </nav>

      <Transition 
        show={isOpen} 
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-100"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full" className={`${ isOpen ? "block" : "hidden" } lg:hidden overflow-hidden`}>
        <ul className={`md:flex flex-col w-80 h-screen bg-blue-400 text-white uppercase tracking-widest text-sm absolute left-0 top-0 z-50 `} >
          <button type="button" className="block lg:hidden absolute left-5 top-5 focus:outline-none" onClick={handleClick}>
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
          
          <Link href="/syzet/optike"><li className="p-5 mt-20 ml-4 border-b w-4/5 border-gray-100 border-opacity-40"><a className="no-underline text-white cursor-pointer">{t('common:nav1')}</a></li></Link>
          <Link href="/syzet/dielli"><li className="p-5 ml-4 border-b w-4/5 border-gray-100 border-opacity-30"><a className="no-underline text-white cursor-pointer">{t('common:nav2')}</a></li></Link>
          <Link href="/aksesorë"><li className="p-5 ml-4 border-b w-4/5 border-gray-100 border-opacity-30"><a className="no-underline text-white cursor-pointer">{t('common:nav3')}</a></li></Link>
          <Link href="/kontakt"><li className="p-5 ml-4 border-b w-4/5 border-gray-100 border-opacity-30"><a className="no-underline text-white cursor-pointer">{t('common:nav4')}</a></li></Link>
          <Link href="/rezervo"><li className="p-5 ml-4 border-b w-4/5 border-gray-100 border-opacity-30"><a className="no-underline text-white cursor-pointer">{t('common:nav5')}</a></li></Link>
        </ul>
      </Transition>


    <div>
  </div>
    </>
      
    )
  }

  export default Navbar

