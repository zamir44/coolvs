
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FiPhone} from 'react-icons/fi'
import {AiOutlineCopyright} from 'react-icons/ai'
import {FaInstagram} from  'react-icons/fa'
import {SiFacebook} from 'react-icons/si'
import {AiTwotoneCalendar} from 'react-icons/ai'
import { ImLocation } from 'react-icons/im'
import useTranslation from 'next-translate/useTranslation'

const Footer = () => {

    let { t } = useTranslation()

    return (
        <>
        <footer className="bg-blue-500 pb-8">
            <div className=" flex flex-wrap text-white">
                <div className="p-10 md:order-3 md:flex-1 flex">
                    <div className="mx-auto ">
                        <ul className="md:flex-1">
                        <li className="lg:text-xl text-lg font-semibold mb-3 leading-8">{t('common:information')}</li>
                            <ul className="text-sm lg:text-base flex flex-row items-center pl-0">
                                <li><AiOutlineClockCircle className="text-base lg:text-lg mr-4"/></li>
                                <li>{t('common:open')}</li>
                            </ul>            
                            <ul className="text-sm lg:text-base lg:mt-2 flex flex-row items-center leading-8 pl-0">
                                <li><AiTwotoneCalendar className="text-base lg:text-lg mr-4"/></li>
                                <li>{t('common:calendar')}</li>
                            </ul>
                            <ul className="text-sm lg:text-base flex lg:mt-2 flex-row items-center leading-8 pl-0">
                                <li><FiPhone className="text-base lg:text-lg mr-4"/></li>
                                <li><a href="tel: [389] 75 30 20 50" className="hover:text-black text-white transition">[389] 75 30 20 50</a></li>
                            </ul>                      
                        </ul>
                    </div>
                </div>

            <div className="md:flex-1 md:order-2 flex justify-center p-10">
                <ul className="mx-auto lg:text-lg text-sm leading-8">
                    <li className="lg:text-xl text-lg font-semibold mb-2">{t('common:socialMedia')}</li>
                        <ul className="text-small lg:text-base flex items-center flex-row pl-0">
                            <li><a href="https://www.instagram.com/optikacoolvision/"><FaInstagram className=" lg:text-lg hover:text-black transition text-white mr-4 "/></a></li>
                            <li>@optikacoolvision</li>
                        </ul>
                        <ul className="text-small pl-0 lg:mt-2 lg:text-base flex flex-row items-center">
                            <li className=""><a href="https://www.facebook.com/OptikaCoolVisionVero3"><SiFacebook className="mr-4 lg:text-lg hover:text-black transiton text-white"/></a></li>
                            <li>Optika CoolVision</li>
                        </ul>
                </ul>
            </div>

            <ul className="text-sm lg:text-base p-10  md:pl-10 md:order-1 md:flex-1">
                <li className="text-lg lg:text-xl font-semibold mb-3">{t('common:location')}</li>
                <ul className="flex flex-row">
                    <li><ImLocation className="pl-0 text-white hover:text-black mt-1 transition cursor-pointer"/></li>
                    <li className="ml-2"><p className="">{t('common:address')}</p></li>
                </ul>            
            </ul>
        </div>
        <ul className="text-sm text-gray-900 opacity-80 lg:text-base flex flex-row items-center mb-0 pl-10">
            <li className="text-xs"><AiOutlineCopyright /></li>
            <li className="ml-1 font-semibold">All rights reserved. Cool Vision Company</li>
        </ul>
        </footer>
            </>

    )
}

export default Footer
