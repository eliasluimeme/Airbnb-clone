'use client'

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import apiService from "@/app/services/apiService";
import PropertyListItems from "./propertyListItems";
import useSearchModal from "@/app/hooks/useSearchModal";
import { getAccessToken } from "@/app/lib/actions";

export type PropertyType = {
    id: string;
    title: string;
    image_url: string;
    price_per_night: number;
    favorited: boolean;
}

interface PropertyListProps {
    landlord_id?: string | null;
    favorites?: boolean | null;
}

const PropertyList: React.FC<PropertyListProps> = ({
    landlord_id,
    favorites
}) => {
    const searchParams = useSearchParams()
    const searchModal = useSearchModal()
    const country = searchModal.query.country
    const numGuests = searchModal.query.guests
    const numBedrooms = searchModal.query.bedrooms
    const numBathrooms = searchModal.query.bathrooms
    const checkinDate = searchModal.query.checkIn
    const checkoutDate = searchModal.query.checkOut
    const category = searchModal.query.category
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const markFavorite = (id: string, favorited: boolean) => {
        const tmpProperties = properties.map((property: PropertyType) => {
            if (property.id == id)
                property.favorited = favorited
            
            return property
        })

        setProperties(tmpProperties)
    }

    const getProperties = async () => {
        let url = "/api/properties/"
        
        if (landlord_id)
            url += `?landlord_id=${landlord_id}`
        else if (favorites) {
            url += `?is_favorites=true`
        } else {
            let urlQuery = ''

            if (country)
                urlQuery += `&country=${country}`
            if (numGuests)
                urlQuery += `&num_guests=${numGuests}`
            if (numBedrooms)
                urlQuery += `&num_bedrooms=${numBedrooms}`
            if (numBathrooms)
                urlQuery += `&num_bathrooms=${numBathrooms}`
            if (category)
                urlQuery += `&category=${category}`
            if (checkinDate)
                urlQuery += `&checkin_date=` + format(checkinDate, 'yyyy-MM-dd')
            if (checkoutDate)
                urlQuery += `&checkout_date=` + format(checkoutDate, 'yyyy-MM-dd')
            if (urlQuery.length) {
                urlQuery = '?' + urlQuery.substring(1)
                url += urlQuery
            }
        }

        const tmpProperties = await apiService.get(url)

        setProperties(tmpProperties.data.map((property: PropertyType) => {
            if (tmpProperties.favorites.includes(property.id))
                property.favorited = true
            else property.favorited = false
            
            return property
        }))
    }

    useEffect(() => {
        getProperties()
    }, [category, searchModal.query, searchParams]);

    return (
        <>
            {properties.map((property) => {
                return (
                    <PropertyListItems 
                        key={property.id} 
                        property={property} 
                        markFavorite={(favorited: any) => markFavorite(property.id, favorited)} 
                    />
                )
            })}
        </>
    )
}

export default PropertyList;