import { useLoaderData } from "react-router-dom";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useContext, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
const Users = () => {
    const { terminateUser } = useContext(AuthContext);
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    console.log(users)
    const handleDelete = (id) => {
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
                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            terminateUser(users.fireid)
                                .then(() => {
                                    console.log('deleted from firebase also');
                                })
                            const remaining = users.filter(user => user._id !== id)
                            setUsers(remaining);
                        }
                    })
            }
        });


    }
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="min-h-[50vh] max-w-7xl mx-auto py-10">
                <h2 className="text-2xl font-bold">Users List {users.length}</h2>
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
                                    users.map((user, idx) =>
                                        <tr key={user._id}>
                                            <th className="text-center">{idx + 1}</th>{/* auto incress here */}
                                            <td className="text-center">{user.name}</td>
                                            <td className="text-center">{user.email}</td>
                                            <td className="text-center">{user.createdAT}</td>
                                            <td className="text-center">{user.lastSignInTime}</td>
                                            <td className="text-center">
                                                <button className="btn btn-ghost text-xl text-yellow-600"> <FaRegEdit /></button>
                                                <button className="btn btn-ghost text-xl text-red-600" onClick={() => handleDelete(user._id)}><MdOutlineDeleteOutline /></button>
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

export default Users;