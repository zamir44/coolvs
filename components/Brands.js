import React from "react";
import SVG from "react-inlinesvg";


const branditems = [
   '/svg/guess.svg',
   '/svg/armani-exchange.svg',
   '/svg/carrera.svg',
   '/svg/just-cavalli.svg',
   '/svg/lacoste.svg',
   '/svg/pierre-cardin.svg',
   '/svg/police.svg',
   '/svg/ray-ban.svg',
   '/svg/timberland.svg',
]


const Brands = () => {
    
    return (
        <>
            <div className=" w-11/12 mx-auto mt-40 overflow-hidden"> 
                <div className="grid grid-cols-2 items-center justify-center lg:grid-cols-4 lg:grid-rows-2 my-16">
                    {branditems.map(brand => {
                        return <SVG key={brand} src={brand}  className="w-44 lg:w-52 xl:w-60 h-auto mx-auto fill-current text-gray-300" />
                    })}
                </div>
            </div>
        </>
    )
}

export default Brands

