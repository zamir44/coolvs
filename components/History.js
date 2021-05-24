import Image from 'next/image'

const History = () => {
    return (
        <>
        <div className="container-fluid flex flex-row mt-32">
            <div className="text-center row flex-col md:flex-row ">
                <div className="col-md-6 mt-3 mx-auto md:text-left">
                    <div className="md:text-left md:px-10 lg:p-48">
                        <p className="text-lg lg:text-2xl  text-bold uppercase md:text-left tracking-widest">historija</p>
                        <p className="text-sm lg:text-lg  leading-relaxed md:text-left">Historija e Cool Vision është nga një familje e cila merret me biznesin e syzeve për disa breza. Çdo brez mësoi nga ai që i paraprtext-smiu asaj, duke shtuar vizionin e vet sipërmarrës. Sot, Cool Visin po bëhet një kompani e fortë me produkte krijuese, të njohura në të gjithë botën. Një pikë kthese strategjike e udhëhequr nga Agoni dhe familja Xhaferi.</p>
                    </div>
                </div>
                <div className="col-md-6 mx-auto p-0">
                    <Image 
                    src="/../public/showcase/VOGUE_EYEWEAR_KATE_MOSS.jpg"
                    alt="Picture of the author"
                    layout='responsive'
                    width={1000}
                    height={750}
                    loading="lazy"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default History
