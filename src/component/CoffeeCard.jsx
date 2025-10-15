import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const CoffeeCard = ({ coffee, handleDelete }) => {
    const { _id, name, chef, taste, photourl } = coffee;

    return (
        <div className="bg-[#f5f4f1] rounded-xl shadow-md p-4 flex items-center justify-between hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-6">
                <img
                    src={photourl}
                    alt={name}
                    className="w-28 h-28 object-contain rounded-md"
                />
                <div className="space-y-1 text-left">
                    <p className="font-bold text-gray-800">
                        Name: <span className="font-normal">{name}</span>
                    </p>
                    <p className="font-bold text-gray-800">
                        Chef: <span className="font-normal">{chef}</span>
                    </p>
                    <p className="font-bold text-gray-800">
                        Price: <span className="font-normal">{taste} Taste</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Link to={`/coffeeDetails/${_id}`}>
                    <button className="btn btn-sm bg-[#d2b48c] border-none hover:bg-[#c19a6b] text-white">
                        <FaEye />
                    </button>
                </Link>
                <Link to={`/updateCoffee/${_id}`}>
                    <button className="btn btn-sm bg-gray-700 border-none hover:bg-gray-800 text-white">
                        <FaPen />
                    </button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-red-600 border-none hover:bg-red-700 text-white">
                    <FaTrash />
                </button>

            </div>
        </div>
    );
};

export default CoffeeCard;