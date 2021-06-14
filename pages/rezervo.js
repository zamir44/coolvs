import Layout from "../components/layout/Layout"
import { ImLocation } from 'react-icons/im'
import {FiPhone} from 'react-icons/fi'
import {BiEnvelope} from 'react-icons/bi'
import Link from 'next/link'
import React from 'react'


const rezervo = () => {
    return (
        <>
            <Layout>
                <div className="max-w-5xl mx-auto lg:my-28 flex lg:flex-row flex-col">
                    <div className="w-2/4 h-auto relative hidden lg:block">
                        <img
                            alt="Fotoja e rezervimeve"
                            src="/images/DSCF8806_750x960_crop_center.webp"
                            className="w-full h-full absolute inset-0 filter grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t w-full h-full from-black to-black z-20 opacity-80"></div>
                        <div className="absolute z-30 inset-y-48 ml-8">
                            <div className="flex flex-row ml-7">
                            <Link href="https://www.google.com/maps/@41.7966481,20.9149102,15z">
                                <a className="mt-1">
                                    <ImLocation className="text-white hover:text-blue-500 transition cursor-pointer"/>
                                </a>
                            </Link>
                                <div>
                                    <p className="text-white ml-10">Adresa</p>
                                    <p className="ml-10 text-gray-500">Vero Jumbo - Rruga 113 nr. 3
                                    <br/>1200 Tetovë</p>
                                </div>
                            </div>

                            <div className="flex flex-row ml-7 mt-7">
                                <div className="flex flex-row">
                                    <FiPhone className="text-base text-white mt-1 lg:text-lg"/>
                                    <div>
                                        <p className="text-white ml-10">Na telefononi</p>
                                        <p className="ml-10"><a href="tel: [389] 75 30 20 50" className="hover:text-white text-blue-500 transition">[389] 75 30 20 50</a></p>
                                    </div>
                                </div>                    
                            </div>

                            <div className="flex flex-row ml-7 mt-7">
                                <div className="flex flex-row">
                                    <BiEnvelope className="text-base text-white mt-1 lg:text-lg"/>
                                    <div>
                                        <p className=" text-white ml-10">Ju suportojmë</p>
                                        <p className="ml-10 text-blue-500">kontakt@shembull.com</p>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                        
                    </div>

                    

                <div className="lg:w-2/4 w-full mx-auto relative">
                    <img
                        alt="Fotoja e rezervimeve"
                        src="/images/DSCF8806_750x960_crop_center.webp"
                        className="w-full h-full absolute inset-0 z-10 filter grayscale lg:hidden"
                    />
                        <div className="absolute inset-0 bg-gradient-to-t w-full h-full from-black to-black z-20 opacity-80 lg:hidden"></div>
                    <form 
                        name="contact 1" 
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        className="relative z-50 opacity-100 w-2/4 lg:w-full mx-auto py-28 lg:py-0"
                    >

                    <input type="hidden" name="form-name" value="contact 1"/>
                    <div hidden>
                        <input name="bot-field"/>
                    </div>
                    
                        <div className="ml-0 lg:ml-16 uppercase flex flex-col">
                        <h3 className="lg:text-black text-center normal-case lg:text-2xl font-bold text-white opacity-90 text-3xl">Rezervoni Takim</h3>
                        <p className="lg:text-sm text-md normal-case mb-10 text-center mt-2 text-gray-500">Shënoni detajet dhe ne do ju kontaktojme nëpërmjet telefonit apo emailit</p>
                            <p>
                            <label className="text-sm text-blue-500 lg:text-black">Emri juaj:</label>
                            </p>
                            <input type="text" name="name" placeholder="shënoni emrin" className="py-2 pr-32 pl-5 mt-2 bg-blue mb-6"/>  
                            <p>
                            <label className="text-sm text-blue-500 lg:text-black">E-maili juaj:</label>
                            </p>
                            <input type="email" name="email" placeholder="psh. shembull@email.com" className="py-2 pr-32 pl-5 mt-2 mb-6"/>
                            <p>
                            <label className="text- text-blue-500 lg:text-black">Kontakt telefoni:</label>
                            </p>
                            <input type="phone" name="phone" placeholder="Numri juaj" className="py-2 pr-32 pl-5 mt-2 mb-6"/>
                            <p>
                            </p>
                            <p>
                            <label className="text-sm text-blue-500 lg:text-black" >Mesazhi:</label>
                            </p>
                            <textarea name="message" placeholder="Na dërgoni mesazh" className="pt-2 pb-6 pr-36 pl-5 mt-2 mb-6"></textarea>
                            <p className="self-center">
                            <button type="submit" className="rezervo-button uppercase text-md tracking-wider "><a className="no-underline">dërgo</a></button>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>

        



        </>
    )
}

export default rezervo
