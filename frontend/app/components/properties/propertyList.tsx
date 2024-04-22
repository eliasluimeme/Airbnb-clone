'use client'

import PropertyListItems from "./propertyListItems";
import { useEffect, useState } from "react";
import apiService from "@/app/services/apiService";

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
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const markFavorite = (id: string, favorited: boolean) => {
        const tmpProperties = properties.map((property: PropertyType) => {
            if (property.id == id) {
                property.favorited = favorited

                if (favorited)
                    console.log('added to favorites')
                else console.log('removed from favorites')
            }
            
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
    }, []);

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