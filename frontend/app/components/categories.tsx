import Image from "next/image";

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-grey-200 hover:opacity-100">
                <Image src="/categoryIcons-trending.jpeg" alt="Category - pool" width={20} height={20}/>
                <span className="text-xs">Trending</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-grey-200 hover:opacity-100">
                <Image src="/categoryIcons-pools.jpeg" alt="Category - pool" width={20} height={20}/>
                <span className="text-xs">Amazing pools</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-grey-200 hover:opacity-100">
                <Image src="/categoryIcons-beachfront.jpeg" alt="Category - pool" width={20} height={20}/>
                <span className="text-xs">Beachfront</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-grey-200 hover:opacity-100">
                <Image src="/categoryIcons-riads.jpeg" alt="Category - pool" width={20} height={20}/>
                <span className="text-xs">Riads</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-grey-200 hover:opacity-100">
                <Image src="/categoryIcons-camping.jpeg" alt="Category - pool" width={20} height={20}/>
                <span className="text-xs">Camping</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-grey-200 hover:opacity-100">
                <Image src="/categoryIcons-mansions.jpeg" alt="Category - pool" width={20} height={20}/>
                <span className="text-xs">Mansions</span>
            </div>
        </div>
    );
}

export default Categories;