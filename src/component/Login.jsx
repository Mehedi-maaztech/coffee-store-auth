import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        
    }
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