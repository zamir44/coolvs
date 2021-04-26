import Link from 'next/link'
import Image from 'next/image'
import { Col, Container, Row } from "react-bootstrap";

function Main() {
    return (
        <>
            

            <div className=" mx-auto py-10">
                <p className="text-center text-lg my-20">Optike, Dielli, Aksesorw</p>
                <div className="md:hidden">
                <div className="w-full max-w-max mx-auto relative ">
                    <Link href="/">
                        <a>
                        <div className="w-full absolute inset-0 bg-gradient-to-t from-black opacity-100 z-10"></div>
                        <Image
                        href="/"
                        src="/../public/mobile-images/Optic-mobile.PNG"
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="400"
                        height=""
                        quality="100"
                        />
                        <div className="absolute inset-y-11 inset-x-20 z-20 flex justify-around">
                            <button type="button" className="bg-white text-black w-full opacity-80 uppercase font-bold tracking-wide">optike</button>
                        </div>
                        </a>
                    </Link>
                </div>

            <div className="w-full max-w-max mx-auto relative mt-6">
            <Link href="/">
                <a>
                    <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black opacity-100 z-10"></div>
                    <Image
                        src="/../public/mobile-images/Sunglasses-mobile.PNG"
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="400"
                        height="[100%]"
                        quality="100"
                    />
                    <div className="absolute inset-y-11 inset-x-20 z-20 flex justify-around">
                        <button type="button" className="bg-white text-black w-full whitespace-normal opacity-80 uppercase font-bold tracking-wide">dielli</button>
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
                        height="[100%]"
                        quality="100"
                    />
                    <div className="absolute inset-y-11 inset-x-20 flex justify-around z-20">
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
                        height="[100%]"
                        quality="100"
                    />
                <div className="absolute inset-y-11 inset-x-20  flex justify-around z-20">
                    <button type="button" className="bg-white w-full text-black opacity-80 uppercase font-bold tracking-wide">rezervo</button>
                </div>
                    </a>
                </Link>
            </div>
                </div>
            </div>

            
            <Container className="sm:hidden md:max-w-screen-md mx-auto  md:flex md:flex-row">
                <Row>
                    <Col  className="relative">
                        <div className="w-full absolute inset-0 bg-gradient-to-t from-black to-black opacity-30 z-10"></div>
                        <div  style={{ height: '500px', width:'500px'}} className="z-50">
                            <Image
                                src="/../public/images/sunglasses.jpeg"
                                alt="Picture of the author"
                                layout="fill"
                                quality="100"
                                objectFit="cover"
                            />
                        </div>
                            
                        <button type="button" className="uppercase bg-white text-black font-bold border border-white p-10 inset-0 absolute">
                            <ul>
                                <li>D</li>
                                <li>I</li>
                                <li>E</li>
                                <li>L</li>
                                <li>L</li>
                                <li>I</li>
                            </ul>
                        </button>
                    </Col>

                    <Col size="6" className="relative ml-10">
                        <div className="w-full absolute inset-0 bg-gradient-to-t from-black to-black opacity-30 z-10"></div>
                        <div  style={{ height: '500px', width:"500px"}} className="z-50" >
                            <Image
                                src="/../public/images/optic.jpg"
                                alt="Picture of the author"
                                layout="fill"
                                quality="100"
                                objectFit="cover"
                            />
                        </div>
                            
                        <button type="button" className="uppercase bg-white text-black font-bold border border-white p-10 inset-0 absolute">
                            <ul>
                                <li>O</li>
                                <li>P</li>
                                <li>T</li>
                                <li>I</li>
                                <li>K</li>
                                <li>E</li>
                            </ul>
                        </button>
                    </Col>
                </Row>
            </Container>

            <Container className="sm:hidden md:max-w-screen-md mx-auto mt-9 md:flex md:flex-row">
                    <Row>
                    <Col  className="relative">
                    <div className="w-full absolute inset-0 bg-gradient-to-t from-black to-black opacity-30 z-10"></div>
                    <div  style={{ height: '500px', width:'500px'}} className="z-50">
                        <Image
                            src="/../public/images/accessor.jpg"
                            alt="Picture of the author"
                            layout="fill"
                            quality="100"
                        />
                    </div>
                        
                    <button type="button" className="uppercase bg-white text-black font-bold border border-white p-10 inset-0 absolute">
                        <ul>
                            <li>A</li>
                            <li>K</li>
                            <li>S</li>
                            <li>E</li>
                            <li>S</li>
                            <li>O</li>
                            <li>R</li>
                            <li>Ë</li>
                        </ul>
                    </button>
                </Col>

                <Col size="6" className="relative ml-10">
                    <div className="w-full absolute inset-0 bg-gradient-to-t from-black to-black opacity-30 z-10"></div>
                    <div  style={{ height: '500px', width:"500px"}} className="z-50" >
                        <Image
                            src="/../public/images/calendar.jpg"
                            alt="Picture of the author"
                            layout="fill"
                            quality="100"
                        />
                    </div>
                        
                    <button type="button" className="uppercase bg-white text-black font-bold border border-white p-10 inset-0 absolute">
                        <ul>
                            <li>R</li>
                            <li>E</li>
                            <li>Z</li>
                            <li>E</li>
                            <li>R</li>
                            <li>V</li>
                            <li>O</li>
                        </ul>
                    </button>
                    
                </Col>
                
                    </Row>
            </Container>
        </>
    )
}

export default Main
