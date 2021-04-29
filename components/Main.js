import Link from 'next/link'
import Image from 'next/image'
import { Col, Container, Row } from "react-bootstrap";

function Main() {
    return (
        <>
            

            <div className="mx-auto py-10">
                <p className="text-center text-lg my-20 uppercase tracking-widest font-semibold">Optike, Dielli, Aksesorë</p>
                <div className="md:hidden">
                <div className="w-full max-w-max mx-auto relative ">
                    <Link href="/">
                        <a>
                        <div className="w-full absolute inset-0 bg-gradient-to-t from-black opacity-100 z-10"></div>
                        <Image
                        href="/"
                        src="/../public/mobile-images/sun-mobile.PNG"
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
                        src="/../public/mobile-images/Accessories-mobile.PNG"
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
                <Link href="/">
                    <a>
                <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black opacity-100 z-10"></div>
                    <Image
                        src="/../public/mobile-images/Calendar-mobile.PNG"
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="400"
                        height="256"
                        quality="100"
                    />
                <div className="absolute inset-y-16 inset-x-20  flex justify-around z-20">
                    <button type="button" className="bg-white w-full text-black opacity-80 uppercase font-bold tracking-wide">
                        rezervo
                    </button>
                </div>
                    </a>
                </Link>
            </div>
            </div>
            </div>

            
            <div className="container-fluid sm:hidden  md:flex md:flex-row md:justify-center overflow-hidden">
                <div className="row flex-nowrap mx-auto md:flex md:flex-col lg:flex-row">
                    <div className="col-md-6 lg:ml-10 p-0">
                        <div style={{ height: '600px', width:"600px", position:"relative"}} >
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-30 z-10"></div>
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/../public/images/sun.jpg"
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

                    <div className="col-md-6  lg:mr-10 mt-10 lg:mt-0 p-0">
                        <div  style={{ height: '600px', width:'600px', position: 'relative'}}>
                        <div className="w-full absolute inset-0 bg-gradient-to-t from-black to-black opacity-30 z-10"></div>
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/../public/images/optike.jpg"
                                    alt="Picture of the author"
                                    layout="fill"
                                    quality="100"
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

            <div className="container-fluid sm:hidden  md:flex md:flex-row md:justify-center mt-10 overflow-hidden">
                <div className="row flex-nowrap mx-auto md:flex md:flex-col lg:flex-row">
                <div className="col-md-6 lg:ml-10 p-0">
                
                    <div  style={{ height: '600px', width:"600px", position: "relative"}}>
                    <div className="w-full absolute inset-0 bg-gradient-to-t from-black to-black opacity-30 z-10"></div>
                        <div className="flex flex-col items-center">
                            <Image
                                src="/../public/images/accessor.jpg"
                                alt="Picture of the author"
                                layout="fill"
                            />
                            <div className="button-before uppercase font-bold tracking-wider absolute bottom-11 z-20">
                                <a href="#">aksesorë</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 lg:mr-10 md:mt-10 lg:mt-0 p-0">
                    <div  style={{ height: '600px', width:"600px", position: "relative"}}>
                        <div className=" absolute inset-0 bg-gradient-to-t from-black to-black opacity-30 z-10"></div>
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/../public/images/calendar.jpg"
                                    alt="Picture of the author"
                                    layout="fill"
                                    quality="100"
                                    
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
