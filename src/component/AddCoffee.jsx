import { FaArrowLeft } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddCoffeeForm = () => {

    const handleAddCoffe = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photourl = form.photourl.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photourl }
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        //position: "top-end",
                        icon: "success",
                        title: "Coffee Added Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
    }
    return (
        <div className="flex justify-center items-center py-12 px-4 bg-[#F4F3F0]">
            <div
                className="bg-base-100 p-8 md:p-12 rounded-lg shadow-xl max-w-4xl w-full"
                style={{ backgroundImage: 'url("/path/to/your/light-coffee-pattern.png")', backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <div className="mb-8">
                    <Link to='/' className="text-gray-600 hover:text-gray-800 flex items-center">
                        <FaArrowLeft className="mr-2" /> Back to Home
                    </Link>
                </div>

                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Add New Coffee</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.
                    </p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleAddCoffe}>
                    {/* Name */}
                    <div>
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-gray-700">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered w-full bg-white text-gray-800 border-gray-300" />
                    </div>

                    {/* Chef */}
                    <div>
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-gray-700">Chef</span>
                        </label>
                        <input type="text" name='chef' placeholder="Enter coffee chef" className="input input-bordered w-full bg-white text-gray-800 border-gray-300" />
                    </div>

                    {/* Supplier */}
                    <div>
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-gray-700">Supplier</span>
                        </label>
                        <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full bg-white text-gray-800 border-gray-300" />
                    </div>

                    {/* Taste */}
                    <div>
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-gray-700">Taste</span>
                        </label>
                        <input type="text" name='taste' placeholder="Enter coffee taste" className="input input-bordered w-full bg-white text-gray-800 border-gray-300" />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-gray-700">Category</span>
                        </label>
                        <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered w-full bg-white text-gray-800 border-gray-300" />
                    </div>

                    {/* Details */}
                    <div>
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-gray-700">Details</span>
                        </label>
                        <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered w-full bg-white text-gray-800 border-gray-300" />
                    </div>

                    {/* Photo URL (Full width) */}
                    <div className="md:col-span-2"> {/* Make this input span both columns */}
                        <label className="label">
                            <span className="label-text text-lg font-semibold text-gray-700">Photo</span>
                        </label>
                        <input type="text" name='photourl' placeholder="Enter photo URL" className="input input-bordered w-full bg-white text-gray-800 border-gray-300" />
                    </div>

                    {/* Submit Button (Full width) */}
                    <div className="md:col-span-2 flex justify-center mt-6">
                        <button type="submit" className="btn btn-block bg-yellow-600 border-yellow-600 hover:bg-yellow-700 hover:border-yellow-700 text-white text-lg py-3 px-8 rounded-lg transition duration-200">
                            Add Coffee
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffeeForm;