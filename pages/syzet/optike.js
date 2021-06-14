import Link from 'next/link'
import Image from 'next/image'
import Layout from "../../components/layout/Layout"
import useTranslation from 'next-translate/useTranslation'


const optike = () => {
    let { t } =  useTranslation()
    return (
        <>
            <Layout>
         
                <div className="hero-syze relative">
                    <Image
                        src="/images/collection_ogav_1400x.jpg"
                        alt="Picture of the author"
                        objectFit="cover"
                        layout="fill"
                    />
                </div>
         
                <div className="px-20 mx-auto">
                <div className="lg:w-3/5 my-24 text-center ml-0 lg:text-left lg:ml-20">
                    <p className="text-gray-800 uppercase text-2xl md:text-3xl lg:text-4xl tracking-wider mb-5">{t('optike:opticsTitle')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg">{t('optike:opticsDescription')}</p>
                </div>
                    <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <Link href="/">
                        <a>
                            <figure className="text-center relative">
                                <img src="/showcase/Guess-GU7695-S-66B-d000.jpg" className="" alt="Picture of the author"/>
                                <img src="/showcase/Guess-GU7695-S-66B.jpg" className="absolute inset-0 opacity-0 hover:opacity-100" alt="Picture of the author"/>
                            </figure>
                        </a>
                    </Link>
                    
                        
                        <figure className="mx-auto relative">
                        <Link href="/carouselSlider">
                            <a>
                                <img src="/showcase/vogue-VO5334-W44-54_000A.jpg" alt="Picture of the author"/>
                                <img src="/showcase/vogue-VO5334-W44-54_030A.jpg" className="absolute inset-0 opacity-0 hover:opacity-100" alt="Picture of the author"/>
                                <div className="text-center hover:text-blue-500 uppercase">Ray Ban | Unisex</div>

                                </a>
                        </Link>
                            
                        </figure>
                        <figure>
                            <img src="/showcase/vogue-VO5239-W656-52_000A.jpg" alt="Picture of the author"/>
                        </figure>
                        <figure>
                            <img src="/showcase/6795254_d2.jpg" alt="Picture of the author"/>
                        </figure>
                        <figure>
                            <img src="/showcase/vogue-VO5239-W656-52_000A.jpg" alt="Picture of the author"/>
                        </figure>
                        <figure>
                            <img src="/showcase/vogue-VO5239-W656-52_000A.jpg" alt="Picture of the author"/>
                        </figure>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default optike
