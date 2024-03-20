import Image from "next/image"

interface CategoriesProps {
    dataCategory: string
    setCategory: (category: string) => void
}

const Categories: React.FC<CategoriesProps> = ({ dataCategory, setCategory }) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
                <div 
                    onClick={() => setCategory("Trending")}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "Trending" ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-grey-200 hover:opacity-100`}
                >
                        <Image src="/categoryIcons-trending.jpeg" alt="Category - pool" width={20} height={20}/>
                        <span className="text-xs">Trending</span>
                </div>

                <div 
                    onClick={() => setCategory("Amazing pools")}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "Amazing pools" ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-grey-200 hover:opacity-100`}
                >
                        <Image src="/categoryIcons-pools.jpeg" alt="Category - pool" width={20} height={20}/>
                        <span className="text-xs">Amazing pools</span>
                </div>

                <div 
                    onClick={() => setCategory("Beachfront")}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "Beachfront" ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-grey-200 hover:opacity-100`}
                >
                        <Image src="/categoryIcons-beachfront.jpeg" alt="Category - pool" width={20} height={20}/>
                        <span className="text-xs">Beachfront</span>
                </div>

                <div 
                    onClick={() => setCategory("Riads")}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "Riads" ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-grey-200 hover:opacity-100`}
                >
                        <Image src="/categoryIcons-riads.jpeg" alt="Category - pool" width={20} height={20}/>
                        <span className="text-xs">Riads</span>
                </div>

                <div 
                    onClick={() => setCategory("Camping")}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "Camping" ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-grey-200 hover:opacity-100`}
                >
                        <Image src="/categoryIcons-camping.jpeg" alt="Category - pool" width={20} height={20}/>
                        <span className="text-xs">Camping</span>
                </div>

                <div 
                    onClick={() => setCategory("Mansions")}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == "Mansions" ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-grey-200 hover:opacity-100`}
                >
                        <Image src="/categoryIcons-mansions.jpeg" alt="Category - pool" width={20} height={20}/>
                        <span className="text-xs">Mansions</span>
                </div>
            </div>
        </>
    )
}

export default Categories;