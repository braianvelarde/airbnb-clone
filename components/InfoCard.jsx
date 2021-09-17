import React from 'react';
import Image from "next/dist/client/image";
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

function InfoCard({img, location, title, star, description, price, total}) {
    return (
        <div className="flex mx-auto my-5 p-4 border rounded-lg shadow-sm hover:shadow-lg transition duration-100">
            <div className="relative h-24 w-40 flex-shrink-0">
                <Image className="rounded-lg" src={img} layout="fill" objectFit="cover"></Image>
            </div>
            <div className="flex pl-6 flex-col flex-grow">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-sm">{location}</h1>
                    <HeartIcon className="h-6 cursor-pointer hover:scale-105 transition duration-100"/>
                </div>
                <p>{title}</p>
                <p className="text-sm py-5">{description}</p>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-2">
                <StarIcon className="h-8 text-yellow-400"/>
                <p>{star}</p>
                </div>

                <div className="flex flex-col">
                   <p> {price} </p>
                   <p className="text-gray-500"> {total} </p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;