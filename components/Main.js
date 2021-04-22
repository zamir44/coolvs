import Link from 'next/link'
import Image from 'next/image'

function Main() {
    return (
        <>
            

            <div className="mx-auto text-center">
                <p className="text-center my-20">Optike, Dielli, Aksesorw</p>
                <div className="relative">
                
                <Image
                className="avatar"
                src="/../public/images/optic.jpg"
                alt="Picture of the author"
                layout="intrinsic"
                width={550}
                height={500}
                objectFit="cover"  
                />
                <div className="overlay"></div>
                </div>
                
            </div>
        </>
    )
}

export default Main
