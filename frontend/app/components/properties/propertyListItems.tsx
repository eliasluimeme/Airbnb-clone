import Image from "next/image";

const PropertyListItems = () => {
    return (
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    src='/beach-house.jpg'
                    sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px" 
                    className="hover:scale-110 object-cover transition h-full w-full" 
                    alt="Beach house"
                />
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">Property name</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-grey-500"><strong>$200</strong> per night</p>
            </div>
        </div>
    )
}

export default PropertyListItems;