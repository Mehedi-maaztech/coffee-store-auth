
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
// import { use, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { FaRegEdit } from 'react-icons/fa';

const Users2 = () => {

    const { data: users, isPending, isError, error} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('https://coffee-store-server-x9i2.onrender.com/users');
            return res.data;
        }
    })
    // const [users, setUsers] = useState([]);
    // useEffect(() => { 
    //     fetch('https://coffee-store-server-x9i2.onrender.com/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    //  }, []);

    if (isPending) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <span className="loading loading-dots loading-xl"></span>
            </div>
        );

    }

    if(isError){
        return <div className='flex justify-center items-center min-h-[50vh]'>
            <div className="text-center text-red-500">Error: {error.message}</div>
        </div>
    }
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="min-h-[50vh] max-w-7xl mx-auto py-10">
                <h2 className="text-2xl font-bold">Users List {users?.length}</h2>
                <div className="users-table">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="text-center">#</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Email</th>
                                    <th className="text-center">Created At</th>
                                    <th className="text-center">Last Sign In</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users?.map((user, idx) =>
                                        <tr key={user._id}>
                                            <th className="text-center">{idx + 1}</th>
                                            <td className="text-center">{user.name}</td>
                                            <td className="text-center">{user.email}</td>
                                            <td className="text-center">{user.createdAT}</td>
                                            <td className="text-center">{user.lastSignInTime}</td>
                                            <td className="text-center">
                                                <button className="btn btn-ghost text-xl text-yellow-600"> <FaRegEdit /></button>
                                                {/* <button className="btn btn-ghost text-xl text-red-600" onClick={() => handleDelete(user._id)}><MdOutlineDeleteOutline /></button> */}
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Users2;