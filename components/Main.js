import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'



function Main() {

    let { t } = useTranslation()

    return (
        <>

        <div className="hidden md:block relative z-10">
            <Image
                src="/images/SLIDER-mpjn-FINAL_2000x.jpg"
                alt="Picture of the author"
                height={850}
                width={2000}
                objectFit="cover"
            />
            <div className="absolute hidden md:block inset-y-3/4 inset-x-10 xl:inset-x-20">
                <p className="text-2xl lg:text-3xl text-gray-300 uppercase tracking-wide">{t('common:heroTitle')}</p>
                <p className="text-sm lg:text-base text-gray-300 uppercase mt-1">{t('common:heroDescription')}</p>
            </div>
        </div>
        <div className="md:hidden">
            <Image 
                src="/../public/images/hero-mobile.jpg"
                height={630}
                width={800}
                layout="intrinsic"
            />
        </div>
            
            <div className="mx-auto md:pb-0 pb-24">
                <p className="text-gray-800 text-center text-2xl md:text-3xl lg:text-4xl my-36 uppercase tracking-widest">{t('common:title1')}</p>
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
                                <button type="button" className="bg-white text-black w-full opacity-80 uppercase font-bold tracking-wide">{t('common:nav1')}</button>
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
                            <button type="button" className="bg-white text-black w-full whitespace-normal opacity-80 uppercase font-bold tracking-wide">{t('common:nav2')}</button>
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
                        <button type="button" className="bg-white text-black w-full opacity-80 uppercase font-bold tracking-wide">{t('common:nav3')}</button>
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
                            {t('common:nav4')}
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
                                    <Link href="/syzet/dielli">
                                        <a className="">{t('common:nav1')}</a>
                                    </Link>
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
                                    <Link href="/syzet/optike">
                                        <a className="no-underline">{t('common:nav2')}</a>
                                    </Link>
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
                            <div className="w-full absolute inset-0 bg-gradient-to-t from-black to-black opacity-40 z-10"></div>
                            <div className="flex flex-col items-center">
                                <Image
                                    src="/images/accessor.jpg"
                                    alt="Picture of the author"
                                    layout="fill"
                                />
                                <div className="button-before uppercase font-bold tracking-wider absolute bottom-11 z-20">
                                    <Link href="/syzet/aksesorë">
                                        <a className="no-underline">{t('common:nav3')}</a>
                                    </Link>
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
                                    <Link href="/syzet/rezervo">
                                        <a className="no-underline">{t('common:nav4')}</a>
                                    </Link>
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
