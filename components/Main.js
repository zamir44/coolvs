import Link from 'next/link'
import Image from 'next/image'

function Main() {
    return (
        <>
            

            <div className="container mx-auto py-10">
                <p className="text-center text-lg my-20">Optike, Dielli, Aksesorw</p>
                <div className="w-full max-w-max mx-auto relative ">
                    <Link href="/">
                        <a>
                        <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black opacity-100 z-10"></div>
                        <Image
                        href="/"
                        src="/../public/mobile-images/Optic-mobile.PNG"
                        alt="Picture of the author"
                        layout="intrinsic"
                        width="400"
                        height="[100%]"
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
        </>
    )
}

export default Main
