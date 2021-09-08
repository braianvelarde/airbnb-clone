import React from 'react';
import Image from "next/image";

function SmallCard({img, location, distance}) {
    return (
        <div className="flex items-center mt-4 mx-2 rounded-xl p-3
        cursor-pointer  hover:bg-gray-100 hover:scale-105 transition duration-200">
            <div className="relative h-16 w-16">
                <Image src={img} layout="fill" className="rounded-lg"/>
            </div>
            <div className="ml-4">
                <h2 className="font-bold">{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        </div>
    );
}

export default SmallCard;