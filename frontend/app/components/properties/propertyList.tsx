'use client'

import PropertyListItems from "./propertyListItems";
import { useEffect, useState } from "react";

export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
}

const PropertyList = () => {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        const url = "http://localhost:8000/api/properties/"

        await fetch(url, {
            method: "GET",
        })
        .then(response => response.json())
        .then((json):any => {
            console.log('json', json)

            setProperties(json.data)
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    }

    useEffect(() => {
        getProperties();
    }, [])

    return (
        <>
            {properties.map((property) => {
                return <PropertyListItems key={property.id} property={property} />
            })}
        </>
    )
}

export default PropertyList;