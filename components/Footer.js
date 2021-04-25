import Link from 'next/link'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FiPhone} from 'react-icons/fi'
import {AiOutlineCopyright} from 'react-icons/ai'
import {FaInstagram} from  'react-icons/fa'
import {SiFacebook} from 'react-icons/si'
import {AiTwotoneCalendar} from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <div className="bg-blue-500 flex flex-wrap text-white">
            
            
            <div className="p-10 md:order-3 md:flex-1 flex">
                <div className="mx-auto ">
                    <ul className="md:flex-1">
                    <li className="lg:text-xl text-lg font-semibold mb-3 leading-8">Lokacioni</li>
                        <ul className="text-sm lg:text-base flex flex-row items-center">
                            <li><AiOutlineClockCircle className="text-base lg:text-lg mr-4"/></li>
                            <li>Hapur prej 10:00 - 22:00</li>
                        </ul>            
                        <ul className="text-sm lg:text-base flex flex-row items-center leading-8">
                            <li><AiTwotoneCalendar className="text-base lg:text-lg mr-4"/></li>
                            <li>Hënë - Diell</li>
                        </ul>
                        <ul className="text-sm lg:text-base flex flex-row items-center leading-8">
                            <li><FiPhone className="text-base lg:text-lg mr-4"/></li>
                            <li><a href="tel: [389] 75 30 20 50" >[389] 75 30 20 50</a></li>
                        </ul>                      
                    </ul>
                </div>
            </div>

            <div className="md:flex-1 md:order-2 flex justify-center p-10">
                <ul className="mx-auto lg:text-lg text-sm leading-8">
                    <li className="lg:text-xl text-lg font-semibold mb-3">Social Media</li>
                        <ul className="text-small lg:text-base  flex items-center flex-row ">
                            <li><a href="https://www.instagram.com/optikacoolvision/"><FaInstagram className="text-base lg:text-lg mr-4"/></a></li>
                            <li>@optikacoolvision</li>
                        </ul>
                        <ul className="text-small lg:text-base flex flex-row items-center">
                            <li><a href="https://www.facebook.com/OptikaCoolVisionVero3"><SiFacebook className="mr-4"/></a></li>
                            <li>Optika CoolVision</li>
                        </ul>
                </ul>
            </div>

            <ul className="text-sm lg:text-base p-10 md:order-1 md:flex-1 ">
                <li className="text-lg lg:text-xl font-semibold mb-3">Informata</li>            
                <li className="">Cool Vision është një kompani që ekziston
                dhe operon në fushën e optikës që nga viti 2001</li>            
                <ul className="text-sm lg:text-base flex flex-row items-center mt-4">
                    <li><AiOutlineCopyright /></li>
                    <li>All rights reserved.</li>
                </ul>
                <p className="leading-none">Cool Vision Company</p>               
            </ul>
            </div>
        </>
    )
}

export default Footer
