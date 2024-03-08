'use client'

import PropertyListItems from "./propertyListItems";
import { useEffect, useState } from "react";
import apiService from "@/app/services/apiService";

export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
}

const PropertyList = () => {
    const [properties, setProperties] = useState<PropertyType[]>([]);

    const getProperties = async () => {
        const properties = await apiService.get("/api/properties/")
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