import Image from "next/image";
import { useRouter } from "next/navigation";
import { PropertyType } from "./propertyList";
import FavoriteButton from "../favoriteButton";

interface PropertyProps {
    property: PropertyType;
    markFavorite?: (favorited: boolean) => void;
}

const PropertyListItems: React.FC<PropertyProps> = ({
    property,
    markFavorite
}) => {
    const router = useRouter();

    return (
        <div 
            className="cursor-pointer"
            onClick={() => router.push(`/properties/${property.id}`)}
        >
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    src="https://res.cloudinary.com/dwv2hywwe/image/upload/v1725742865/zl8of0hvfdohascs6caj.jpg"
                    // src={property.image_url}
                    sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px" 
                    className="hover:scale-110 object-cover transition h-full w-full" 
                    alt={property.title}
                    unoptimized={true}
                />

                {markFavorite && (
                    <FavoriteButton 
                        id={property.id}
                        favorited={property.favorited}
                        markFavorite={(favorited) => markFavorite(favorited)}
                    />
                )}
                
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">{property.title}</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-grey-500"><strong>${property.price_per_night}</strong> per night</p>
            </div>
        </div>
    )
}

export default PropertyListItems;