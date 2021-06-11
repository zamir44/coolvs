import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { Transition } from "@headlessui/react"

const History = () => {
    
    let { t } = useTranslation()

    return (
        <>
        <div className="w-full flex flex-row mt-32">
            <div className="text-center flex flex-col md:flex-row ">
                <div className="mt-3 w-full mx-auto md:text-left">
                    <div className="md:text-left px-10 xl:p-32">
                        <p className="text-gray-800 text-lg lg:text-4xl mb-5 text-bold uppercase md:text-left tracking-widest">{t('common:historyTitle')}</p>
                        <p className="text-gray-500 text-sm lg:text-lg leading-relaxed md:text-left mt-0 mb-8 lg:mt-10">{t('common:history')}</p>
                    </div>
                </div>
                <Transition 
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-1/2"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                    show={true}
                    className="w-full mx-auto p-0">

                    <Image 
                        src="/../public/showcase/VOGUE_EYEWEAR_KATE_MOSS.jpg"
                        alt="Picture of the author"
                        layout='responsive'
                        width={1000}
                        height={750}
                    />
                </Transition>
            </div>
        </div>
        </>
    )
}

export default History
