import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
const Products = ({loadedCoffee, handleDelete}) => {
    //console.log(coffeeProduct);
    return (
        <div className="max-w-7xl mx-auto md:py-20 sm:py-10">
            <div className="text-center">
                {/* Subtitle */}
                <p className="text-sm text-gray-500 mb-1">--- Sip & Savor ---</p>

                {/* Title */}
                <h2 className="text-4xl font-extrabold text-[#4b2c20] mb-4">
                    Our <span className="text-amber-700">Popular Products</span>
                </h2>

                {/* Button */}
                <Link to='/addCoffee'>
                    <button className="btn bg-[#d2b48c] border-none hover:bg-[#c19a6b] text-[#f1e3de] hover:border-amber-900 font-semibold rounded-none mt-3">
                        Add Coffee <FaCoffee className="ml-2" />
                    </button>
                </Link>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5 py-5">
                {
                    loadedCoffee.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} handleDelete={handleDelete}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Products;