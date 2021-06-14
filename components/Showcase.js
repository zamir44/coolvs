import React from 'react'
import Image from 'next/image'
import 'swiper/swiper-bundle.css'
import useTranslation from 'next-translate/useTranslation'

const Showcase = () => {
    
    let { t } = useTranslation()

    return (
        <>
        <div className="container max-w-6x">
            <div className="container mt-20 p-0">
                <p className="text-xl text-center font-semibold uppercase tracking-widest">syze dielli të reja</p>
                <div className="row py-10 mx-auto md:flex md:flex-col items-center lg:flex-row">
                    <div className="col-md-6 text-left p-0 flex flex-col">
                        <div className="text-center lg:flex lg:flex-col">
                        <div className="lg:order-10 lg:mt-12 lg:text-left">
                            <Image
                                src="/../public/images/Round-Eyeglasses-Transparent-Image.png"
                                alt="Round Eyeglasses"
                                layout="intrinsic"
                                width="350"
                                height="170"
                            />
                        </div>
                            
                        
                        <div className="md:text-center lg:text-left order-3">
                            <p className="text-blue-500 uppercase mt-12 lg:mt-0">guess</p>
                            <p className="mt-2 font-bold">Teknologjia më e përparuar kombinohen brenda këtij stili modern të syzeve klasike</p>
                            <button type="button" className="uppercase border border-black px-8 py-3 mt-6">zbulo</button>
                        </div>
                        </div>
                        
                    </div>
                
                        <div className="col-md-6 text-center lg:text-left mt-20 lg:mt-0">
                            <div className="text-center">
                                <Image
                                src="/../public/images/tom-ford.png"
                                alt="Round Eyeglasses"
                                layout="intrinsic"
                                width="350"
                                height="170"
                                />
                            </div>
                            <div className="md:text-center lg:text-left">
                                <p className="text-blue-500 uppercase mt-12">ray-ban</p>
                                <p className="mt-2 font-bold">Koleksionet e CoolVision do të gjeni syze të përsosura transparente për ju</p>
                                <button type="button" className="uppercase border border-black px-8 py-3 mt-6">zbulo</button>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="conatainer-fluid py-10 overflow-hidden">
                    <div className="row flex flex-col items-center lg:items-start lg:flex-row">
                        <div className="col-md-6 text-center lg:text-left">
                        <div className="md:text-center lg:text-left">
                            <p className="text-blue-500 uppercase">aksesorë</p>
                            <p className=" font-bold">Gjeni koleksionin më të fundit të aksesorëve të syzeve, këllëfëve për syze dielli, thjerrëza</p>
                            <button type="button" className="uppercase border border-black px-8 py-3 mt-8">zbulo</button>
                        </div>
                            
                        </div>
                        <div className="col-md-6 text-center mt-20 lg:mt-0 ">
                            <Image
                            src="/images/accessories.jpg"
                            alt="Round Eyeglasses"
                            layout="intrinsic"
                            width="350"
                            height="250"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showcase
