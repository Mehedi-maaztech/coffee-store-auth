import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { name, chef, supplier, taste, category, details, photourl } = coffee;
    const customFontStyles = `
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
        .font-dancing-script {
            font-family: 'Dancing Script', cursive;
        }
    `;
    const title = "Niceties";
    return (
        <div className=''>
            <div
                className="min-h-screen p-4 md:p-8 flex flex-col items-center font-inter"
                data-theme="corporate"
                style={{
                    backgroundColor: 'rgb(245, 245, 245)',
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/clean-textile.png")',
                    backgroundRepeat: 'repeat'
                }}
            >
                <style>{customFontStyles}</style>
                <div className="hero w-full max-w-4xl mx-auto p-0">
                    <div className="hero-content flex-col lg:flex-row p-6 md:p-10 w-full rounded-2xl shadow-2xl bg-white/95 relative">
                        <div className="mb-8 absolute top-5 left-5">
                            <Link to='/' className="text-gray-600 hover:text-gray-800 flex items-center">
                                <FaArrowLeft className="mr-2" /> Back to Home
                            </Link>
                        </div>
                        {/* Image Section */}
                        <div className='md:w-xs flex justify-center items-center'>
                            <img
                                src={photourl}
                                alt={name}
                                className="rounded-lg h-auto mb-6 lg:mb-0"
                                onError={(e) => {
                                    // Fallback image if the placeholder URL fails
                                    e.target.onerror = null;
                                    e.target.src = "https://placehold.co/350x450/333333/FFFFFF?text=Image+Not+Found";
                                }}
                            />
                        </div>

                        <div className="lg:ml-10">
                            <h1
                                // Applied the custom font and style
                                className="text-6xl font-dancing-script text-gray-800 mb-6 pb-2"
                                style={{ color: '#5C3E2D' }}
                            >
                                {title}
                            </h1>

                            <div className="space-y-3 text-base md:text-lg">
                                {/* Detail Rows: min-w-[110px] keeps labels aligned */}
                                <p className="flex">
                                    <span className='font-semibold min-w-[110px]'>Name : </span> <span className="text-gray-600">{name}</span>
                                </p>
                                <p className="flex">
                                    <span className='font-semibold min-w-[110px]'>Chef : </span> <span className="text-gray-600">{chef}</span>
                                </p>
                                <p className="flex">
                                    <span className='font-semibold min-w-[110px]'>Supplier : </span> <span className="text-gray-600">{supplier}</span>
                                </p>
                                <p className="flex">
                                    <span className='font-semibold min-w-[110px]'>Taste : </span> <span className="text-gray-600">{taste}</span>
                                </p>
                                <p className="flex">
                                    <span className='font-semibold min-w-[110px]'>Category : </span> <span className="text-gray-600">{category}</span>
                                </p>
                                <p className="flex">
                                    <span className='font-semibold min-w-[110px]'>Details : </span> <span className="text-gray-600">{details}</span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;