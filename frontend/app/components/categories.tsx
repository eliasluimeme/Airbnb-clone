'use client'

import Image from "next/image";
import { useState } from 'react';
import useSearchModal, { SearchQuery } from "../hooks/useSearchModal";

const Categories = () => {
    const searchModal = useSearchModal()
    const [category, setCategory] = useState('')

    const _setCategory = (_category: string) => {
        setCategory(_category)

        const query: SearchQuery = {
            country: searchModal.query.country,
            checkIn: searchModal.query.checkIn,
            checkOut: searchModal.query.checkOut,
            guests: searchModal.query.guests,
            bedrooms: searchModal.query.bedrooms,
            bathrooms: searchModal.query.bathrooms,
            category: _category
        }

        searchModal.setQuery(query)
    }

    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div 
                onClick={() => _setCategory('')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-grey-200 hover:opacity-100`}
            >
                <Image src="/categoryIcons-trending.jpeg" alt="Category - all" width={20} height={20}/>
                <span className="text-xs">All</span>
            </div>

            <div 
                onClick={() => _setCategory('Trending')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Trending' ? 'border-black' : 'border-white'} opacity-60 hover:border-grey-200 hover:opacity-100`}
            >
                <Image src="/categoryIcons-trending.jpeg" alt="Category - trending" width={20} height={20}/>
                <span className="text-xs">Trending</span>
            </div>

            <div 
                onClick={() => _setCategory('Amazing pools')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Amazing pools' ? 'border-black' : 'border-white'} opacity-60 hover:border-grey-200 hover:opacity-100`}
            >
                <Image src="/categoryIcons-pools.jpeg" alt="Category - amazing pool" width={20} height={20}/>
                <span className="text-xs">Amazing pools</span>
            </div>

            <div 
                onClick={() => _setCategory('Beachfront')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Beachfront' ? 'border-black' : 'border-white'} opacity-60 hover:border-grey-200 hover:opacity-100`}
            >
                <Image src="/categoryIcons-beachfront.jpeg" alt="Category - beachfront" width={20} height={20}/>
                <span className="text-xs">Beachfront</span>
            </div>

            <div 
                onClick={() => _setCategory('Riads')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Riads' ? 'border-black' : 'border-white'} opacity-60 hover:border-grey-200 hover:opacity-100`}
            >
                <Image src="/categoryIcons-riads.jpeg" alt="Category - riads" width={20} height={20}/>
                <span className="text-xs">Riads</span>
            </div>

            <div 
                onClick={() => _setCategory('Camping')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Camping' ? 'border-black' : 'border-white'} opacity-60 hover:border-grey-200 hover:opacity-100`}
            >
                <Image src="/categoryIcons-camping.jpeg" alt="Category - camping" width={20} height={20}/>
                <span className="text-xs">Camping</span>
            </div>

            <div 
                onClick={() => _setCategory('Mansions')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Mansions' ? 'border-black' : 'border-white'} opacity-60 hover:border-grey-200 hover:opacity-100`}
            >
                <Image src="/categoryIcons-mansions.jpeg" alt="Category - mansions" width={20} height={20}/>
                <span className="text-xs">Mansions</span>
            </div>
        </div>
    );
}

export default Categories;