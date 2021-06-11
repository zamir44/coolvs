import Layout from '../../components/layout/Layout'
import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'


const dielli = () => {

    let { t } = useTranslation()

    return (
        <>
            <Layout>
            <div className="relative z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-30 z-20"></div>
            <div className="hero-syze relative">
                <Image
                    src="/images/maxresdefault.jpg"
                    alt="Picture of the author"
                    objectFit="cover"
                    layout="fill"
                />
            </div>
                
            </div>

                <div className="px-20 mx-auto">
                <div className="lg:w-3/5 my-24 text-center ml-0 lg:text-left lg:ml-20">
                    <p className="text-gray-800 uppercase text-2xl lg:text-4xl tracking-wider mb-5">{t('dielli:dielliTitle')}</p>
                    <p className="text-gray-500 text-sm md:text-base lg:text-lg">{t('dielli:dielliDescription')}
                    </p>
                </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <Link href="/">
                        <a>
                            <figure className="text-center relative">
                                <img src="/showcase/Guess-GU7695-S-66B-d000.jpg" className="" alt="Picture of the author"/>
                                <img src="/showcase/Guess-GU7695-S-66B.jpg" className="absolute inset-0 opacity-0 hover:opacity-100" alt="Picture of the author"/>
                            </figure>
                        </a>
                    </Link>
                    
                        
                        <figure className="mx-auto relative">
                            <img src="/showcase/sgue-g025411-m109916-bi-3.jpg" alt="Picture of the author"/>
                            <img src="/showcase/sgue-g025411-m109916-bi-1.jpg" className="absolute inset-0 opacity-0 hover:opacity-100" alt="Picture of the author"/>
                        </figure>
                        <figure>
                            <img src="/showcase/vogue-VO5239-W656-52_000A.jpg" className="h-60" alt="Picture of the author"/>
                        </figure>
                        <figure className="h-24">
                            <img src="/showcase/6795254_d2.jpg" className="h-60" alt="Picture of the author"/>
                        </figure>
                        <figure>
                            <img src="/showcase/vogue-VO5239-W656-52_000A.jpg" className="h-60" alt="Picture of the author"/>
                        </figure>
                        <figure>
                            <img src="/showcase/vogue-VO5239-W656-52_000A.jpg" className="h-60" alt="Picture of the author"/>
                        </figure>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default dielli
