import React from 'react';
import Image from "next/image";

function Banner(props) {
    return (
        <div className="relative h-[300px] sm:h-[500px] lg:h-[500px]
        xl:h-[600px] 2xl:h-[700px]">
            <Image 
            objectFit="cover"
            layout="fill"
            src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"/>
            <div className="absolute top-1/2 text-center w-full">
                <p className="text-md md:text-lg font-bold">¿No sabés adónde ir? ¡Perfecto!
                </p>
                <button className="bg-white text-purple-500
                px-10 py-4 shadow-md rounded-full font-bold my-3
                hover:shadow-xl active:scale-105 transition duration-150">Búsqueda flexible</button>
            </div>
        </div>
    );
}

export default Banner;