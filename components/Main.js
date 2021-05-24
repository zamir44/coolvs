import Link from 'next/link'
import Image from 'next/image'
import { Col, Container, Row } from "react-bootstrap";

function Main() {
    return (
        <>
            
            <div className="mx-auto md:pb-0 pb-24 lg:pb-12">
                <p className="text-center text-xl md:text-2xl my-32 uppercase tracking-widest">Optike, Dielli, Aksesorë</p>
                <div className="md:hidden">
                    <div className="w-full max-w-max mx-auto relative ">
                        <Link href="/">
                            <a>
                            <div className="w-full absolute inset-0 bg-gradient-to-t from-black opacity-100 z-10"></div>
                            <Image
                                href="/"
                                src="/mobile-images/sun-mobile.PNG"
                                alt="Picture of the author"
                                layout="intrinsic"
                                width="400"
                                height="256"
                                objectFit="cover"
                                quality="100"
                            />
                            <div className="absolute inset-y-16 inset-x-20 z-20 flex justify-around">
                                <button type="button" className="bg-white text-black w-full opacity-80 uppercase font-bold tracking-wide">dielli</button>
                            </div>
                            </a>
                        </Link>
                    </div>

            <div className="w-full max-w-max mx-auto relative mt-6">
                <Link href="/">
                    <a>
                        <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black opacity-100 z-10"></div>
                        <Image
                            src="/../public/mobile-images/optike-mobile.PNG"
                            alt="Picture of the author"
                            layout="intrinsic"
                            width="400"
                            height="256"
                            quality="100"
                            objectFit="cover"
                        />
                        <div className="absolute inset-y-16 inset-x-20 z-20 flex justify-around">
                            <button type="button" className="bg-white text-black w-full whitespace-normal opacity-80 uppercase font-bold tracking-wide">optike</button>
                        </div>
                    </a>
                </Link>
            </div>

            <div className="w-full max-w-max mx-auto relative mt-6">
            <Link href="/">
                <a>
                    <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black opacity-100 z-10"></div>
                    <Image
                        src="/mobile-images/Accessories-mobile.PNG"
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="400"
                        height="256"
                        quality="100"
                        objectFit="cover"
                    />
                    <div className="absolute inset-y-16 inset-x-20 flex justify-around z-20">
                        <button type="button" className="bg-white text-black w-full opacity-80 uppercase font-bold tracking-wide">aksesorë</button>
                    </div>
                </a>
            </Link>
            </div>

                <div className="w-full max-w-max mx-auto relative mt-6">
                    <a>
                        <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black opacity-100 z-10"></div>
                            <div className="col-span-1">
                            <Image
                                src="/../public/mobile-images/Calendar-mobile.PNG"
                                alt="Picture of the author"
                                layout="intrinsic"
                                width="400"
                                height="256"
                                quality="100"
                                className="col-span-1"
                            />
                            </div>
                            
                        <div className="absolute inset-y-16 inset-x-20  flex justify-around z-20">
                            <button type="button" className="bg-white w-full text-black opacity-80 uppercase font-bold tracking-wide">
                                rezervo
                            </button>
                        </div>
                    </a>
                </div>
            </div>
            </div>


            
            <div className="container-fluid hidden md:flex md:flex-row md:justify-center overflow-hidden">
                <div className="row flex-nowrap md:flex md:flex-col lg:flex-row lg:ml-0">
                    <div className="col-md-6 p-0 lg:mr-3 mb-10 lg:mb-0 ">
                        <div style={{ width:"500px", height:"600px", position:"relative"}} >
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-30 z-10"></div>
                            <div className="flex flex-col items-center">
                            <Image
                                src="/images/sun.jpg"
                                alt="Picture of the author"
                                layout="fill"
                                quality="100"
                                objectFit="cover"
                            />
                                <div className="button-before absolute uppercase font-bold tracking-wider bottom-11 z-20">
                                    <a href="#">dielli</a>
                                </div>
                                </div>
                            </div>
                    </div>

                    <div className="col-md-6 lg:mr-0 mt-10 lg:mt-0 p-0">
                        <div  style={{ height: '600px', width:'500px', position: 'relative'}}>
                        <div className="w-full absolute inset-0 bg-gradient-to-t from-black to-black opacity-30 z-10"></div>
                            <div className="flex flex-col items-center lg:mr-3">
                                <Image
                                    src="/../public/images/optike.jpg"
                                    alt="Picture of the author"
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className="button-before absolute uppercase font-bold tracking-wider bottom-11 z-20">
                                    <a href="#">optike</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid hidden md:flex md:flex-row md:justify-center mt-10 overflow-hidden mb-40">
                <div className="row flex-nowrap mx-auto md:flex md:flex-col lg:flex-row">
                    <div className="col-md-6 p-0 mb-10 lg:mr-3 lg:mb-0">
                        <div  style={{ height: '600px', width:"500px", position: "relative"}}>
                            <div className="w-full absolute inset-0 bg-gradient-to-t from-black to-black opacity-30 z-10"></div>
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/images/accessor.jpg"
                                    alt="Picture of the author"
                                    layout="fill"
                                />
                                <div className="button-before uppercase font-bold tracking-wider absolute bottom-11 z-20">
                                    <a href="#">aksesorë</a>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="col-md-6 lg:mr-0 lg:ml-0 md:mt-10 lg:mt-0 p-0">
                    <div  style={{ height: '600px', width:"500px", position: "relative"}}>
                        <div className=" absolute inset-0 bg-gradient-to-t from-black to-black opacity-30 z-10"></div>
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/../public/images/calendar.jpg"
                                    alt="Picture of the author"
                                    layout="fill"
                                />
                                <div className="button-before absolute uppercase font-bold tracking-wider bottom-11 z-20">
                                    <a href="#">rezervo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    )
}

export default Main
