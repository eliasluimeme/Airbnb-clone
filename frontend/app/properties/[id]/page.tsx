import Image from "next/image";
import ReservationSideBar from "@/app/components/properties/reservationSidebar";

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/beachHouse.jpg"
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image src="/profilPic.png" width={50} height={50} className="rounded-full" alt="Profile picture" />

                        <p><strong>John doe</strong> is your host</p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda minima, vel nostrum modi iure dolores architecto necessitatibus? Eos quae, fugit harum sequi amet natus dolore voluptatum cumque, cupiditate, officia ducimus?</p>
                </div>

                <ReservationSideBar />
            </div>
        </main>
    );
}

export default PropertyDetailPage;