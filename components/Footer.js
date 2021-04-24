import Link from 'next/link'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FiPhone} from 'react-icons/fi'
import {AiOutlineCopyright} from 'react-icons/ai'
import {FaInstagram} from  'react-icons/fa'
import {TiSocialFacebookCircular} from 'react-icons/ti'

const Footer = () => {
    return (
        <>
            <div className="bg-blue-500 flex flex-wrap text-white">
            <div className="p-10 sm:flex-3 lg:flex-initial">
                <p className="text-xl">Informata</p>
                <p className="text-sm">Cool Vision është një kompani që ekziston
                dhe operon në fushën e optikës që nga viti 2001</p>
                <div className="flex flex-row">
                    <AiOutlineCopyright />
                    <p className="text-sm">All rights reserved.</p>
                </div>
                <p className="text-sm">Cool Vision Company</p>
            </div>
                
            <div className="p-10 sm:flex-3 lg:flex-initial">
                <div className="flex flex-row items-middle">
                    <AiOutlineClockCircle className="self-center text-xl"/>
                    <div className="ml-4 text-sm">
                        <p>Hapur prej 10:00 - 22:00</p>
                        <p>Hënë - Diel</p>
                    </div>
                </div>
                <div className="flex flex-row ">
                    <FiPhone className="self-center text-xl"/>
                    <div className="ml-4 text-sm">
                        <Link href="/">
                            <a href="tel: [389] 75 30 20 50">[389] 75 30 20 50</a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex-col sm:flex-3 lg:flex-initial p-10">
                <p className="text-lg">Social Media</p>
                <div className="flex flex-row">
                    <FaInstagram className="self-center text-xl"/>
                    <p>Optika Cool Vision</p>
                </div>
                <div className="flex flex-row">
                    <TiSocialFacebookCircular className="self-center text-xl"/>
                    <p>Optika Cool Vision</p>
                </div>
            </div>

            </div>
        </>
    )
}

export default Footer
