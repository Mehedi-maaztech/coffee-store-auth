import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const user = { name, email, password }
        // console.log(user);

        createUser(email, password)
            .then(res => {
                // console.log(res.user);
                const createdAT = res?.user?.metadata?.creationTime;
                const fireid = res.user.uid;
                const newUser = { name, email, fireid, createdAT }
                
                // axios fetch to save new user info into db
                axios.post('https://coffee-store-server-x9i2.onrender.com/users', newUser)
                .then(data => {
                    console.log(data.data)
                })
                // save new user info into db 
                // fetch(`https://coffee-store-server-x9i2.onrender.com/users`, {
                //     method: "POST",
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(newUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log("user created ", data)
                //     })

                updateUserProfile({
                    displayName: name
                })
                    .then(() => { })
                    .catch(error => console.log(error));
                form.reset();
                navigate('/auth/login');
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full max-w-md">
                <div className="card w-full bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center mb-4 text-neutral">
                            Welcome Back ☕
                        </h2>
                        <form className="space-y-4" onSubmit={handleRegister}>
                            {/* Name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            {/* Email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="input input-bordered w-full"
                                    required
                                />
                                <label className="label justify-end">
                                    <a href="#" className="label-text-alt link link-hover text-sm">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>

                            {/* Button */}
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral w-full">Register</button>
                            </div>
                        </form>

                        {/* Divider */}
                        <div className="divider">OR</div>

                        {/* Social Login Example (optional) */}
                        <button className="btn btn-outline w-full">Continue with Google</button>

                        {/* Footer link */}
                        <p className="text-center text-sm mt-4">
                            Have an account?{" "}
                            <Link to="/auth/login" className="link link-hover font-medium text-primary">
                                Login now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;