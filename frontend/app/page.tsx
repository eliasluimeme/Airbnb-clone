import { ToastContainer } from "react-toastify";
import Categories from "./components/categories";
import PropertyList from "./components/properties/propertyList";

export default function Home() {
  return (
    <main>
      <div className="bg-airbnb text-white text-center py-2 mb-4">
        NOTE: This site is a clone website. It is not the real, official site. Its purpose is to look like the official site for educational purposes. This site is not for active use. Do NOT enter your credentials or share any personal information.
      </div>

      <div className="max-w-[1500px] mx-auto px-6">
        <Categories />

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <PropertyList />
        </div>
      </div>

      
    </main>
  );
}
