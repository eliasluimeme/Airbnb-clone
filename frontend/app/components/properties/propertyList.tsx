'use client'

import PropertyListItems from "./propertyListItems";
import { useEffect, useState } from "react";
import apiService from "@/app/services/apiService";

export type PropertyType = {
    id: string;
    title: string;
    image_url: string;
    price_per_night: number;
}

interface PropertyListProps {
    landlord_id?: string | null;
}

const PropertyList: React.FC<PropertyListProps> = ({
    landlord_id
}) => {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        let url = "/api/properties/"
        
        if (landlord_id)
            url += `?landlord_id=${landlord_id}`

        const properties = await apiService.get(url)
        setProperties(properties.data)
    }

    useEffect(() => {
        getProperties()
    }, []);

    return (
        <>
            {properties.map((property) => {
                return <PropertyListItems key={property.id} property={property} />
            })}
        </>
    )
}

export default PropertyList;