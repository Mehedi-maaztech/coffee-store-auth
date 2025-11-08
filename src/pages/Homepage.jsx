import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Hero from '../component/Hero';
import Products from '../component/Products';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCoffee, FaEye, FaPen, FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2'
const Homepage = () => {
    const coffeeProduct = useLoaderData();
    const [loadedCoffee, setLoadedCoffee] = useState(coffeeProduct);
    //const { _id, name, chef, taste, photourl } = loadedcoffee;
    //console.log(coffee);

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-d5z5.onrender.com/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // console.log("deleted")
                            const newCoffee = loadedCoffee.filter(c => c._id !== _id)
                            setLoadedCoffee(newCoffee);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className='min-h-screen'><div className="slider">
            <Hero></Hero>
        </div>
            <div className="products">
                <Products loadedCoffee={loadedCoffee} handleDelete={handleDelete}></Products>
            </div>
        </div >
    );
};

export default Homepage;