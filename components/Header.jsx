import React, { useState } from 'react';
import Image from "next/image";
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from 'react-date-range'; //importo daterangepicker
import {es} from "date-fns/locale";
import {useRouter} from "next/dist/client/router";


function Header({placeholder}) {
    const locale = es;
    const router = useRouter();
    const [inputSearch, setInputSearch] = useState("");
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {
        setInputSearch("");
    }

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: inputSearch,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuests: numberOfGuests,
            }
        });
        setInputSearch("");
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4
        items-center md:px-10">
            <div onClick={()=> router.push("/")} className="relative flex items-center h-10 
            cursor-pointer my-auto">
                <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" 
                layout="fill" 
                objectFit="contain"
                objectPosition="left"/>
            </div>
            <div className="flex items-center md:border-2 md:shadow-sm rounded-full
            py-2 mx-au hover:border-red-400 transition duration-200">
                <input placeholder={ placeholder || "Empezá tu búsqueda"} className="hidden sm:inline-flex flex-grow min-w-0 outline-none md:pl-5 bg-transparent
                txt-sm text-gray-600 placeholder-gray-400"
                type="text"
                value={inputSearch} onChange={e=> setInputSearch(e.target.value)}/>
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
           { inputSearch && (<div className="flex flex-col col-span-3 mx-auto mt-2">
               <DateRangePicker
               ranges={[selectionRange]}
               locale={es}
               minDate={new Date()}
               rangeColors={["#FD5B61"]}
               onChange={handleSelect}/>
               <div className="flex items-center border-b mb-4 pb-2">
                  <h2 className="text-2xl pl-2 flex-grow font-semibold">Número de visitantes</h2> 
                  <UserIcon className="h-5"/>
                  <input min={1} type="number" value={numberOfGuests} onChange={e=> setNumberOfGuests(e.target.value)} className="w-12 pl-2 text-lg outline-none text-red-400"/>
               </div>
               <div className="flex">
                   <button onClick={resetInput} className="flex-grow text-gray-500 hover:bg-gray-100">Cancelar</button>
                   <button onClick={search} className="flex-grow text-red-400 hover:bg-gray-100">Buscar</button>
                </div>
            </div>) }
        </header>
    );
}

export default Header;