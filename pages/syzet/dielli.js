import Layout from '../../components/layout/layout'
import Image from 'next/image'
import Link from 'next/link'


const dielli = () => {
    return (
        <>
            <Layout>
            <div className="relative z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-black opacity-30 z-20"></div>
                <Image
                    src="/images/maxresdefault.jpg"
                    alt="Picture of the author"
                    height={900}
                    width={2000}
                    objectFit="cover"
                    layout="responsive"
                />
            </div>
                <div className="w-3/5 mt-24 ml-12">
                    <h4 className="uppercase">syze dielli</h4>
                    <p>Cool Vision syzet kombinojnë syze dielli të qëndrueshme me estetikën urbane.
                    Stilet e lehta janë importuar në zemër të Tetovës. Zgjidhni syzet e diellit nga koleksioni ynë i gjerë!
                    </p>
                </div>

                <div className="px-20 mx-auto">
                    <div className="grid grid-cols-3 gap-12">
                    <Link href="/">
                        <a>
                            <figure className=" text-center relative">
                                <img src="/showcase/Guess-GU7695-S-66B-d000.jpg" className="" alt="Picture of the author"/>
                                <img src="/showcase/Guess-GU7695-S-66B.jpg" className="absolute inset-0 opacity-0 hover:opacity-100" alt="Picture of the author"/>
                            </figure>
                        </a>
                    </Link>
                    
                        
                        <figure className="mx-auto relative">
                            <img src="/showcase/sgue-g025411-m109916-bi-3.jpg" className="" alt="Picture of the author"/>
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
