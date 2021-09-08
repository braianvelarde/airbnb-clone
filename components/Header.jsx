import React from 'react';
import Image from "next/image";
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from "@heroicons/react/solid";

function Header(props) {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4
        items-center md:px-10">
            <div className="relative flex items-center h-10 
            cursor-pointer my-auto">
                <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" 
                layout="fill" 
                objectFit="contain"
                objectPosition="left"/>
            </div>
            <div className="flex items-center md:border-2 md:shadow-sm rounded-full
            py-2 mx-au hover:border-red-400 transition duration-200">
                <input placeholder="Empezá tu búsqueda" className="hidden sm:inline-flex flex-grow min-w-0 outline-none md:pl-5 bg-transparent
                txt-sm text-gray-600 placeholder-gray-400"
                type="text"/>
                <SearchIcon className="hidden md:inline-flex flex-shrink-0 flex-grow-0 h-8 bg-red-400
                text-white rounded-full p-2 md:mx-2 cursor-pointer hover:scale-105 transition duration-200"></SearchIcon>
            </div>
            <div className="flex space-x-4 text-gray-500
            items-center justify-end">
                <p className="hidden md:inline-flex cursor-pointer">Sé anfitrión</p>
                <GlobeAltIcon className="hidden sm:inline-flexh-6 cursor-pointer"></GlobeAltIcon>
                <div className="flex items-center
                border-2 rounded-full p-2 space-x-2 hover:shadow-lg transition duration-200">
                    <MenuIcon className="h-6 cursor-pointer"></MenuIcon>
                    <UserCircleIcon className="h-6 cursor-pointer"></UserCircleIcon>
                </div>
            </div>
        </header>
    );
}

export default Header;