export type Property = {
    id: string;
    price_per_night: number;
}

interface ReservationSidebarProps {
    property: Property;
}

const ReservationSideBar: React.FC<ReservationSidebarProps> = ({
    property
}) => {
    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border bourder-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">${property.price_per_night} per nigth</h2>

            <div className="mb-6 p-3 border boder-gray-400 rounded-xl">
                <label className="mb-2 lock font-bold text-xs">Guests</label>

                <select className="w-full -ml-1 text-xm">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                </select>
            </div>

            <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">
                Book
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>$200 * 4 nights</p>

                <p>$800</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Bnb fee</p>

                <p>$40</p>
            </div>

            <hr />

            <div className="mb-4 flex justify-between align-center font-bold">
                <p>Total</p>

                <p>$840</p>
            </div>
        </aside>
    )
}

export default ReservationSideBar;