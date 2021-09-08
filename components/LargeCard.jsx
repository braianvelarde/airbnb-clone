import React from 'react';
import Image from "next/image";

function LargeCard({buttonText, img, title, subTitle}) {
    return (
        <section className="relative py-16 mx-8 sm:mx-16">
            <div className="relative h-96 min-w-[300px] cursor-pointer">
            <Image src={img} layout="fill" objectFit="cover" 
            className="rounded-2xl"/>
            </div>

            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-56 sm:w-64">{title}</h3>
                <h4 className="text-2xl mb-3 w-64 sm:w-80">{subTitle}</h4>
                <button className="bg-gray-900 text-white mt-5 
                text-sm rounded-lg px-4 py-2 hover:bg-white hover:text-gray-900
                transition duration-200">{buttonText}</button>
            </div>
        </section>
    );
}

export default LargeCard;