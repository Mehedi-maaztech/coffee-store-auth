import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const Login = () => {
    const { loginUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const user = { email, password }
        // console.log(user);

        loginUser(email, password)
            .then(res => {
                
                // console.log("User logged in", user);
                
                const lastSignInTime = res.user.metadata.lastSignInTime;
                const loginInfo = {email, lastSignInTime}

                // axios fetch to update login time
                axios.patch('https://coffee-store-server-x9i2.onrender.com/users', loginInfo)
                .then(data => {
                    console.log(data.data)
                })
                // fetch('https://coffee-store-server-x9i2.onrender.com/users', {
                //     method: "PATCH",
                //     headers: {
                //         'content-type' : 'application/json'
                //     },
                //     body: JSON.stringify(loginInfo)
                // })
                // .then(res => res.json())
                // .then(data => {
                //     console.log('sign in info updated in db',data)
                // })
                const newUser = res.user
                setUser(newUser);
                form.reset();
                navigate('/');
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    // console.log(user);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full max-w-md">
                <div className="card w-full bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center mb-4 text-neutral">
                            Welcome Back ☕
                        </h2>
                        <form className="space-y-4" onSubmit={handleLogin}>
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
                                <button className="btn btn-neutral w-full">Login</button>
                            </div>
                        </form>

                        {/* Divider */}
                        <div className="divider">OR</div>

                        {/* Social Login Example (optional) */}
                        <button className="btn btn-outline w-full">Continue with Google</button>

                        {/* Footer link */}
                        <p className="text-center text-sm mt-4">
                            Don’t have an account?{" "}
                            <Link to="/auth/register" className="link link-hover font-medium text-primary">
                                Register now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;